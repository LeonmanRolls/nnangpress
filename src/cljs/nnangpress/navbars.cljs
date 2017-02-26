(ns nnangpress.navbars
  "Besides providing the interface for changing routes navbars are responsible for much of the routing mechanism, 
  as will as the shape of the data in the route tree."
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.monolith :as mn]
            [nnangpress.utils :as u]
            [nnangpress.core :as cre]
            [nnangpress.routing :as rt]
            [nnangpress.widgets :as wgt]))

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
(defmethod navbar 0 [data owner]
  (reify
    om/IRender
    (render [this]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/div #js {:id "the-nav" :className "main-nav"}
                 (when (first @edit-mode-obs) "Default navbar"))))))

(defmethod navbar-data 1 [_]
  {:route-widget-id 1
   :main-view-style {:style {:paddingLeft "320px"}}
   :routes-map {:route-name "/"
                :bg-img "home_page.jpg"
                :nav-hint ["Architects"]
                :nav-hint-style {:color "black"}
                :widgets [{:widget-uid 001
                           :object-id "a"
                           :widget-name "Standard text widget"
                           :inner-html ["<p> Hi there lol</p>"]}]
                :children [{:route-name "/for-you"
                            :bg-img "home_page.jpg"
                            :grey-bg? true
                            :nav-hint ["For you"]
                            :nav-hint-style {:color "white"}
                            :widgets []
                            :children [{:route-name "/all-projects"
                                        :bg-img "#333"
                                        :nav-hint ["All Projects"]
                                        :nav-hint-style {:color "white"}
                                        :widgets [{:widget-uid 001
                                                   :object-id "b"
                                                   :widget-name "Standard text widget"
                                                   :inner-html ["<p> Hi there </p>"]}
                                                  {:widget-uid 007
                                                   :object-id "c"
                                                   :widget-name "Grid"
                                                   :imgs [{:id "entry-1"
                                                           :className "mega-entry"
                                                           :data-src "http://solariarchitects.com/img/teampics/jsolari_everyday.jpg"
                                                           :data-width "320"
                                                           :data-height "400"}
                                                          {:id "entry-1-1"
                                                           :className "mega-entry"
                                                           :title "WE HAVE A LAUGH"
                                                           :text "Cue James in a bald cap, need I say more?"
                                                           :data-width "320"
                                                           :data-height "400"}]}]
                                        :children []}]}]}})

(defn basic-route []
  {:route-name (str "/parent" (subs (u/uid) 0 3))
   :bg-img "from_uss.jpg"
   :grey-bg? true
   :nav-hint ["nav hint"]
   :nav-hint-style {:color "white"}
   :widgets [{:widget-uid 001
              :object-id (u/uid)
              :widget-name "Standard text widget"
              :inner-html ["<p> Hi there </p>"]}]
   :children [{:route-name (str "/child" (subs (u/uid) 0 3))
               :bg-img "from_uss.jpg"
               :grey-bg? true
               :nav-hint ["nav hint"]
               :nav-hint-style {:color "white"}
               :widgets [{:widget-uid 001
                          :object-id (u/uid)
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}]
               :children []}]})

(defn nav-hint [data owner]
  (reify
    om/IRender
    (render [_]
      (let []
        (dom/div #js {:className "nav-hint-outer"}
                 (dom/div #js {:className "nav-hint-inner"}
                          "nav hint"))))))

(defn nav-menu-logo
  [{:keys [logo-text logo-style] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (let [routes-map-obs (om/observe owner (mn/routes-map))]
        (dom/h1 #js {:style (clj->js logo-style)
                     :className "logo"
                     :onClick (partial rt/js-link @routes-map-obs "/")}
                "Leon Talbert")))))

(defn str-beautify 
  "Remove hyphens from a string" 
  [s]
  (->
    (subs s 1)
    (clojure.string/replace #"-" " ")))

(defn list-item [active? routes-map route-name]
  (dom/li #js {:className (str "nav-li " (when active? "active-li"))
               :onClick (partial rt/js-link routes-map route-name)}

          (dom/div #js {:className (str (when active? "active-text"))}
                   (str-beautify route-name))))

(defn positions
  [pred coll]
  (keep-indexed (fn [idx x]
                  (when (pred x)
                    idx))
                coll))

(defn nav-menu
  [{:keys [:route-name :background :widgets :children] :as all} owner]

  (reify
    om/IInitState
    (init-state  [_]
      {:depth 1})

    om/IRenderState
    (render-state [_ {:keys [depth prev-children] :as state}]
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
                                {:state {:label "remove nth route"}})])))

          (and (not (empty? children)) (> depth (if (first @edit-mode-obs) 2 2)))
          (dom/div #js {:style #js {:position "relative"}}

                   #_(println (:route-name (first prev-children)))
                   #_(println "route-name: " route-name)
                   #_(println (positions (fn [x] (do (println "x: " (:route-name x) " - " (= (:route-name x) "/LoL-comedy")) 
                                                 (= (:route-name x) "/LoL-comedy"))) 
                                       prev-children))
                   (wgt/delete-button prev-children :route-name route-name)

                   (dom/li #js {:className (str "sub-nav-li ")
                                :onClick (partial rt/js-link @routes-map-obs route-name)}

                           (dom/div #js {:className (str (when active? "active-text"))}
                                    (str-beautify route-name)))
                   )

          (not (empty? children))
          (dom/div #js {:style #js {:position "relative"}}

                   (list-item active? @routes-map-obs route-name)

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
                                           {:state {:label "remove nth route"}})])))))

          :else
          (dom/li #js {:className (str "sub-nav-li " (when active? "active-text"))
                       :onClick (partial rt/js-link @routes-map-obs route-name)}

                  (str-beautify route-name)))))))

;A margin navbar
(defmethod navbar 1 [{:keys [routes-map logo-data nav-style] :as data} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "the-nav" :className "main-nav"}

               #_(dom/div #js {:className "nav-aux"}
                        (om/build nav-hint {}))

               (dom/div #js {:className "nav-menu"
                             :style (clj->js nav-style)}
                        (om/build nav-menu-logo logo-data)
                        (om/build nav-menu routes-map))))))

