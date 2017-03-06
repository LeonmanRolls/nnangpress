(ns nnangpress.components.admin
  "Admin components that the user is not able to edit. Some admin components are able to be used by the end user such 
  as the 'sign in' widget."
  (:require 
    [nnangpress.utils :as u]
    [nnangpress.components.common :as cc]
    [nnangpress.widgets :as wgt]
    [nnangpress.widgetdata :as wd]
    [nnangpress.monolith :as mn]
    [nnangpress.firebase :as fb]
    [nnangpress.dom :as ndom]
    [nnangpress.navbars :as nv]
    [om.dom :as dom :include-macros true]
    [om.core :as om :include-macros true :refer [set-state! update-state!]]))

(declare master)

(defn admin-toolbar 
  "Toolbar to aid in editing the site and provide information. Should not be visible when ordinarily visting the site." 
  [{:keys [sidebar-data]} owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [local-style]}]
      (let [user-email-obs (om/observe owner (mn/user-email))
            site-name-obs (om/observe owner (mn/site-name))
            all-data-obs (om/observe owner (mn/all-data))
            site? (= "site" (:site-state @all-data-obs))]
        (dom/div #js {:className "admin-toolbar"}
                 (dom/b nil "Welcome to Nnangpress alpha | ")
                 (dom/b nil (str " Username:  " (first @user-email-obs)))
                 (dom/b nil (str " | Site name:  " (first @site-name-obs) " | " ))
                 (when site? (cc/standard-button #(om/transact! sidebar-data :sidebar-visible u/toggle) "Menu"))
                 (when site? (cc/standard-button #(mn/auth-state-load-site! master "super-container") "Home"))
                 (when site? (cc/standard-button mn/toggle-edit-mode "Toggle edit mode"))
                 (when site? (cc/standard-button mn/new-site "Save new site"))
                 (when site? (cc/standard-button mn/save-site-data "Save"))
                 (cc/standard-button (fn [_] (fb/firebase-signout identity)) "Sign Out"))))))

(defn select-widget-wrapper 
  "Primarily for edit mode. Allows the widget this wraps to be added to the current route." 
  [{:keys [widget-name widget-uid] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "selectWidget"}
               (dom/div #js {:style #js {:borderBottom "1px solid white" :marginBottom "10px"}} 
                        (dom/span nil widget-name)
                        (dom/button #js {:style #js {:float "right", :background "transparent", :color "white", 
                                                     :cursor "pointer"}
                                         :onClick (fn [_] 
                                                    (mn/ref-conj! 
                                                      (mn/current-widgets-builder<< owner) 
                                                      (wd/widget-data widget-uid)))}
                                    "Add widget"))
               (om/build wgt/widget data {:init-state {:advertise? true}})))))

(defn all-widget-wrapper 
  "Wrap all displayed widgets." 
  [{:keys [object-id] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:style #js {:margin "10px" :position "relative"}} 
               (cc/edit-mode-sense 
                 owner
                 (cc/delete-button  (mn/current-widgets-builder<< owner) :object-id object-id))
               (println "data: " (keys data))
               (om/build wgt/widget data)))))

(defn simple-form 
  "Inputs and submit, input values will be passed to callback." 
  [cb]
  (let [uid1 (u/uid) 
        uid2 (u/uid)]
    (dom/div nil
             (dom/input #js {:id uid1 
                             :type "text"})
             (dom/input #js {:id uid2 
                             :type "text"})

             (dom/button #js {:onClick (fn [_]
                                         (cb 
                                           (.-value (ndom/get-node-by-id uid1))
                                           (.-value (ndom/get-node-by-id uid2))))} 
                         "Submit"))))

(def sidebar-header-p {:border "5px solid #7f8c8d", :padding "10px", :background "#95a5a6", :fontWeight "600"})
(def sidebar-close-icon {:float "right", :margin-top "-5px", :cursor "pointer"})

(defn main-view 
  "The main view that builds the displayed widgets for the view as well as the admin panel." 
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [main-view-style-obs (om/observe owner (mn/main-view-style))]

        (dom/div (clj->js (merge @main-view-style-obs {:className "main-view"}))

                 (apply dom/div nil
                        (om/build-all all-widget-wrapper data)))))))

(defmulti sidebar-content 
 "Display sidebar content based on sidebar state." 
  (fn [sidebar-page owner] sidebar-page))

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
  [data owner] 
  (dom/ul #js {:style #js {:fontWeight "600", :cursor "pointer", :marginTop "0px"}} 
          (sidebar-li "route settings" #(update-sidebar-page! "route-settings"))
          (sidebar-li "add a widget" #(update-sidebar-page! "widget-select"))
          (sidebar-li "Select a navbar" #(update-sidebar-page! "navbar-select"))))

(defn current-route-map-ref-cur 
  "" 
  [owner]
  (let [current-route-obs (om/observe owner (mn/current-route))
        routes-map-obs (om/observe owner (mn/routes-map))]
    (mn/current-route-map
      (clojure.string/split (first @current-route-obs) #"/")
      routes-map-obs)))

;Setting that apply to a specific route. Will be applied to the route the user is currently on.
(defmethod sidebar-content "route-settings"
  [data owner] 
  (let [current-route-map (current-route-map-ref-cur owner)]

    (dom/div nil 
             (dom/u nil "Route Settings")
             (dom/div nil
                      "Background Image: "
                      (dom/input #js {:value (:bg-img @current-route-map)
                                      :style #js {:width "100%"}
                                      :onChange (fn [e]
                                                  (om/update!
                                                    current-route-map
                                                    :bg-img
                                                    (.. e -target -value)))}))

             (dom/br "")
             (dom/u nil "Swap widgets by index")
             (simple-form (fn [x y] 
                                (mn/ref-vec-swap 
                                  (:widgets current-route-map) (int x) (int y)))))))

(defmethod sidebar-content "widget-select"
  [data owner] 
  (let [all-widgets-data-obs (om/observe owner (mn/all-widgets-data))]
    (dom/div nil 
             (dom/u nil "Select a widget")
             (dom/br nil "")
             (apply dom/div nil
                    (om/build-all
                      select-widget-wrapper
                      all-widgets-data-obs)))))

(defn select-navbar-wrapper 
  "Primarily for edit mode. Allows the widget this wraps to be added to the current route." 
  [{:keys [route-widget-id] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "selectWidget"}
               (dom/div #js {:style #js {:borderBottom "1px solid white" :marginBottom "10px"}} 
                        (dom/span nil "Title of navbar")

                        (dom/button #js {:style #js {:float "right", :background "transparent", :color "white", 
                                                     :cursor "pointer"}
                                         :onClick (fn [_] 
                                                    (om/update! (mn/route-widget-data) :route-widget-id route-widget-id))}
                                    "Add navigation"))

               (om/build nv/navbar data {:state {:advertise? true}})))))

(defmethod sidebar-content "navbar-select"
  [data owner] 
  (let [all-navs-data-obs (om/observe owner (mn/all-navs-data))]
    (dom/div nil 
             (dom/u nil "Select a widget")
             (dom/br nil "")
             (apply dom/div nil 
                    (om/build-all select-navbar-wrapper @all-navs-data-obs)))))

(defmethod sidebar-content :default
  [data owner] 
  (dom/ul #js {:style #js {:fontWeight "600", :padding "5px", :cursor "pointer", :marginTop "0px"}} 
          "Default menu"))

(defn admin-sidebar 
  "Sidebar primarily for selecting widgets and other settings that are not appropriate for editing directly indside of 
  the site." 
  [{:keys [sidebar-data]} owner]
  (reify 
    om/IRender
    (render 
      [_]
      (dom/div #js {:id "mySidenav"
                    :className "sidenav"
                    :style #js {:width "400px" :display (if (:sidebar-visible sidebar-data) "" "none")}} 

               (dom/p #js {:style (clj->js sidebar-header-p)} 
                      "Nangpress Menu"
                      (dom/i #js {:style (clj->js sidebar-close-icon)
                                  :className "fa fa-times fa-2x"
                                  :onClick #(om/transact! sidebar-data :sidebar-visible u/toggle)})
                      (dom/i #js {:style (clj->js (merge sidebar-close-icon {:marginRight "10px"}))
                                  :className "fa fa-home fa-2x"
                                  :onClick #(update-sidebar-page! "base-menu")}))

               (dom/div #js {:style #js {:padding "5px" :fontWeight "600"}} 
                        (sidebar-content (:sidebar-page sidebar-data) owner))))))

(defn master 
  "This component is the master of routing. The current route of the app is considered part of the monolith i.e. 
  part of the state of the application. So this component has the job of rendering the admin-toolbar, the widgets 
  for the current route and the navbar (if one has been selected by the user). This is because the navbar 
  is present in all routes." 

  [{:keys [:route-widget :current-route :active-route :email]
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
                 (when (not (= "" (first @email))) (om/build admin-toolbar data))
                 (om/build main-view widgets)
                 (om/build nv/navbar route-widget))))))

