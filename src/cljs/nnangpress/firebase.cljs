(ns nnangpress.firebase
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [clojure.walk :as wlk]
    [cljs.core.async :refer [put! chan <!]]))

(defn firebase-empty->clj-empty 
  "Goiing from firebase representation of empty vector to a clj empty vector" 
  [data]
  (wlk/postwalk 
    (fn [x]   
      (if 
        (and 
          (vector? x) 
          (= 1 (count x)) 
          (= "" (first x))) 
        [] 
        x)) 
    data))

(defn firebase-get
  "Get data from firebase database by route"  
  [route out] 
  (->
    (.ref (js/firebase.database) route)
    (.once "value")
    (.then (fn [snapshot]
             (put! 
               out 
               (firebase-empty->clj-empty
                 (js->clj (.val snapshot) :keywordize-keys true)))))))

(defn current-user 
  "Get info on the current user" 
  []
  (-> js/firebase .auth .-currentUser))

