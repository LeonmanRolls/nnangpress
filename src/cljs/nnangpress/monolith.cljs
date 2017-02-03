(ns nnangpress.monolith
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.utils :as u]
            [clojure.zip :as z]
            [clojure.spec :as s]
            [clojure.walk :as wlk]))

(s/def ::all-widgets-data vector?)
(s/def ::current-route vector?)
(s/def ::edit-mode vector?)
(s/def ::logo-text vector?)
(s/def ::route-widget map?)
(s/def ::uid vector?)
(s/def ::email vector?)

(s/def ::all-data (s/keys :req-un [::all-widgets-data
                                   ::uid
                                   ::current-route
                                   ::edit-mode
                                   ::logo-text
                                   ::route-widget]))

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

(defn current-route-map 
  "Get the whole data map for the current route"
  [route routes-map]
  (let [xs (rest route)
        fxs (first xs)
        idx (u/index-of (vec (map :route-name (:children routes-map))) (str "/" fxs))]
    (cond
      (empty? xs) routes-map
      :else (current-route-map xs (get (:children routes-map) idx)))))

(defn current-widgets 
  "Get the widget(s) data for the current route" 
  [route routes-map]
  (let [xs (rest route)
        fxs (first xs)
        idx (u/index-of (vec (map :route-name (:children routes-map))) (str "/" fxs))]
    (cond
      (empty? xs) (:widgets routes-map)
      :else (current-widgets xs (get (:children routes-map) idx)))))

(defn ref-cursor-init 
  "Defines our monolith API" 
  [monolith]

  (defn uid []
    (om/ref-cursor (:uid (om/root-cursor monolith))))

  (defn user-email []
    (om/ref-cursor (:email (om/root-cursor monolith))))

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

(s/fdef update-all
        :args (s/cat :data ::all-data))

(defn update-all 
  "Replace the entire monolith with a new monolith" 
  [data]
  (om/update! (all-data) data))

(s/fdef add-current-user 
        :args (s/cat :data ::all-data))

(defn add-current-user-email 
  "Add current user email to data map" 
  [data]
  (assoc data :email (user-email)))

(s/fdef change-site 
        :args (s/cat :data ::all-data))

(defn change-site 
  "Load a new site" 
  [site-data]
  (-> 
    site-data 
    add-current-user-email 
    update-all))

(defn toggle-edit-mode 
  "Toggle edit mode" 
  []
  (om/transact! 
    (edit-mode) 
    (fn [dabool] [(not (first dabool))])))

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

(defn clj-empty->firebase-empty 
  "Opposite of firebase-empty->clj-empty" 
  [data]
  (wlk/postwalk 
    (fn [x]   
      (if 
        (and 
          (vector? x) 
          (empty? x)) 
        [""] 
        x)) 
    data))

(defn nnangpress-data->monolith
  "Going from system data to system + user data" 
  [nnangpress-data current-user]
  (reset! 
    monolith 
    (assoc 
      (dissoc nnangpress-data :route-widgets)  
      :uid [(if current-user (.-uid current-user) "")] 
      :email [(if current-user (.-email current-user) "")]
      :route-widget (if current-user
                      (-> nnangpress-data :route-widgets :userhome)
                      (-> nnangpress-data :route-widgets :homepage)))))

