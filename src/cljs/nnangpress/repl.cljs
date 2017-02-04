(ns nnangpress.repl
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [nnangpress.monolith :as mn]
            [nnangpress.utils :as u]
            [nnangpress.widgets :as wgts]
            [nnangpress.firebase :as fb]
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

(let [c (chan)]
  (go 
    (fb/firebase-get "nangpress-data/site-name" c)
    (println "rtn" (<! c))))
  )

