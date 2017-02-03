(ns nnangpress.repl
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [nnangpress.monolith :as mn]
            [nnangpress.utils :as u]
            [nnangpress.widgets :as wgts]
            [cljs.reader :as rdr]
            [cljs.spec :as s]
            [cljs.spec.test :as ts :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))

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

  (def current-user (-> js/firebase .auth .-currentUser))
  (def uid (.-uid current-user))
  (def db (js/firebase.database))
  (def data-ref (.ref db (str "users/" uid)))

  (def cache (atom []))
  (keys @cache)

  (u/index-of-key-val (:sites @cache) :name "site2")

  (let [c (chan)]
    (go 
      (mn/user-site-index uid "site1" c)
      (println (<! c))
      ))

  (->
    data-ref
    (.once "value")
    (.then (fn [snapshot]
             (let [remote-map (mn/firebase-empty->clj-empty
                                (js->clj (.val snapshot) :keywordize-keys true))]
               (println remote-map)        
               (reset! cache remote-map)
               ))))

  (let [uid "SGXvf26OEpeVDQ79XIH2V71fVnT2"
        user-data-ref (->
                        (js/firebase.database)
                        (.ref (str "users/" uid)))]
    (prn "-- Atom Changed --")
    (->
      user-data-ref
      (.set #js {:username "wellwell"
                 :email "leon.talbert@gmail.com"
                 :data  (pr-str @monolith)})))

  (->
    (js/firebase.database)
    (.ref (str "users/" "eKWcekJm6GMc4klsRG7CNvteCQN2" "/sites/" "3" ))
    (.set (clj->js {:test "hi"})) 
    )

(defn update-site-data 
  "Update a user's site data by site name" 
  [uid site-name data]
  (let [c (chan)
        _ (mn/user-site-index uid site-name c)]
    (go
      (->
        (js/firebase.database)
        (.ref (str "users/" uid "/sites/" "3"))
        (.set (clj->js data)) 
        ))))

  (mn/update-site-data "eKWcekJm6GMc4klsRG7CNvteCQN2" "site2" {:test "hi"})
  )

