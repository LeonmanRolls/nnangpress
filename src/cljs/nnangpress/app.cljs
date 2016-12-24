(ns nnangpress.app
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(def routes-vector (Route. "/" "home_page.jpg" ["Architects"]  []
                            [(Route. "/for-you" "from_us.jpg" ["for you"] []
                                     [(Route. "/all-projects" "from_uss.jpg" ["all projects"] []
                                              [(Route. "/sub-sub-social" "home_page.jpg" ["sub sub route"] [] [] 1 false)]  1 false)

                                      (Route. "/residential" "home_page.jpg" ["residential"] [] [] 2 false)

                                      (Route. "/multi-residential" "home_page.jpg" ["multi residential"] [] [] 3 false)

                                      (Route. "/commercial" "home_page.jpg" ["commerical"] [] [] 4 false)

                                      (Route. "/our-process" "home_page.jpg" ["our process"] [] [] 5 false)

                                      (Route. "/faq" "home_page.jpg" ["faq"] [] [] 6 false)

                                      (Route. "/your-team" "home_page.jpg" ["your team"] [] [] 7 false)

                                      (Route. "/contact" "home_page.jpg" ["faq"] [] [] 8 false)] 1 false)

                             (Route. "/for-architects" "home_page.jpg" ["for architects"] []
                                     [(Route. "/your-career" "home_page.jpg" ["your career"] [] [] 1 false)

                                      (Route. "/meet-the-team" "home_page.jpg" ["meet the team"] [] [] 2 false)

                                      (Route. "/jobs" "home_page.jpg" ["jobs"] [] [] 3 false)] 2 false)

                             (Route. "/from-us" "home_page.jpg" ["from us"] []
                                     [(Route. "/solari-social" "home_page.jpg" ["solari social"] [] [] 1 false)] 3 false)] 1 false))

(def monolith (atom {:routes-vector []}))

(defn nav-hint [data owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/div #js {}
               (dom/div #js {}
                        (dom/div #js {} "architects"))))))

(defn nav-menu-logo
  [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/h1 #js {:className "logo"}
              "Solari"))))

(defn main-nav-view [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "" :id "the-nav"}

               (dom/div #js {}

                        (om/build nav-menu-logo {})

                        (om/build nav-hint {})

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
      (om/build main-nav-view {})
      )))

(defn init []
  (om/root widget monolith
           {:target (. js/document (getElementById "container"))}))

