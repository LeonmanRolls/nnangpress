(ns nnangpress.monolith
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.utils :as u]
            [clojure.zip :as z]))

(def monolith (atom {}))

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

(defn current-route-map [route routes-map]
  (let [xs (rest route)
        fxs (first xs)
        idx (u/index-of (vec (map :route-name (:children routes-map))) (str "/" fxs))]
    (cond
      (empty? xs) routes-map
      :else (current-route-map xs (get (:children routes-map) idx)))))

(defn current-widgets [route routes-map]
  (let [xs (rest route)
        fxs (first xs)
        idx (u/index-of (vec (map :route-name (:children routes-map))) (str "/" fxs))]
    (cond
      (empty? xs) (:widgets routes-map)
      :else (current-widgets xs (get (:children routes-map) idx)))))

(defn ref-cursor-init [monolith]

  (defn uid []
    (om/ref-cursor (:uid (om/root-cursor monolith))))

  (defn all-data []
    (om/ref-cursor (om/root-cursor monolith)))

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
    (om/ref-cursor (-> (om/root-cursor monolith) :route-widget :routes-map :nav-hint))))

