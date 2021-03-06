(ns nnangpress.navbars
  "Besides providing the interface for changing routes navbars are responsible for much of the routing mechanism, 
  as will as the shape of the data in the route tree."
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.dom :as ndom]
            [cljs.spec :as s]
            [nnangpress.monolith :as mn]
            [nnangpress.widgetdata :as wd]
            [nnangpress.utils :as u]
            [nnangpress.widgets :as wgt]
            [nnangpress.components.common :as cc]
            [nnangpress.core :as cre]
            [nnangpress.routing :as rt]))

;(set! *warn-on-infer* true)

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

(defn simple-form-single 
  "Inputs and submit, input values will be passed to callback." 
  [cb label]
  (let [uid1 (u/uid)]
    (dom/div nil
             (dom/p nil label)
             (dom/input #js {:id uid1 :type "text"})
             (dom/button #js {:onClick (fn [_]
                                         (cb (.-value (ndom/get-node-by-id uid1))))} 
                         "Submit"))))


(defmulti navbar (fn [x] (:route-widget-id x)))
(defmulti navbar-data (fn [x] x))

(defmethod navbar-data 0 [_]
  {:route-widget-id 0
   :main-view-style {:style {}}
   :roues-map {:route-name "/"
               :bg-img "home_page.jpg"
               :nav-hint ["Architects"]
               :nav-hint-style {:color "black"}
               :widgets [{:widget-uid 001
                          :object-id "a"
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there lol</p>"]}]
               :children []}})

;A simple navbar. 
(defmethod navbar 0 [{:keys [main-view-style] :as data} owner]
  (reify
    om/IWillMount 
    (will-mount [_]
      (when (= (type main-view-style) om.core/MapCursor)
        (om/update! main-view-style [:style :paddingLeft] "180px")))

    om/IRender
    (render [this]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/div #js {:id "the-nav" :className "main-nav"}
                 (when (first @edit-mode-obs) "Choose a navbar to add routing."))))))

(defmethod navbar-data 1 [_]
  (mn/new-route-widget))

(defn basic-route []
  {:route-name (str "/parent" (subs (u/uid) 0 3))
   :bg-img "http://cdn.wallpapersafari.com/57/36/5MbQFu.png"
   :grey-bg? true
   :nav-hint ["nav hint"]
   :nav-hint-style {:color "white"}
   :route-name-editable (wd/widget-data 16) 
   :widgets [{:widget-uid 001
              :object-id (u/uid)
              :widget-name "Standard text widget"
              :inner-html ["<p> Hi there </p>"]}]
   :children [{:route-name (str "/child" (subs (u/uid) 0 3))
               :bg-img "http://cdn.wallpapersafari.com/57/36/5MbQFu.png"
               :grey-bg? true
               :nav-hint ["nav hint"]
               :nav-hint-style {:color "white"}
               :route-name-editable (wd/widget-data 16) 
               :widgets [{:widget-uid 001
                          :object-id (u/uid)
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}]
               :children [{:route-name (str "/child" (subs (u/uid) 0 3))
                           :bg-img "http://cdn.wallpapersafari.com/57/36/5MbQFu.png"
                           :grey-bg? true
                           :nav-hint ["nav hint"]
                           :nav-hint-style {:color "white"}
                           :route-name-editable (wd/widget-data 16) 
                           :widgets [{:widget-uid 001
                                      :object-id (u/uid)
                                      :widget-name "Standard text widget"
                                      :inner-html ["<p> Hi there </p>"]}]
                           :children []}]}]})

(defn nav-hint [data owner]
  (reify
    om/IRender
    (render [_]
      (let []
        (dom/div #js {:className "nav-hint-outer"}
                 (dom/div #js {:className "nav-hint-inner"}
                          "nav hint"))))))

(s/fdef nav-menu-logo
        :args (s/cat :data ::mn/logo-data :owner any?))

(defn nav-menu-logo
  [{:keys [logo-text logo-style] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (let [routes-map-obs (om/observe owner (mn/routes-map))]
        (dom/h1 #js {:style (clj->js logo-style)
                     :className "logo"
                     :onClick (partial rt/js-link @routes-map-obs "/")}
                (om/build wgt/widget logo-text {:state {:edit false}}))))))

(s/fdef list-item 
        :args (s/cat :active any? :routes-map any? :all any?))

(defn list-item [active? routes-map {:keys [route-name route-name-editable] :as all}]
  (dom/li #js {:className (str "nav-li " (when active? "active-li"))
               :onClick (partial rt/js-link @routes-map route-name)}

          (dom/div #js {:className (str (when active? "active-text"))}
                   (om/build wgt/widget route-name-editable {:state {:parent-cursor all
                                                                     :routes-map routes-map}}))))
(defn positions
  [pred coll]
  (keep-indexed (fn [idx x]
                  (when (pred x)
                    idx))
                coll))

(defn nav-menu
  [{:keys [:route-name :background :widgets :children :route-name-editable] :as all} owner]

  (reify
    om/IInitState
    (init-state  [_]
      {:depth 1
       :advertise? false})

    om/IRenderState
    (render-state [_ {:keys [depth advertise?] :as state}]
      (let [curr-route (first (om/observe owner (mn/current-route)))
            active? (u/string-contains? curr-route route-name)
            routes-map-obs (om/observe owner (mn/routes-map))
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (cond
          (= "/" route-name)
          (apply dom/ul nil 
                 (concat
                   (om/build-all nav-menu children {:state {:depth (inc depth) :prev-children children }})
                   (when (first @edit-mode-obs)
                     [(dom/button #js {:onClick (fn [_]
                                                  (om/transact!
                                                    children
                                                    (fn [children]
                                                      (conj children (basic-route)))))} "Add route")
                      (om/build cre/remove-element children
                                {:state {:label "remove nth route"}})

                      (dom/div nil 
                               (dom/u nil "Swap routes")
                               (simple-form (fn [x y] 
                                                  (mn/ref-vec-swap 
                                                    children (int x) (int y)))))])))

          (and (not (empty? children)) (> depth (if (first @edit-mode-obs) 3 2)))
          (dom/div #js {:style #js {:position "relative"}}

                   #_(cc/delete-button prev-children :route-name route-name)

                   (dom/li #js {:className (str (if (> depth 2) "sub-nav-li " "nav-li ") (when active? "active-text"))
                                :onClick (partial rt/js-link @routes-map-obs route-name)}

                           (dom/div #js {:className (str (when active? "active-text"))}
                                    (om/build wgt/widget route-name-editable {:state {:parent-cursor all 
                                                                                      :routes-map routes-map-obs}}))))

          (not (empty? children))
          (dom/div #js {:style #js {:position "relative"}}

                   (list-item active? routes-map-obs all)

                   (when active?
                     (apply dom/ul #js {:className "nav-ul"}
                            (concat
                              (om/build-all nav-menu children {:state {:depth (inc depth) :prev-children children}})
                              (when (first @edit-mode-obs)
                                [(dom/button #js {:onClick (fn [_]
                                                             (om/transact!
                                                               children
                                                               (fn [children]
                                                                 (conj children (basic-route)))))}
                                             "Add route")
                                 (om/build cre/remove-element children
                                           {:state {:label "remove nth route"}})
                                 (dom/div nil 
                                          (dom/u nil "Swap routes")
                                          (simple-form (fn [x y] 
                                                             (mn/ref-vec-swap 
                                                               children (int x) (int y)))))])))))

          :else
          (dom/li #js {:className (str (if (> depth 2) "sub-nav-li " "nav-li ") (when active? "active-text"))
                       :onClick (partial rt/js-link @routes-map-obs route-name)}

                  (om/build wgt/widget route-name-editable {:state {:parent-cursor all
                                                                    :routes-map routes-map-obs}})))))))

(defn mobile-nav-menu-logo
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [routes-map-obs (om/observe owner (mn/routes-map))]
        (dom/p #js {:style #js {:fontSize "130%" :float "left" :fontWeight "700" :textTransform "uppercase" 
                                :marginRight "15px" :marginLeft "5px"} 
                     :onClick (partial rt/js-link @routes-map-obs "/")}
                "Leon Talbert")))))

(defn mobile-list-item [active? routes-map {:keys [route-name route-name-editable] :as all}]
  (dom/li #js {:className (str "nav-li ")
               :onClick (partial rt/js-link @routes-map route-name)}

          (dom/div #js {:className (str (when active? "active-text"))}
                   (om/build wgt/widget route-name-editable {:state {:parent-cursor all
                                                                     :routes-map routes-map}}))))

(defn mobile-nav-menu
  [{:keys [:route-name :background :widgets :children :route-name-editable] :as all} owner]

  (reify
    om/IInitState
    (init-state  [_]
      {:depth 1
       :advertise? false})

    om/IRenderState
    (render-state [_ {:keys [depth advertise?] :as state}]
      (let [curr-route (first (om/observe owner (mn/current-route)))
            active? (u/string-contains? curr-route route-name)
            routes-map-obs (om/observe owner (mn/routes-map))
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (cond
          (= "/" route-name)
          (apply dom/ul #js {:style #js {:margin "0px"}} 
                 (concat
                   (om/build-all mobile-nav-menu children {:state {:depth (inc depth) :prev-children children }})
                   (when (first @edit-mode-obs)
                     [(dom/button #js {:onClick (fn [_]
                                                  (om/transact!
                                                    children
                                                    (fn [children]
                                                      (conj children (basic-route)))))} "Add route")
                      (om/build cre/remove-element children
                                {:state {:label "remove nth route"}})])))

          (and (not (empty? children)) (> depth (if (first @edit-mode-obs) 2 2)))
          (dom/div #js {:style #js {:position "relative" :float "left"}}

                   (dom/li #js {:className (str (if (> depth 2) "sub-nav-li " "nav-li ") (when active? "active-text"))
                                :style #js {:float "left"}
                                :onClick (partial rt/js-link @routes-map-obs route-name)}

                           (dom/div #js {:className (str (when active? "active-text"))}
                                    (om/build wgt/widget route-name-editable {:state {:parent-cursor all 
                                                                                      :routes-map routes-map-obs}}))))

          (not (empty? children))
          (dom/div #js {:style #js {:position "relative" :float "left"}}

                   (mobile-list-item active? routes-map-obs all))

          :else
          (dom/li #js {:className (str (if (> depth 2) "sub-nav-li " "nav-li ") (when active? "active-text"))
                       :style #js {:float "left"}
                       :onClick (partial rt/js-link @routes-map-obs route-name)}

                  (om/build wgt/widget route-name-editable {:state {:parent-cursor all
                                                                    :routes-map routes-map-obs}})))))))

;A margin navbar. Css styling can be overwritten with local data.
(defmethod navbar 1 [{:keys [routes-map logo-data nav-style main-view-style] :as data} owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (when (= (type main-view-style) om.core/MapCursor)
        (om/update! main-view-style [:style :paddingLeft] "320px")))

    om/IRenderState
    (render-state [_ {:keys [advertise?]}]
      (let [all-data (om/observe owner (mn/all-data))
            main-view-style-obs (om/observe owner (mn/main-view-style))
            edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/div #js {:id "the-nav" :className "main-nav"}

                 (cond 
                   (> (:screen-size @all-data) 1000)
                   (do 
                     (om/update! (mn/main-view-style) {:style {:paddingLeft "320px" :paddingRight "170px"}})
                     (dom/div #js {:className "nav-menu"
                                   :style (clj->js (merge (when advertise? {:position "relative"}) nav-style))}

                              (om/build nav-menu-logo logo-data)
                              (om/build nav-menu routes-map)
                              (when (first @edit-mode-obs)
                                (simple-form-single 
                                  #(om/update! nav-style :backgroundColor %) 
                                  "Background color (hex)"))))

                   :else 
                   (do 
                     (om/update! (mn/main-view-style) {:style {:paddingLeft "0px" :paddingRight "0px"}})
                     (dom/div #js {:style #js {:width "100%" :position "fixed" :backgroundColor "black" 
                                               :top 0}} 
                              (om/build mobile-nav-menu-logo logo-data)
                              (om/build mobile-nav-menu routes-map)))))))))

