(ns nnangpress.app
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.spec :as s]
            ))

(enable-console-print!)

(comment
 (.log js/console "hi there")
  (println "hi")

  )

(s/def ::route-name string?)
(s/def ::bg-img string?)
(s/def ::nav-hint vector?)
(s/def ::widgets vector?)
(s/def ::children (s/coll-of ::route))

(s/def ::route (s/keys :req [::route-name ::bg-img ::nav-hint ::widgets ::children]))

(def routes-map {::route-name "/"
                 ::bg-img "home_page.jpg"
                 ::nav-hint ["Architectss"]
                 ::widgets []
                 ::children [{::route-name "/for-you"
                              ::bg-img "home_page.jpg"
                              ::nav-hint ["For you"]
                              ::widgets []
                              ::children [{::route-name "/for-you"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you"]
                                           ::widgets []
                                           ::children []}
                                          {::route-name "/for-you"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you"]
                                           ::widgets []
                                           ::children []}]}
                             {::route-name "/for-architects"
                              ::bg-img "home_page.jpg"
                              ::nav-hint ["For Architects"]
                              ::widgets []
                              ::children [{::route-name "/for-you"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you"]
                                           ::widgets []
                                           ::children []}]}
                             {::route-name "/from-us"
                              ::bg-img "home_page.jpg"
                              ::nav-hint ["From us"]
                              ::widgets []
                              ::children [{::route-name "/for-you"
                                           ::bg-img "home_page.jpg"
                                           ::nav-hint ["For you"]
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
      (let [logo-hint-c (om/observe owner (logo-hint))]
       (dom/div #js {}
               (dom/div #js {}
                        (dom/div #js {} (first logo-hint-c))))))))

(defn nav-menu-logo
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [logo-text-c (om/observe owner (logo-text))]
       (dom/h1 #js {:className "logo"}
              (first logo-text-c))))))

(defn main-nav-view [{:keys [routes-map] :as data} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "" :id "the-nav"}

               (dom/div #js {}

                        (om/build nav-menu-logo {})

                        (om/build nav-hint {})

                        (println (type routes-map))

                        #_(dom/ul #js {}
                                (om/build nav-menu-item-left (:routes-vector data)
                                          {:state {:left-offset 0}}))

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

