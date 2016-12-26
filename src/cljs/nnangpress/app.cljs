(ns nnangpress.app
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.spec :as s]
            ))

(enable-console-print!)

(s/def ::route-name string?)
(s/def ::bg-img string?)
(s/def ::nav-hint vector?)
(s/def ::widgets vector?)
(s/def ::children (s/coll-of ::route))

(s/def ::route (s/keys :req-un [::route-name ::bg-img ::nav-hint ::widgets ::children]))

(def routes-map {::route-name "/"
                 ::bg-img "home_page.jpg"
                 ::nav-hint ["Architectss"]
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

(def monolith (atom {::logo-text ["Solarii"]
                     ::routes-map routes-map}))

(defn logo-text []
  (om/ref-cursor (::logo-text (om/root-cursor monolith))))

(defn logo-hint []
  (om/ref-cursor (-> (om/root-cursor monolith) ::routes-map ::nav-hint)))

(defn nav-hint [data owner]
  (reify
    om/IRender
    (render [_]
      (let [logo-hint-obs (om/observe owner (logo-hint))]
        (dom/div #js {}
                 (dom/div #js {}
                          (dom/div #js {} (first logo-hint-obs))))))))

(defn nav-menu-logo
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [logo-text-obs (om/observe owner (logo-text))]
        (dom/h1 #js {:className "logo"}
                (first logo-text-obs))))))

(defn nav-menu-item-left
  [data owner]
  (reify
    om/IRender
    (render [_]

      )))

(defn nav-menu [{:keys [::route-name ::background ::widgets ::children] :as all}
                owner]
  (reify
    om/IInitState
    (init-state  [_]
      {:depth 0})

    om/IRenderState
    (render-state [_ {:keys [depth] :as state}]
      (println children)
      (println (= "/" route-name))

      (cond
        (= "/" route-name) (apply dom/ul #js {}
                                   (om/build-all nav-menu children)
                                   )

        (not (empty? children)) (dom/div nil
                                  (dom/li nil route-name)
                                  (apply dom/ul #js {:style #js {:margin-left "100px"}}
                                         (om/build-all nav-menu children))
                                           )

        :else (dom/li nil
                      route-name

                      )
        )

      #_(dom/li #js {:style (css/css-object (css/nav-li-home-new offset))}

                (dom/button {:type "button" :class "close"
                             :onClick (fn [x] (dt/delete-route route-name))}
                            (dom/span nil "X"))

                (dom/div #js{:contentEditable true
                             :onInput (fn [x]
                                        (dt/text-update
                                          (-> x .-target .-innerText) all))
                             :onClick (fn [x]
                                        (do
                                          (dt/new-update-route
                                            (di/get-full-route route-name))))}
                         (subs route-name 1))

                (dom/ul #js {:style (css/css-object
                                      (css/nav-ul-sub live-route?))}

                        (om/build-all nav-menu-item-left children
                                      {:init-state {:left-offset (inc offset)}})
                        (om/build add-sub-route data)))
      )
    )
  )

(defn main-nav-view [{:keys [::routes-map] :as data} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "" :id "the-nav"}

               (dom/div #js {}

                        (om/build nav-menu-logo {})

                        (om/build nav-hint {})

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

