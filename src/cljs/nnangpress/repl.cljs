(ns nnangpress.repl
  (:require [nnangpress.monolith :as mn]
            [nnangpress.utils :as u]
            [nnangpress.widgets :as wgts]
            [cljs.reader :as rdr]
            [ajax.core :refer [GET POST]]
            [cljs.spec :as s]
            [cljs.spec.test :as ts :include-macros true]))

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

  (def sample-data {:widget-uid 2
                    :object-id (u/uid)
                    :imgs [{:object-id (u/uid)
                            :url "http://placekitten.com/900/600"}
                           {:object-id (u/uid)
                            :url "http://placekitten.com/900/600"}]})

  (s/valid? ::wgts/widget-data sample-data)

  (s/def ::all-widgets-data (s/coll-of ::wgts/widget-data))

  (s/valid? ::all-widgets-data (:all-widgets-data @mn/monolith))
  (s/valid? ::all-widgets-data sample-data)

  (:all-widgets-data @mn/monolith)
  (keys @mn/monolith)

  (ts/instrument
    'nnangpress.monolith
    )

  (ts/instrumentable-syms)


  )

