(ns nnangpress.app
  "App initializaiton takes place here."
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
            [cljs.core.async :refer [put! chan <!]]
            [cemerick.url :as url]))

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


(defn main-view 
  "The main view that builds the displayed widgets for the view as well as the admin panel." 
  [data owner]
  (reify
    om/IRender
    (render [_]
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


(defn master 
  "This component is the master of routing. The current route of the app is considered part of the monolith i.e. 
  part of the state of the application. So this component has the job of rendering the admin-toolbar, the widgets 
  for the current route and the navbar (if one has been selected by the user). This is because the navbar 
  is present in all routes." 

  [{:keys [:route-widget :current-route :active-route]
    :as data} owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [flatten-routes] :as state}]
      (let [{:keys [widgets]} (mn/current-route-map 
                                (clojure.string/split (first current-route) #"/") 
                                (:routes-map route-widget))]

        (mn/independent-ref-cursor-watcher owner)
        (dom/div #js {:id "master-container"} 
                 (om/build wgt/admin-toolbar {})
                 (om/build main-view widgets)
                 (om/build nv/navbar route-widget))))))

(defn get-query-params<<
  "Get query params from the current url." 
  []
  (:query (url/url (-> js/window .-location .-href))))

(defn init 
  "Start here. Initialize the app. Run instrumentation if dev query paramater is set to true.
  Create monolith based on user auth state and init om." 
  []
  (let [current-user (-> js/firebase .auth .-currentUser)
        nangpress-data-chan (chan)]

    (when (= (get (get-query-params<<) "dev") "true")
      (println "Instrumentation on.")      
      (println (ts/instrument)))

    (mn/ref-cursor-init mn/monolith)
    (mn/monolith-watcher-init mn/monolith)

    (go 
      (fb/firebase-get "nangpress-data/" nangpress-data-chan)
      (mn/reset-monolith-atom! 
        (mn/raw-nnangpress->renderable (<! nangpress-data-chan) current-user))

      (om/root master mn/monolith {:target (. js/document (getElementById "super-container"))}))))

