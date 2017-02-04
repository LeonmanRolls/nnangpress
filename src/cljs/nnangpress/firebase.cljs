(ns nnangpress.firebase
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan <!]]
            [nnangpress.monolith :as mn]))

(defn firebase-get
  "Get data from firebase database by route"  
  [route out] 
  (->
    (.ref (js/firebase.database) route)
    (.once "value")
    (.then (fn [snapshot]
             (put! 
               out 
               (mn/firebase-empty->clj-empty
                 (js->clj (.val snapshot) :keywordize-keys true)))))))
