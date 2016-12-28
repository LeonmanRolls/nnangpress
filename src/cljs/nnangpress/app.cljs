(ns nnangpress.app
  (:import [goog.history Html5History EventType])
  (:require-macros [cljs.core.async.macros :refer  [go go-loop]])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [clojure.spec :as s]
            [cljs.core.async :as cas :refer [>! <! put! chan pub sub]]
            [goog.events :as ev]
            [goog.dom :as gdom]
            [clojure.walk :as wlk]))

(enable-console-print!)

;Utils
(defn tree-seq-path [branch? children root & [node-fn]]
  (let [node-fn (or node-fn identity)
        walk (fn walk  [path node]
               (let [new-path (conj path (node-fn node))]
                 (lazy-seq
                   (cons new-path
                         (when (branch? node)
                           (mapcat (partial walk new-path) (children node)))))))]
    (walk [] root)))

(s/def ::route-name string?)
(s/def ::bg-img string?)
(s/def ::nav-hint vector?)
(s/def ::widgets vector?)
(s/def ::children (s/coll-of ::route))

(s/def ::route (s/keys :req-un [::route-name ::bg-img ::nav-hint ::widgets ::children]))

(def routes-map {::route-name "/"
                 ::bg-img "home_page.jpg"
                 ::nav-hint ["Architects"]
                 ::nav-hint-style #js {:color "black"}
                 ::widgets [{:widget-uid 001
                             :widget-name "Standard text widget"
                             :inner-html ["<p> Hi there </p>"]}]
                 ::children [{::route-name "/for-you"
                              ::bg-img "home_page.jpg"
                              ::nav-hint ["For you"]
                              ::nav-hint-style #js {:color "black"}
                              ::widgets []
                              ::children [{::route-name "/for-you-one"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you one"]
                                           ::nav-hint-style #js {:color "black"}
                                           ::widgets []
                                           ::children []}
                                          {::route-name "/for-you-two"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you two"]
                                           ::nav-hint-style #js {:color "black"}
                                           ::widgets []
                                           ::children []}]}
                             {::route-name "/for-architects"
                              ::bg-img "from_us.jpg"
                              ::nav-hint ["For Architects"]
                              ::nav-hint-style #js {:color "blue"}
                              ::widgets []
                              ::children [{::route-name "/for-archi-one"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For archi one"]
                                           ::nav-hint-style #js {:color "black"}
                                           ::widgets []
                                           ::children []}]}
                             {::route-name "/from-us"
                              ::bg-img "home_page.jpg"
                              ::nav-hint ["From us"]
                              ::nav-hint-style #js {:color "black"}
                              ::widgets []
                              ::children [{::route-name "/from-us-one"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you one"]
                                           ::nav-hint-style #js {:color "black"}
                                           ::widgets []
                                           ::children []}]}]})

(def monolith (atom {::active-route {::route-name "/from-us"
                                     ::bg-img "home_page.jpg"
                                     ::nav-hint ["From us"]
                                     ::nav-hint-style #js {:color "black"}
                                     ::widgets []
                                     ::children []}
                     ::current-route ["/"]
                     ::logo-text ["Solari"]
                     ::routes-map routes-map}))

(defn current-route []
  (om/ref-cursor (::current-route (om/root-cursor monolith))))

(defn logo-text []
  (om/ref-cursor (::logo-text (om/root-cursor monolith))))

(defn logo-hint []
  (om/ref-cursor (-> (om/root-cursor monolith) ::routes-map ::nav-hint)))

(defn active-route []
  (om/ref-cursor (-> (om/root-cursor monolith) ::active-route)))

;Routing
(defn get-token []
    (str js/window.location.pathname js/window.location.search))

(defn make-history []
  (doto  (Html5History.)
    (.setPathPrefix  (str js/window.location.protocol
                          "//"
                          js/window.location.host))
    (.setUseFragment false)))

(defn handle-url-change [e]
  #_(js/console.log (str "Navigating: " (get-token)))
  #_(let [paths (tree-seq-path
                #(contains? % ::children)
                #(::children %)
                routes-map
                #(::route-name %))
        active-path  (first (filter (fn [x] (= (last x) (get-token))) paths))
        new-path (if
                   (= 1 (count active-path))
                   "/"
                   (->>
                     active-path
                     (drop 1)
                     clojure.string/join))
        ]

    (println "new-path: " new-path)
    (when (not (empty? new-path))
    (om/update! (current-route) [new-path])
      )

    )
  #_(when-not (.-isNavigation e)
      #_(js/console.log "Token set programmatically")
      (js/window.scrollTo 0 0)))

(defonce history (doto (make-history)
                   (goog.events/listen EventType.NAVIGATE #(handle-url-change %))
                   (.setEnabled true)))

(defn nav! [token]
  (let [paths (tree-seq-path
                #(contains? % ::children)
                #(::children %)
                routes-map
                #(::route-name %))
        active-path  (first (filter (fn [x] (= (last x) token)) paths))
        new-path (if
                   (= 1 (count active-path))
                   "/"
                   (->>
                     active-path
                     (drop 1)
                     clojure.string/join))
        ]

    (println "new-path: " new-path)
    (when (not (empty? new-path))
      (om/update! (current-route) [new-path])
      )

    #_(println "nav: " token)
    #_(.setToken history token)
    (.setToken history new-path)
    )

  )

(defn js-link [route-name e]
  (do
    (.preventDefault e)
    (nav! route-name)))

(defn nav-hint [data owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [::nav-hint ::nav-hint-style]} (om/observe owner (active-route))]
        (dom/div #js {:className "nav-hint-outer"}
                 (dom/div #js {:className "nav-hint-inner"
                               :style nav-hint-style
                               }
                          (first nav-hint)))))))

(defn nav-menu-logo
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [logo-text-obs (om/observe owner (logo-text))]
        (dom/h1 #js {:className "logo"
                     :onClick (partial js-link "/")}
                (first logo-text-obs))))))

(defn nav-menu
  [{:keys [::route-name ::background ::widgets ::children] :as all} owner]

  (reify
    om/IInitState
    (init-state  [_]
      {:depth 0
       :str-beautify (fn [s]
                       (->
                         (subs s 1)
                         (clojure.string/replace #"-" " ")))})

    om/IRenderState
    (render-state [_ {:keys [depth str-beautify] :as state}]
      (let [curr-route (first (om/observe owner (current-route)))
            active? (= curr-route route-name)]

        (cond
          (= "/" route-name)
          (apply dom/ul #js {}
                 (om/build-all nav-menu children))

          (not (empty? children))
          (dom/div #js {:style #js {:position "relative"}}
                   (dom/li #js {:className (str "nav-li " (when active? "active-li"))
                                :onClick (partial js-link route-name)}
                           (dom/div #js {:className (str (when active? "active-text"))}
                                    (str-beautify route-name))
                           )
                   (when active?
                     (apply dom/ul #js {:className "nav-ul"}
                            (om/build-all nav-menu children))))

          :else
          (dom/li #js {:className "sub-nav-li"
                       :onClick (partial js-link route-name)}
                  (str-beautify route-name)))))))

(defn main-nav-view [{:keys [::routes-map] :as data} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "the-nav" :className "main-nav"}

               (dom/div #js {:className "nav-aux"}
                        (om/build nav-hint {}))

               (dom/div #js {:className "nav-menu"}

                        (om/build nav-menu-logo {})

                        (om/build nav-menu routes-map)


                        #_(dom/div #js {:id "social-container" :style #js {:textAlign "center"}}
                                   (dom/div nil
                                            (dom/a #js {:href "http://pinterest.com/solariarchitect/" :target "_blank"}
                                                   (dom/i #js {:className "fa fa-pinterest fa-2x"}))
                                            (dom/a #js {:href "https://twitter.com/solariarch" :target "_blank"}
                                                   (dom/i #js {:className "fa fa-twitter fa-2x"}))
                                            (dom/a #js {:href "https://instagram.com/solariarchitects" :target "_blank"}
                                                   (dom/i #js {:className "fa fa-instagram fa-2x"}))
                                            (dom/a #js {:href "https://plus.google.com/114804027121182865701/about" :target "_blank"}
                                                   (dom/i #js {:className "fa fa-google-plus fa-2x"}))
                                            (dom/a #js {:href "https://www.facebook.com/pages/Solari-Architects/411733188915120" :target "_blank"}
                                                   (dom/i #js {:className "fa fa-facebook fa-2x"}))))

                        #_(dom/a #js {:href "http://nang.rocks" :target "_blank"}
                                 (dom/footer #js {:id "main-footer" :className "footer cf" :style (css/css-object css/main-footer)}
                                             "Website by Nang")))))))

(defmulti widget (fn [data owner] (:widget-uid data)))

(defmethod widget 001 [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)})

    om/IDidMount
    (did-mount [_]
      (let [uuid (.toString (om/get-state owner :uuid)) ]
       (js/Medium. #js {:element (.getElementById js/document uuid)
                       :mode js/Medium.richMode
                       :placeholder "Your Text here"
                       :modifiers #js {:q (fn [event element]
                                            (om/update!
                                              data
                                              :inner-html
                                              [(.-innerHTML (gdom/getElement uuid))]))}})))

    om/IRenderState
    (render-state [_ {:keys [uuid] :as state}]
      (dom/div #js {:id (.toString uuid)
                    :style #js {:color "black"}
                    :dangerouslySetInnerHTML #js {:__html (first (:inner-html data))}}))))

(defn main-view [data owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/div #js {:className "main-view"}
             (om/build-all widget data)))))

(defn master [{:keys [::routes-map ::current-route ::active-route] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [splitter (fn [x] (last (clojure.string/split x #"/")))]
        {:flatten-routes (fn [routes-map]
                           (tree-seq
                             #(contains? % ::children)
                             #(::children %)
                             routes-map))

         :set-bg-img (fn [bg-img]
                       (set!
                         (-> js/document .-body .-background)
                         (str "/img/backgrounds/" bg-img)))

         :get-active-route (fn [flat-routes current-route]
                             (->>
                               flat-routes
                               (filter
                                 #(=
                                   (splitter (first current-route))
                                   (splitter (::route-name %))))
                               first))}))

    om/IRenderState
    (render-state [_ {:keys [flatten-routes set-bg-img get-active-route] :as state}]
      (let [{:keys [::bg-img ::widgets] :as fresh-active-route} (get-active-route
                                                                  (flatten-routes routes-map)
                                                                  current-route)]

        (om/update! active-route @fresh-active-route)
        (set-bg-img bg-img)
        (dom/div nil
                 (om/build main-view widgets)
                 (om/build main-nav-view data))))))

(defn init []
  (om/root master monolith
           {:target (. js/document (getElementById "container"))}))

