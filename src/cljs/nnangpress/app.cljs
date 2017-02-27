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
            [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

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

                            (wgt/simple-form (fn [x y] 
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

(defmulti sidebar-content 
 "Display sidebar content based on sidebar state." 
  identity)

(defn sidebar-li [label cb]
  (dom/li #js {:onClick cb
               :style #js {:borderBottom "2px solid white" :padding "10px"}} 
          label
          (dom/i #js {:style #js {:float "right"}
                      :className "fa fa-chevron-right"})))

(defn update-sidebar-page!   
  "Effectively routing, change the current page of the admin sidebar." 
  [sidebar-page]
  (om/transact! (mn/sidebar-data) :sidebar-page (fn [_] sidebar-page)))

;Base sidebar menu
(defmethod sidebar-content "base-menu"
  [_] 
  (dom/ul #js {:style #js {:fontWeight "600", :padding "5px", :cursor "pointer", :marginTop "0px"}} 
          (sidebar-li "route settings" #(update-sidebar-page! "route-settings"))
          (sidebar-li "add a widget" #(update-sidebar-page! "widget-select"))))

(defmethod sidebar-content :default
  [_] 
  (dom/ul #js {:style #js {:fontWeight "600", :padding "5px", :cursor "pointer", :marginTop "0px"}} 
          "Default menu"))

(def sidebar-header-p {:border "5px solid #7f8c8d", :padding "10px", :background "#95a5a6", :fontWeight "600"})
(def sidebar-close-icon {:float "right", :margin-top "-5px", :cursor "pointer"})

(defn admin-sidebar 
  "Sidebar primarily for selecting widgets." 
  [{:keys [sidebar-data]} owner]
  (reify 
    om/IRender
    (render 
      [_]
      (dom/div #js {:id "mySidenav"
                    :className "sidenav"
                    :style #js {:width "300px" :display (if (:sidebar-visible sidebar-data) "" "none")}} 

               (dom/p #js {:style (clj->js sidebar-header-p)} 
                      "Nangpress Settings"
                      (dom/i #js {:style (clj->js sidebar-close-icon)
                                  :className "fa fa-times fa-2x"
                                  :onClick #(om/transact! sidebar-data :sidebar-visible u/toggle)}))

               (sidebar-content (:sidebar-page sidebar-data))))))

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
                 (om/build admin-sidebar data)
                 (om/build wgt/admin-toolbar data)
                 (om/build main-view widgets)
                 (om/build nv/navbar route-widget))))))

(defn init 
  "Start here. Initialize the app. Run instrumentation if dev query paramater is set to true.
  Create monolith based on user auth state and init om." 
  []
  (let [current-user (-> js/firebase .auth .-currentUser)
        nangpress-data-chan (chan)]

    (when (= (get (wgt/get-query-params<<) "dev") "true")
      (println "Instrumentation on.")      
      (println (ts/instrument)))

    (mn/ref-cursor-init mn/monolith)

    (go 
      (fb/firebase-get "nangpress-data/" nangpress-data-chan)
      (mn/reset-monolith-atom! 
        (mn/raw-nnangpress->renderable (<! nangpress-data-chan) current-user))

      (om/root master mn/monolith {:target (. js/document (getElementById "super-container"))}))))

