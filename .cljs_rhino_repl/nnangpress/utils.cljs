(ns nnangpress.utils
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [cljs.core.async :refer [put! chan <! close!]]
    [clojure.string :as stg]))

;(set! *warn-on-infer* true)

(defn index-of
    "return the index of the supplied item, or nil"
    [v item]
    (let [len (count v)]
      (loop [i 0]
        (cond
          (<= len i) nil,
          (= item (get v i)) i
          :else (recur (inc i ))))))

(defn index-of-key-val [s key val]
    (loop [idx 0 items s]
      (cond
        (empty? items) nil
        (= val (key (first items))) idx
        :else (recur (inc idx) (rest items)))))

(defn tree-seq-path [branch? children root & [node-fn]]
  (let [node-fn (or node-fn identity)
        walk (fn walk  [path node]
               (let [new-path (conj path (node-fn node))]
                 (lazy-seq
                   (cons new-path
                         (when (branch? node)
                           (mapcat (partial walk new-path) (children node)))))))]
    (walk [] root)))

(defn string-contains? 
  "Subject then thing you are searching for." 
  [x y]
  (not= -1 (.indexOf x y)))

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defn uid 
  "Random string with hyphens"
  ([] (.toString (random-uuid))) 
  ([length] (subs (.toString (random-uuid)) 0 length)))

(defn vec-swap 
  "Swap two elements inside a vector" 
  [v i1 i2] 
  (assoc v i2 (v i1) i1 (v i2)))­

(defn toggle
  "Makes true false and false true. This too shall pass." 
  [bool] 
  (not bool))

(defn str-beautify 
  "Remove hyphens from a string, used in going from a route name to something displayable in navbar." 
  [s]
  (->
    (subs s 1)
    (stg/replace #"-" " ")))

(defn str-uglify 
  "Mainly for making a string storable as a route name."
  [s]
  (str "/" (stg/replace s #" " "-")))

(defn atom? 
  ""
  [x]
  (instance? cljs.core/Atom x))

(defn coll-contains? 
  "This exists because core contains? only works on maps."
  [coll x]
  (if (some #(= x %) coll) true false))

(defn timeout [ms]
    (let [c (chan)]
          (js/setTimeout (fn [] (close! c)) ms)
          c))

