(ns nnangpress.monolith
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.utils :as u]
            [clojure.zip :as z]))

(def monolith (atom {}))

#_(defn flatten-routes [routes-map]
  (tree-seq
    #(contains? % :children)
    #(:children %)
    routes-map))

#_(defn get-active-route [flat-routes current-route]
  (->>
    flat-routes
    (filter
      #(=
         (splitter (first current-route))
         (splitter (:route-name %))))
    first))

(defn monolith-watcher-init [monolith]
  (add-watch monolith :watcher
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
                              :data  (pr-str @monolith)}))))))

;move to utils
(defn index-of
    "return the index of the supplied item, or nil"
    [v item]
    (let [len (count v)]
      (loop [i 0]
        (cond
          (<= len i) nil,
          (= item (get v i)) i
          :else (recur (inc i ))))))

(comment 

  ;reduce on the route name to get the current routes

  (defn index-of
    "return the index of the supplied item, or nil"
    [v item]
    (let [len (count v)]
      (loop [i 0]
        (cond
          (<= len i) nil,
          (= item (get v i)) i
          :else (recur (inc i ))))))

  (flatten-routes 
    (-> (om/root-cursor monolith) :route-widget :routes-map))

  (type 
    (flatten-routes 
      (-> (om/root-cursor monolith) :route-widget :routes-map))
    )

  (type 
    (-> (om/root-cursor monolith) :route-widget :routes-map))

  (type
    (get 
      (:children 
        (-> (om/root-cursor monolith) :route-widget :routes-map))  
      1
      )
    )

  (type
    (filter 
      #(= (:route-name %) "/routea")
      (:children 
        (-> (om/root-cursor monolith) :route-widget :routes-map))  
      )
    )

  (index-of 
    (vec
      (map 
        :route-name
        (:children 
          (-> (om/root-cursor monolith) :route-widget :routes-map))))
    "/routeb")

  (def mon monolith)

  (loop [cursor (-> (om/root-cursor mon) :route-widget :routes-map)]
    (let [route-name (:route-name cursor)
          current-route "/personba"
          idx (index-of 
                (vec (map :route-name (:children cursor)))
                current-route)]

      (println "hi there")
      (println "route-name: " route-name)
      (println "current-route: " current-route)

      (cond 
        (= "/" route-name) (:widgets cursor)
        (= idx nil)  
        (= route-name current-route) (:widgets cursor) 
        :else (recur (get (:children cursor) idx)))))
  
  (in-ns 'nnangpress.monolith)

  (def test (z/zipper map? #(:children %) (fn [n c] n) @mon))

  (reduce 
    (fn [a b]
      (let [idx (index-of (vec (map :route-name a)) (str "/" b))
            current-route (get a idx)]
        (println "a: " a) 
        (println "b: " b) 
        (println "map: " (map :route-name a))
        (println "children: " (:children a)) 
        (println "get children: " (:children (get a idx)))
        (println "idx: " idx) 
        (cond 
          (= "" b) (:children a)
          (empty? (:children current-route)) (:widgets current-route)
          :else (:children current-route) 
          ))) 
    (-> @mon :route-widget :routes-map)
    (clojure.string/split "/routea/routeaa" #"/"))
  
  (clojure.string/split "/routea/routeaa" #"/")

  (loop [cursor (-> (om/root-cursor mon) :route-widget :routes-map)]
    (let [route-name (:route-name cursor)
          current-route "/personba"
          idx (index-of 
                (vec (map :route-name (:children cursor)))
                current-route)]

      (println "hi there")
      (println "route-name: " route-name)
      (println "current-route: " current-route)

      (cond 
        (= "/" route-name) (:widgets cursor)
        (= idx nil)  
        (= route-name current-route) (:widgets cursor) 
        :else (recur (get (:children cursor) idx)))))

(first (clojure.string/split "/routea/routeaa" #"/"))

  (def mon monolith)

(loop [route (clojure.string/split "/routea/routeaa" #"/")
       routes-map (-> @mon :route-widget :routes-map)]
  (let [xs (rest route)
        fxs (first xs) 
        idx (index-of (vec (map :route-name (:children routes-map))) (str "/" fxs))]
    (cond 
      (empty? xs) (:widgets routes-map)
      :else (recur xs (get (:children routes-map) idx)))))

(current-widgets 
  (clojure.string/split "/routea/routeaa" #"/")
  (-> @mon :route-widget :routes-map))

)

(defn current-widgets [route routes-map]
  (let [xs (rest route)
        fxs (first xs) 
        idx (index-of (vec (map :route-name (:children routes-map))) (str "/" fxs))]
    (cond 
      (empty? xs) (:widgets routes-map)
      :else (current-widgets xs (get (:children routes-map) idx)))))

(defn ref-cursor-init [monolith]

  (defn main-view-style []
    (om/ref-cursor (-> (om/root-cursor monolith) :route-widget :main-view-style)))

  (defn edit-mode []
    (om/ref-cursor (:edit-mode (om/root-cursor monolith))))

  (defn all-widgets-data []
    (om/ref-cursor (:all-widgets-data (om/root-cursor monolith))))

  (defn routes-map []
    (om/ref-cursor (:routes-map (:route-widget (om/root-cursor monolith)))))

  (defn current-route []
    (om/ref-cursor (:current-route (om/root-cursor monolith))))

  (defn logo-text []
    (om/ref-cursor (:logo-text (om/root-cursor monolith))))

  (defn logo-hint []
    (om/ref-cursor (-> (om/root-cursor monolith) :route-widget :routes-map :nav-hint)))

  (defn active-route []
    (om/ref-cursor (-> (om/root-cursor monolith) :active-route))))

