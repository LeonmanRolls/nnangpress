(ns nnangpress.app
  (:import [goog.history Html5History EventType])
  (:require-macros [cljs.core.async.macros :refer  [go go-loop]])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [clojure.spec :as s]
            [cljs.core.async :as cas :refer [>! <! put! chan pub sub close!]]
            [cljs.reader :as rdr]
            [goog.events :as ev]
            [goog.dom :as gdom]))

(enable-console-print!)

(defn tree-seq-path [branch? children root & [node-fn]]
  (let [node-fn (or node-fn identity)
        walk (fn walk  [path node]
               (let [new-path (conj path (node-fn node))]
                 (lazy-seq
                   (cons new-path
                         (when (branch? node)
                           (mapcat (partial walk new-path) (children node)))))))]
    (walk [] root)))

(defn string-contains? [x y]
  (not= -1 (.indexOf x y)))

(def routes-map {::route-name "/"
                 ::bg-img "home_page.jpg"
                 ::nav-hint ["Architects"]
                 ::nav-hint-style #js {:color "black"}
                 ::widgets [{:widget-uid 001
                             :widget-name "Standard text widget"
                             :inner-html ["<p> Hi there </p>"]}
                            ]
                 ::children [{::route-name "/for-you"
                              ::bg-img "home_page.jpg"
                              ::grey-bg? true
                              ::nav-hint ["For you"]
                              ::nav-hint-style #js {:color "white"}
                              ::widgets []
                              ::children [{::route-name "/all-projects"
                                           ::bg-img "#333"
                                           ::nav-hint ["All Projects"]
                                           ::nav-hint-style #js {:color "white"}
                                           ::widgets [
                                                      {:widget-uid 001
                                                       :widget-name "Standard text widget"
                                                       :inner-html ["<p> Hi there </p>"]}
                                                      {:widget-uid 002
                                                       :widget-name "Grid"
                                                       :imgs [
                                                              {:id "entry-1"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/wadestown/wadestown-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-2"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/lyall/lyall-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-3"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/catline/catline-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}

                                                              {:id "entry-4"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/plimmerton/plimmerton-00.jpg "
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-5"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/vedado/vedado-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-6"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/sharella/sharella-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}

                                                              {:id "entry-8"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/pascal/pascal-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-9"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/sugarloaf/sugarloaf-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-10"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/detroit/detroit-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}

                                                              {:id "entry-11"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/oasis/oasis-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-12"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/tinakori/tinakori-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-13"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/firemans/firemans-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}

                                                              {:id "entry-14"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/roxburgh/roxburgh-00.png"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-15"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/leehouse/1.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              ]}]
                                           ::children []}
                                          {::route-name "/residential"
                                           ::bg-img "#333"
                                           ::nav-hint ["Residential"]
                                           ::nav-hint-style #js {:color "white"}
                                           ::widgets [{:widget-uid 001
                                                       :widget-name "Standard text widget"
                                                       :inner-html ["<p> Hi there </p>"]}
                                                      {:widget-uid 002
                                                       :widget-name "Grid"
                                                       :imgs [

                                                              {:id "entry-1"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/wadestown/wadestown-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-2"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/lyall/lyall-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-3"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/catline/catline-00.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-4"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/plimmerton/plimmerton-00.jpg "
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              {:id "entry-15"
                                                               :className "mega-entry"
                                                               :data-src "http://solariarchitects.com/img/leehouse/1.jpg"
                                                               :data-width "320"
                                                               :data-height "400"}
                                                              ]}]
                                           ::children []}
{::route-name "/multi-unit"
 ::bg-img "#333"
 ::nav-hint ["Multi Unit"]
 ::nav-hint-style #js {:color "white"}
 ::widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 002
             :widget-name "Grid"
             :imgs [
                    {:id "entry-5"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/vedado/vedado-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-6"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/sharella/sharella-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-8"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/pascal/pascal-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-9"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/sugarloaf/sugarloaf-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-10"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/detroit/detroit-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-13"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/firemans/firemans-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-14"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/roxburgh/roxburgh-00.png"
                     :data-width "320"
                     :data-height "400"}
                    ]}]
 ::children []}
{::route-name "/commercial"
 ::bg-img "#333"
 ::nav-hint ["Commercial"]
 ::nav-hint-style #js {:color "white"}
 ::widgets [
            {:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 002
             :widget-name "Grid"
             :imgs [
                    {:id "entry-11"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/oasis/oasis-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-12"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/tinakori/tinakori-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-13"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/firemans/firemans-00.jpg"
                     :data-width "320"
                     :data-height "400"}
                    ]}]
 ::children []}
{::route-name "/our-process"
 ::bg-img "from_uss.jpg"
 ::grey-bg? true
 ::nav-hint ["Our Process"]
 ::nav-hint-style #js {:color "white"}
 ::widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 003
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 003
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 003
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}]
 ::children []}
{::route-name "/faqs"
 ::bg-img "from_uss.jpg"
 ::grey-bg? true
 ::nav-hint ["Faqs"]
 ::nav-hint-style #js {:color "white"}
 ::widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 004
             :widget-name "Accordion"
             :text [{:title {:widget-uid 001
                             :widget-name "Standard text widget"
                             :inner-html ["<p> Hi there </p>"]}
                     :sub {:widget-uid 001
                           :widget-name "Standard text widget"
                           :inner-html ["<p> Hi there </p>"]}}

                    ]}
            ]
 ::children []}
{::route-name "/your-team"
 ::bg-img "from_uss.jpg"
 ::grey-bg? true
 ::nav-hint ["Your Team"]
 ::nav-hint-style #js {:color "white"}
 ::widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}
            {:widget-uid 006
             :widget-name "Standard image widget"
             :img "http://solariarchitects.com/img/leaderboards/group_photo_everyday_zoomed.jpg"}
            {:widget-uid 002
             :widget-name "Grid"
             :imgs [
                    {:id "entry-1"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/jsolari_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-2"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/csolari_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-3"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/mcane_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}

                    {:id "entry-4"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/mzyteka_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-5"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/maddis_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-6"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/mmarshall_everyday.jpg"
                     :data-width "320"
                     :data-height "400"}
                    {:id "entry-8"
                     :className "mega-entry"
                     :data-src "http://solariarchitects.com/img/teampics/Linda_Normal_Resized.jpg"
                     :data-width "320"
                     :data-height "400"}
                    ]}
            ]
 ::children []}]}
{::route-name "/for-architects"
 ::bg-img "for_architects.jpg"
 ::grey-bg? true
 ::nav-hint ["For Architects"]
 ::nav-hint-style #js {:color "white"}
 ::widgets [{:widget-uid 001
             :widget-name "Standard text widget"
             :inner-html ["<p> Hi there </p>"]}]
 ::children [{::route-name "/your-career"
              ::bg-img "your_career.jpg"
              ::grey-bg? true
              ::nav-hint ["Your career"]
              ::nav-hint-style #js {:color "white"}
              ::widgets [{:widget-uid 001
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}]
              ::children []}
             {::route-name "/meet-the-team"
              ::bg-img "#333"
              ::nav-hint ["Meet the team"]
              ::nav-hint-style #js {:color "white"}
              ::widgets [{:widget-uid 001
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}
                         {:widget-uid 006
                          :widget-name "Standard image widget"
                          :img "http://solariarchitects.com/img/leaderboards/group_photo_everyday_zoomed.jpg"}
                         {:widget-uid 007
                          :widget-name "Grid"
                          :imgs [
                                 {:id "entry-1"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/jsolari_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-1-1"
                                  :className "mega-entry"
                                  :title "WE HAVE A LAUGH"
                                  :text "Cue James in a bald cap, need I say more?"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-2"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/csolari_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-2-1"
                                  :className "mega-entry"
                                  :title "WE HAVE A LIFE (that isn't work)"
                                  :text "Whether you have a family of 4 small children, you coach the local badminton team or you’re into Comic-con you need to have YOUR own time to enjoy YOUR life. We respect and welcome that. Sure, there may be occasions where we all have to put in the extra mile but it’s not expected that you do it 52 weeks of the year just to get recognized OR be valued."
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-3"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/mcane_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-3-1"
                                  :className "mega-entry"
                                  :title "title"
                                  :text "Hi there"
                                  :data-width "320"
                                  :data-height "400"}

                                 {:id "entry-4"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/mzyteka_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-4-1"
                                  :className "mega-entry"
                                  :title "title"
                                  :text "Hi there"
                                  :data-width "320"
                                  :data-height "400"}

                                 {:id "entry-5"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/maddis_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-5-1"
                                  :className "mega-entry"
                                  :title "title"
                                  :text "Hi there"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-6"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/mmarshall_everyday.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-6-1"
                                  :className "mega-entry"
                                  :title "title"
                                  :text "Hi there"
                                  :data-width "320"
                                  :data-height "400"}
                                 {:id "entry-8"
                                  :className "mega-entry"
                                  :data-src "http://solariarchitects.com/img/teampics/Linda_Normal_Resized.jpg"
                                  :data-width "320"
                                  :data-height "400"}
                                 ]}
                         ]
              ::children []}
             {::route-name "/jobs"
              ::bg-img "for_architects.jpg"
              ::grey-bg? true
              ::nav-hint ["jobs"]
              ::nav-hint-style #js {:color "white"}
              ::widgets [{:widget-uid 001
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}
                         {:widget-uid 005
                          :widget-name "Standard text widget"
                          :inner-html ["<p> Hi there </p>"]}
                         ]
              ::children []}]}
{::route-name "/from-us"
 ::bg-img "from_us.jpg"
 ::grey-bg? true
 ::nav-hint ["From us"]
 ::nav-hint-style #js {:color "white"}
 ::widgets []
 ::children [{::route-name "/solari-social"
              ::bg-img "from_us.jpg"
              ::grey-bg? true
              ::nav-hint ["#solarisocial"]
              ::nav-hint-style #js {:color "white"}
              ::widgets []
              ::children []}]}
{::route-name "/contact"
 ::bg-img "from_uss.jpg"
 ::grey-bg? true
 ::nav-hint ["Contact"]
 ::nav-hint-style #js {:color "white"}
 ::widgets []
 ::children [{::route-name "/info"
              ::bg-img "from_uss.jpg"
              ::grey-bg? true
              ::nav-hint ["Info"]
              ::nav-hint-style #js {:color "white"}
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

(def remote-monolith (atom {}))

(add-watch remote-monolith :watcher
           (fn  [key atom old-state new-state]
             (let [uid "SGXvf26OEpeVDQ79XIH2V71fVnT2"
                   user-data-ref (->
                                   (js/firebase.database)
                                   (.ref (str "users/" uid)))]
               (prn "-- Atom Changed --")
               (->
                 user-data-ref
                 (.set #js {:username "wellwell"
                            :email "leon.talbert@gmail.com"
                            :data  (pr-str @remote-monolith)})))))

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

(defn handle-url-change [e])

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
                     clojure.string/join))]

    (when (not (empty? new-path))
      (om/update! (current-route) [new-path]))
    (.setToken history new-path)))

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
            active? (string-contains? curr-route route-name)]

        (cond
          (= "/" route-name)
          (apply dom/ul #js {}
                 (om/build-all nav-menu children))

          (not (empty? children))
          (dom/div #js {:style #js {:position "relative"}}
                   (dom/li #js {:className (str "nav-li " (when active? "active-li"))
                                :onClick (partial js-link route-name)}
                           (dom/div #js {:className (str (when active? "active-text"))}
                                    (str-beautify route-name)))
                   (when active?
                     (apply dom/ul #js {:className "nav-ul"}
                            (om/build-all nav-menu children))))

          :else
          (dom/li #js {:className (str "sub-nav-li " (when active? "active-text"))
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

(defmulti widget-data (fn [x] x))

(defmulti widget (fn [data owner] (:widget-uid data)))

(defmethod widget-data 001 [_]
  {:widget-uid 001
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

;Medium text block
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

(defmethod widget-data 002 [_]
  {:widget-uid 002
   :widget-name "Grid"
   :imgs [{:id "entry-1"
           :className "mega-entry"
           :data-src "http://solariarchitects.com/img/wadestown/wadestown-00.jpg"
           :data-width "320"
           :data-height "400"}
          {:id "entry-2"
           :className "mega-entry"
           :data-src "http://solariarchitects.com/img/lyall/lyall-00.jpg"
           :data-width "320"
           :data-height "400"}]})

;Image grid
(defmethod widget 002 [{:keys [imgs] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [uuid (.toString (random-uuid))]
        {:uuid uuid
         :widget-img (fn [{:keys [id className data-src data-width data-height] :as data}]
                       (str
                         "<div"
                         " id=\"" id "\""
                         " class=\"" className  "\""
                         " data-src=\"" data-src  "\""
                         " data-width=\"" data-width  "\""
                         " data-height=\"" data-height  "\""
                         "></div>"))}))

    om/IDidUpdate
    (did-update  [this prev-props prev-state]
      (->
        (js/$ ".megafolio-container")
        (.megafoliopro #js {})))

    om/IDidMount
    (did-mount [_]
      (let [uuid (om/get-state owner :uuid)]
        (->
          (js/$ ".megafolio-container")
          (.megafoliopro #js {}))))

    om/IRenderState
    (render-state [_ {:keys [widget-img] :as state}]
      (dom/div #js {:className "container"}
               (dom/div #js {:className "megafolio-container"
                             :dangerouslySetInnerHTML
                             #js {:__html (apply str (map widget-img imgs))}})))))

(defmethod widget-data 003 [_]
  {:widget-uid 003
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

;Boxed medium text
(defmethod widget 003 [data owner]
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
                    :className "box-paragraph"
                    :dangerouslySetInnerHTML #js {:__html (first (:inner-html data))}}))))

(defmethod widget-data 004 [_]
  {:widget-uid 004
   :widget-name "Accordion"
   :text [{:title {:widget-uid 001
                   :widget-name "Standard text widget"
                   :inner-html ["<p> Hi there </p>"]}
           :sub {:widget-uid 001
                 :widget-name "Standard text widget"
                 :inner-html ["<p> Hi there </p>"]}}]})

;Accordion
(defmethod widget 004 [data owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [uuid (str "a" (subs (.toString (random-uuid)) 0 5))]
        {:uuid uuid
         :accordion-sub
         (fn [data owner]
           (reify
             om/IRender
             (render [_]
               (dom/div nil
                        (dom/dt nil
                                (dom/a #js {:href "#accordion1"
                                            :aria-expanded "false"
                                            :aria-controls "accordion1"
                                            :className (str uuid " accordion-title accordionTitle js-accordionTrigger")}
                                       "Title text"))
                        (dom/dd #js {:className "accordion-content accordionItem is-collapsed"
                                     :id "accordion1"
                                     :aria-hidden "true"}
                                (dom/p nil "Sub text"))))))}))

    om/IDidMount
    (did-mount [_]
      (js/accordion (str "." (:uuid (om/get-state owner)))))

    om/IRenderState
    (render-state [_ {:keys [accordion-sub] :as state}]
      (dom/div nil
               (dom/div #js {:className "accordion"}
                        (apply dom/dl nil (om/build-all accordion-sub [{} {}])))))))

(defmethod widget-data 005 [_]
  {:widget-uid 005
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

;Clear box red border
(defmethod widget 005 [data owner]
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
                    :className "box-paragraph-clear"
                    :dangerouslySetInnerHTML #js {:__html (first (:inner-html data))}}))))

(defmethod widget-data 006 [_]
  {:widget-uid 006
   :widget-name "Standard image widget"
   :img "http://solariarchitects.com/img/leaderboards/group_photo_everyday_zoomed.jpg"})

;Simple Image
(defmethod widget 006 [{:keys [img] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)})

    om/IRenderState
    (render-state [_ {:keys [uuid] :as state}]
      (dom/img #js {:style #js {:width "100%"}
                    :src img}))))

(defmethod widget-data 007 [_]
  {:widget-uid 007
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
           :data-height "400"}
          {:id "entry-2"
           :className "mega-entry"
           :data-src "http://solariarchitects.com/img/teampics/csolari_everyday.jpg"
           :data-width "320"
           :data-height "400"}
          {:id "entry-2-1"
           :className "mega-entry"
           :title "WE HAVE A LIFE (that isn't work)"
           :text "Whether you have a family of 4 small children, you coach the local badminton team or you’re into Comic-con you need to have YOUR own time to enjoy YOUR life. We respect and welcome that. Sure, there may be occasions where we all have to put in the extra mile but it’s not expected that you do it 52 weeks of the year just to get recognized OR be valued."
           :data-width "320"
           :data-height "400"}]})

(defmethod widget 007 [{:keys [imgs] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [uuid (.toString (random-uuid))]
        {:uuid uuid
         :widget-img (fn [{:keys [id className data-src data-width data-height] :as data}]
                       (str
                         "<div"
                         " id=\"" id "\""
                         " class=\"" className  "\""
                         " data-src=\"" data-src  "\""
                         " data-width=\"" data-width  "\""
                         " data-height=\"" data-height  "\""
                         "></div>"))
         :widget-text (fn [{:keys [id className data-width data-height title text] :as data}]
                        (str
                          "<div"
                          " id=\"" id "\""
                          " class=\"gallery-text " className "\""
                          " data-width=\"" data-width  "\""
                          " data-height=\"" data-height  "\""
                          ">"
                          "<b>"
                          title
                          "</b>"
                          "<p>"
                          text
                          "</p>"
                          "<div class=\"see-all-button\">...see all</div>"
                          "</div>"))
         :text-or-img (fn [widget-img widget-text data]
                        (if (contains? data :text)
                          (widget-text data)
                          (widget-img data)))}))

    om/IDidUpdate
    (did-update  [this prev-props prev-state]
      (->
        (js/$ ".megafolio-container")
        (.megafoliopro #js {})))

    om/IDidMount
    (did-mount [_]
      (let [uuid (om/get-state owner :uuid)]
        (->
          (js/$ ".megafolio-container")
          (.megafoliopro #js {}))))

    om/IRenderState
    (render-state [_ {:keys [widget-img widget-text text-or-img] :as state}]
      (dom/div #js {:className "container"}
               (dom/div #js {:className "megafolio-container"
                             :dangerouslySetInnerHTML
                             #js {:__html (apply str (map
                                                       (partial
                                                         text-or-img
                                                         widget-img
                                                         widget-text)
                                                       imgs))}})))))

(defn main-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:add-widget (fn [cursor]
                     (println "add-widget ran")
                     (let [widget-id (js/parseInt
                                       (.-value
                                         (om/get-node owner "add-widget")))]
                       (om/transact! cursor (fn [x]
                                            (conj x (widget-data widget-id))))))
       :remove-widget (fn [_])})

    om/IRenderState
    (render-state [_ {:keys [add-widget remove-widget] :as state}]
      (dom/div #js {:className "main-view"}
               (apply dom/div nil
                      (om/build-all widget data))
               (dom/div #js {:className "edit"}
                        "add widget: "
                        (dom/input #js {:ref "add-widget"})
                        (dom/button #js {:onClick (fn [_] (add-widget data))}
                                    "Submit"))
               (dom/div #js {:className "edit"}
                        "remove widget: "
                        (dom/input #js {:ref "remove-widget"})
                        (dom/button #js {:onClick (fn [_] (remove-widget "remove-widget"))}
                                    "Submit"))))))

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
                       (cond
                         (string-contains? bg-img "#")
                         (do
                           (set! (-> js/document .-body .-background) "")
                           (set!
                             (-> js/document .-body .-style .-backgroundColor)
                             bg-img))
                         (string-contains? bg-img "linear")
                         (set! (-> js/document .-body .-background) bg-img)
                         :file
                         (set!
                           (-> js/document .-body .-background)
                           (str "/img/backgrounds/" bg-img))))

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
        (if
          (::grey-bg? fresh-active-route)
          (-> (js/$ "body" ) (.addClass "grey-out"))
          (-> (js/$ "body" ) (.removeClass "grey-out")))
        (dom/div nil
                 (om/build main-view widgets)
                 (om/build main-nav-view data))))))

(defn init []
  (let [uid "SGXvf26OEpeVDQ79XIH2V71fVnT2"
        uiconfig #js {:callbacks #js {:signInSuccess (fn [user credential redirectUrl]
                                                       (println "sucessful sign in")
                                                       (.dir js/console user)
                                                       false)}
                      :signInFlow "popup"
                      :signInOptions (array #js {:provider js/firebase.auth.EmailAuthProvider.PROVIDER_ID})
                      :tosUrl "https://google.com"
                      :credentialHelper js/firebaseui.auth.CredentialHelper.NONE}
        ui (js/firebaseui.auth.AuthUI. (js/firebase.auth))
        user-data-ref (->
                        (js/firebase.database)
                        (.ref (str "users/" uid)))]

    (->
      (js/firebase.database)
      (.ref (str "users/" uid))
      (.once "value")
      (.then (fn [snapshot]
               (reset! remote-monolith (rdr/read-string (.-data (.val snapshot))))
               (om/root master monolith
                        {:target (. js/document (getElementById "super-container"))}))))))

(comment

  (defmethod widget 000 [data owner]
    (reify
      om/IInitState
      (init-state [_]
        {:uuid (random-uuid)})

      om/IRenderState
      (render-state [_ {:keys [uuid] :as state}]
        (dom/div nil "Skeleton Widget"))))

  (def uid "SGXvf26OEpeVDQ79XIH2V71fVnT2")
  (def defaultapp (-> js/firebase ))
  (def defaultstorage (-> js/firebase .storage))
  (def defaultDatabase (-> js/firebase .database))

  (->
    (js/firebase.auth)
    (.onAuthStateChanged
      (fn [user]
        (.dir js/console user))))

  (set! js/firebase.database.Refernce (fn [e]
                                        (println "Database reference ")
                                        (.dir js/console e)))
  (->
    user-data-ref
    (.on
      "value"
      (fn [snapshot]
        (println (.val snapshot)))))

  (=
   @monolith
   @monolith
    )

  (=
    (rdr/read-string (pr-str @monolith))
    @monolith
    )

  (type (clj->js @monolith))
  (= (clj->js @monolith) (js->clj (clj->js @monolith) :keywordize-keys true))
  (= (clj->js @monolith) (clj->js @monolith))
  (= @monolith @monolith)
  (= @monolith (js->clj (clj->js @monolith) :keywordize-keys true))
  (type @monolith)

  (def uid "SGXvf26OEpeVDQ79XIH2V71fVnT2")

  (def user-data-ref (->
                       (js/firebase.database)
                       (.ref (str "users/" uid))))

  (->
    user-data-ref
    (.set #js {:username "wellwell"
               :email "leon.talbert@gmail.com"
               :data  (clj->js @remote-monolith)
               }))

  (.start ui "#firebase" uiConfig)

  (use 'nangpress.app :reload-all)

  (load-file "nangpress/app.cljs")
  )


