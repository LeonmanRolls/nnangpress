(ns nnangpress.app
  (:import [goog.history Html5History EventType])
  (:require-macros [cljs.core.async.macros :refer  [go go-loop]])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.monolith :as mn]
            [nnangpress.navbars :as nv]
            [nnangpress.widgets :as wgt]
            [nnangpress.core :as cre]
            [nnangpress.utils :as u]
            [nnangpress.routing :as rt]
            [nnangpress.firebase :as fb]
            [cljs.reader :as rdr]
            [goog.events :as ev]
            [goog.dom :as gdom]
            [ajax.core :refer [GET POST]]
            [cljs.spec :as s :include-macros true]
            [cljs.spec.test :as ts :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

(defn simple-form 
  "Inputs and submit, input values will be passed to callback" 
  [cb]
  (let [uid1 (u/uid) 
        uid2 (u/uid)]
    (dom/div nil
             "Widget Order: "
             (dom/input #js {:id uid1 
                             :type "text"})
             (dom/input #js {:id uid2 
                             :type "text"})

             (dom/button #js {:onClick (fn [_]
                                         (cb 
                                           (.-value (wgt/get-node-by-id uid1))
                                           (.-value (wgt/get-node-by-id uid2))))} 
                         "Submit"))))

(defn main-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:add-widget (fn [cursor]
                     (let [widget-id (js/parseInt
                                       (.-value
                                         (om/get-node owner "add-widget")))]
                       (om/transact! cursor (fn [x]
                                              (conj x (wgt/widget-data widget-id))))))
       :remove-widget (fn [cursor]
                        (let [widget-pos (js/parseInt
                                           (.-value
                                             (om/get-node owner "remove-widget")))]
                          (om/transact! cursor (fn [x]
                                                 (u/vec-remove x widget-pos)))))})

    om/IRenderState
    (render-state [_ {:keys [add-widget remove-widget] :as state}]
      (let [all-widgets-data-obs (om/observe owner (mn/all-widgets-data))
            edit-mode-obs (om/observe owner (mn/edit-mode))
            main-view-style-obs (om/observe owner (mn/main-view-style))
            routes-map-obs (om/observe owner (mn/routes-map))
            current-route-obs (om/observe owner (mn/current-route))
            current-route-map (mn/current-route-map
                              (clojure.string/split (first @current-route-obs) #"/")
                              routes-map-obs)]

        (dom/div (clj->js (merge @main-view-style-obs {:className "main-view"}))

                 (apply dom/div nil
                        (om/build-all wgt/all-widget-wrapper data))

                 (when (first @edit-mode-obs)
                   (dom/div #js {:className "edit"}

                            (simple-form (fn [x y] 
                                           (mn/ref-vec-swap 
                                             (:widgets current-route-map) (int x) (int y))))

                            (dom/div nil
                                     "Background Image: "
                                     (dom/input #js {:value (:bg-img @current-route-map)
                                                     :style #js {:width "100%"}
                                                     :onChange (fn [e]
                                                                 (om/update!
                                                                   current-route-map
                                                                   :bg-img
                                                                   (.. e -target -value)))}))

                            (apply dom/div nil
                                   (om/build-all
                                     wgt/select-widget-wrapper
                                     all-widgets-data-obs)))))))))

(defn master [{:keys [:route-widget :current-route :active-route]
               :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [splitter (fn [x] (last (clojure.string/split x #"/")))]
        {:flatten-routes (fn [routes-map]
                           (tree-seq
                             #(contains? % :children)
                             #(:children %)
                             routes-map))

         :set-bg-img (fn [bg-img]
                       (cond
                         (u/string-contains? bg-img "#")
                         (do
                           (set! (-> js/document .-body .-background) "")
                           (set!
                             (-> js/document .-body .-style .-backgroundColor)
                             bg-img))
                         (u/string-contains? bg-img "linear")
                         (set! (-> js/document .-body .-background) bg-img)
                         :file
                         (set!
                           (-> js/document .-body .-background)
                           bg-img)))

         :get-active-route (fn [flat-routes current-route]
                             (->>
                               flat-routes
                               (filter
                                 #(=
                                    (splitter (first current-route))
                                    (splitter (:route-name %))))
                               first))}))

    om/IRenderState
    (render-state [_ {:keys [flatten-routes set-bg-img get-active-route] :as state}]
      (let [{:keys [:bg-img :widgets] :as fresh-active-route} (get-active-route
                                                                (flatten-routes
                                                                  (:routes-map route-widget))
                                                                current-route)
            routes-map-obs (om/observe owner (mn/routes-map))
            current-route-obs (om/observe owner (mn/current-route))
            current-widgets (mn/current-widgets
                              (clojure.string/split (first current-route) #"/")
                              (:routes-map route-widget))]

        (set-bg-img bg-img)
        (if
          (:grey-bg? fresh-active-route)
          (-> (js/$ "body") (.addClass "grey-out"))
          (-> (js/$ "body") (.removeClass "grey-out")))

        (dom/div nil
                 (om/build wgt/admin-toolbar {})
                 (om/build main-view current-widgets)
                 (om/build nv/navbar (:route-widget data)))))))

(defn init 
  "Create monolith based on user auth state an init om" 
  []
  (let [current-user (-> js/firebase .auth .-currentUser)
        nangpress-data-chan (chan)]

    (println (ts/instrument))
    (mn/ref-cursor-init mn/monolith)

    (go 
      (fb/firebase-get "nangpress-data/" nangpress-data-chan)
      (mn/reset-monolith-atom! 
        (mn/raw-nnangpress->renderable (<! nangpress-data-chan) current-user))
      (om/root master mn/monolith
               {:target (. js/document
                           (getElementById "super-container"))}))))

