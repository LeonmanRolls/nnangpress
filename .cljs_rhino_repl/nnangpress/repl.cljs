(ns nnangpress.repl
  (:require [nnangpress.monolith :as mn]
            [cljs.reader :as rdr]))

(defn new-route [route data]
  (->
    (js/firebase.database)
    (.ref route)
    (.set data)))

(defn save-user-monolith []
  (let [uid "testing"
        user-data-ref (->
                        (js/firebase.database)
                        (.ref (str "users/" uid)))]
    (->
      user-data-ref
      (.set #js {:username "wellwell"
                 :email "leon.talbert@gmail.com"
                 :data  (clj->js @mn/monolith :keywordize-keys true)}))))

(defn load-data [route callback]
  (->
    (js/firebase.database)
    (.ref route)
    (.once "value")
    (.then (fn [snapshot]
             #_(println "snapshot: " (js->clj (.val snapshot) :keywordize-keys true))
             (callback (.val snapshot))))))

(comment

  (new-route
    "js-data/data"
    (clj->js
      {:test ["/"]
       :current-route ["/"],
       :logo-text ["Solari"],
       :all-widgets-data [{:widget-uid 1, :object-id "a", :widget-name "Standard text widget", :inner-html ["<p> Hi there </p>"]}
                          {:widget-uid 2, :widget-name "Slider", :object-id "basdfafoi", :imgs [{:object-id "dsafoijlsaf", :url "http://placekitten.com/900/600"} {:object-id "asdfipwnelj", :url "http://placekitten.com/900/600"}]}
                          {:widget-uid 3, :object-id "b", :widget-name "Standard text widget", :inner-html ["<p> Hi there </p>"]}
                          {:widget-uid 4, :object-id "c", :widget-name "Accordion", :text [{:title {:widget-uid 1, :object-id "d", :widget-name "Standard text widget", :inner-html ["<p> Hi there </p>"]}, :sub {:widget-uid 1, :object-id "e", :widget-name "Standard text widget", :inner-html ["<p> Hi there </p>"]}}]}
                          {:widget-uid 5, :object-id "f", :widget-name "Standard text widget", :inner-html ["<p> Hi there </p>"]}
                          {:widget-uid 6, :object-id "g", :widget-name "Standard image widget", :img "http://placekitten.com/800/400"}
                          {:widget-uid 7, :object-id "h", :widget-name "Grid", :imgs [{:id "entry-1", :className "mega-entry", :data-src "http://placekitten.com/300/301", :data-width "320", :data-height "400"} {:id "entry-1-1", :className "mega-entry", :title "WE HAVE A LAUGH", :text "Cue James in a bald cap, need I say more?", :data-width "320", :data-height "400"}]}
                          {:widget-uid 9, :object-id "fdsaiwasasdfl", :widget-name "Sign in widget"}],
       :edit-mode [false],
       :route-widget {:route-widget-id 0,
                      :main-view-style {:style {}},
                      :routes-map {:route-name "/",
                                   :bg-img "http://www.startupnetcon.org/img/startupnetcon.jpg",
                                   :nav-hint ["Architects"], :nav-hint-style {:color "black"},
                                   :widgets [{:widget-uid 6, :object-id "sdafoiuewq", :widget-name "Standard image widget", :img "http://i.imgur.com/yxKTvJJ.png"}
                                             {:widget-uid 9, :object-id "90a48dde-a50f-46c8-9dd5-fa7f14ddd410", :widget-name "Sign in widget"}],
                                   :children []}}}))


  (new-route
    "js-data/data/route-widget/main-nav-view-style"
    (clj->js {:style {}}))

  (:test @mn/monolith)

  (load-data "defaultdata/data" identity)

  (println @mn/monolith)

  (clj->js @mn/monolith :keywordize-keys true)
  (clj->js @mn/monolith)

  )

