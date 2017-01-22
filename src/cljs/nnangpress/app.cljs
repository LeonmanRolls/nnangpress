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
            [clojure.spec :as s]
            [cljs.core.async :as cas :refer [>! <! put! chan pub sub close!]]
            [cljs.reader :as rdr]
            [goog.events :as ev]
            [goog.dom :as gdom]
            [ajax.core :refer [GET POST]]
            [replumb.core :as replumb]))

(enable-console-print!)

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
            current-route-obs (om/observe owner (mn/current-route))]

        (dom/div (clj->js (merge @main-view-style-obs {:className "main-view"})) 

                 (apply dom/div nil
                        (om/build-all wgt/all-widget-wrapper data))

                 (when (first @edit-mode-obs)
                   (dom/div #js {:className "edit"}
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
                           (str "/img/backgrounds/" bg-img))))

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

        (om/update! active-route @fresh-active-route)
        (set-bg-img bg-img)
        (if
          (:grey-bg? fresh-active-route)
          (-> (js/$ "body") (.addClass "grey-out"))
          (-> (js/$ "body") (.removeClass "grey-out")))
        
        (dom/div nil
                 (om/build wgt/admin-toolbar {})                                   
                 (om/build main-view current-widgets)
                 (om/build nv/navbar (:route-widget data)))))))

(defn init []
  (let [uid "SGXvf26OEpeVDQ79XIH2V71fVnT2"
        uiconfig #js {:callbacks #js {:signInSuccess (fn [user credential redirectUrl]
                                                       (println "sucessful sign in")
                                                       (.dir js/console user)
                                                       false)}
                      :signInFlow "popup"
                      :signInOptions (array 
                                       #js {:provider js/firebase.auth.EmailAuthProvider.PROVIDER_ID})
                      :tosUrl "https://google.com"
                      :credentialHelper js/firebaseui.auth.CredentialHelper.NONE}
        ui (js/firebaseui.auth.AuthUI. (js/firebase.auth))
        user-data-ref (->
                        (js/firebase.database)
                        (.ref (str "users/" uid)))]

    (mn/ref-cursor-init mn/monolith)

    #_(->
        (js/firebase.database)
        (.ref (str "users/" uid))
        (.once "value")
        (.then (fn [snapshot]
                 (reset! mn/monolith (rdr/read-string (.-data (.val snapshot))))
                 (om/root master mn/monolith
                          {:target (. js/document (getElementById "super-container"))}))))

    (GET "/edn/defaultdata.edn"
         {:handler (fn [resp]
                     (reset! mn/monolith (rdr/read-string resp))
                     (om/root master mn/monolith
                              {:target (. js/document
                                          (getElementById "super-container"))}))})))

(comment

  (defmethod widget 000 [data owner]
    (reify
      om/IInitState
      (init-state [_]
        {:uuid (random-uuid)})

      om/IRenderState
      (render-state [_ {:keys [uuid] :as state}]
        (dom/div nil "Skeleton Widget"))))

  )

