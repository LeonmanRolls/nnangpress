(ns nnangpress.repl
  (:require [nnangpress.monolith :as mn]
            [nnangpress.utils :as u]
            [cljs.reader :as rdr]
            [ajax.core :refer [GET POST]]))

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
    "users/eKWcekJm6GMc4klsRG7CNvteCQN2/sites/1"
    (clj->js {:name "site2"
              :description "Another site"
              :data @mn/monolith}))

  (def cache (atom []))

  (->
    (js/firebase.database)
    (.ref (str "users/eKWcekJm6GMc4klsRG7CNvteCQN2/sites"))
    (.once "value")
    (.then (fn [snapshot]
             (let [remote-map (js->clj (.val snapshot) :keywordize-keys true)]
               (reset! cache remote-map)
               (println "remote map: " remote-map)))))

  )
