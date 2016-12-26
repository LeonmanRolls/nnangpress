(ns nnangpress.app
  (:import
    [goog.history Html5History EventType])
  (:require-macros  [cljs.core.async.macros :refer  [go go-loop]])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [clojure.spec :as s]
            [cljs.core.async :as cas :refer [>! <! put! chan pub sub]]
            [goog.events :as ev]))

(enable-console-print!)

(s/def ::route-name string?)
(s/def ::bg-img string?)
(s/def ::nav-hint vector?)
(s/def ::widgets vector?)
(s/def ::children (s/coll-of ::route))

(s/def ::route (s/keys :req-un [::route-name ::bg-img ::nav-hint ::widgets ::children]))

(def routes-map {::route-name "/"
                 ::bg-img "home_page.jpg"
                 ::nav-hint ["Architects"]
                 ::widgets []
                 ::children [{::route-name "/for-you"
                              ::bg-img "home_page.jpg"
                              ::nav-hint ["For you"]
                              ::widgets []
                              ::children [{::route-name "/for-you-one"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you one"]
                                           ::widgets []
                                           ::children []}
                                          {::route-name "/for-you-two"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you two"]
                                           ::widgets []
                                           ::children []}]}
                             {::route-name "/for-architects"
                              ::bg-img "home_page.jpg"
                              ::nav-hint ["For Architects"]
                              ::widgets []
                              ::children [{::route-name "/for-archi-one"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For archi one"]
                                           ::widgets []
                                           ::children []}]}
                             {::route-name "/from-us"
                              ::bg-img "home_page.jpg"
                              ::nav-hint ["From us"]
                              ::widgets []
                              ::children [{::route-name "/from-us-one"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you one"]
                                           ::widgets []
                                           ::children []}]}]})

(def monolith (atom {::logo-text ["Solari"]
                     ::routes-map routes-map}))

;pub sub
(def routing-chan-in (chan))
(def routing-pub (pub routing-chan-in :msg-type))

(comment

  (def routing-chan-out (chan))
  (sub routing-pub :route-change routing-chan-out)

  (go-loop []
           (let [{:keys [text]} (<! routing-chan-out)]
             (println text)
             (recur)))

  (sub our-pub :greeting output-chan)
  (put! input-chan {:msg-type :greeting :text "hellooo"}))

;Routing
(defn get-token  []
    (str js/window.location.pathname js/window.location.search))

(defn make-history  []
  (doto  (Html5History.)
    (.setPathPrefix  (str js/window.location.protocol
                          "//"
                          js/window.location.host))
    (.setUseFragment false)))

(defn handle-url-change  [e]
  (js/console.log  (str "Navigating: "  (get-token)))
  (when-not  (.-isNavigation e)
    (js/console.log "Token set programmatically")
    (js/window.scrollTo 0 0))
  ;; dispatch on the token
  (put! routing-chan-in {:msg-type :route-change :text (get-token)})
  #_(secretary/dispatch!  (get-token)))

(defonce history (doto (make-history)
                   (goog.events/listen EventType.NAVIGATE #(handle-url-change %))
                   (.setEnabled true)))

(defn nav! [token]
  (.setToken history token))

(defn js-link [route-name e]
  (do
    (.preventDefault e)
    (nav! route-name)))










(defn logo-text []
  (om/ref-cursor (::logo-text (om/root-cursor monolith))))

(defn logo-hint []
  (om/ref-cursor (-> (om/root-cursor monolith) ::routes-map ::nav-hint)))

(defn nav-hint [data owner]
  (reify
    om/IRender
    (render [_]
      (let [logo-hint-obs (om/observe owner (logo-hint))]
        (dom/div #js {:className "nav-hint-outer"}
                 (dom/div #js {:className "nav-hint-inner"} (first logo-hint-obs)))))))

(defn nav-menu-logo
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [logo-text-obs (om/observe owner (logo-text))]
        (dom/h1 #js {:className "logo"}
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
                         (clojure.string/replace #"-" " ")))
       :curr-route "/for-you"
       })

    om/IWillMount
    (will-mount [this]
      (let [routing-chan-out (chan)]
        (sub routing-pub :route-change routing-chan-out)
        (go-loop []
                 (let [{:keys [text]} (<! routing-chan-out)]
                   (println text)
                   (set-state! owner :curr-route text)
                   (recur)))
        )
      )

    om/IRenderState
    (render-state [_ {:keys [depth str-beautify curr-route] :as state}]
      (cond
        (= "/" route-name)
        (apply dom/ul #js {}
               (om/build-all nav-menu children))

        (not (empty? children))
        (dom/li #js {:className (str "nav-li " (when (= curr-route route-name) "active"))
                     :onClick (partial js-link route-name)}
                (str-beautify route-name)
                (apply dom/ul #js {:className "nav-ul"}
                       (om/build-all nav-menu children)))

        :else
        (dom/li #js {:className "nav-li"}
                (str-beautify route-name))))))

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

                        #_(apply dom/ul nil
                                 (om/build-all nav-menu-item-left (::routes-map data)))

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

(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/h1 nil (:text data))
      (om/build main-nav-view data)
      )))

(defn init []
  (om/root widget monolith
           {:target (. js/document (getElementById "container"))}))

