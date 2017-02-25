(ns nnangpress.monolith
  "Functions for reading and updating the monlith. Most side-effecting functions should go here."
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.utils :as u]
            [clojure.zip :as z]
            [clojure.spec :as s]
            [clojure.walk :as wlk]
            [cljs.core.async :refer [put! chan <!]]
            [nnangpress.firebase :as fb]))

(s/def ::all-widgets-data vector?)
(s/def ::current-route vector?)
(s/def ::edit-mode vector?)
(s/def ::logo-text vector?)
(s/def ::route-widget map?)
(s/def ::route-widgets map?)
(s/def ::email vector?)
(s/def ::site-name vector?)

(s/def ::uid vector?)
(s/def ::authed-uid-raw (s/and #(not (empty? %)) string?))

(s/def ::channel #(= 
                    (type %)
                    cljs.core.async.impl.channels/ManyToManyChannel))

(s/def ::name string?)
(s/def ::description string?)
(s/def ::data map?)

(s/def ::all-data (s/keys :req-un [::all-widgets-data
                                   ::uid
                                   ::current-route
                                   ::edit-mode
                                   ::logo-text
                                   ::route-widget]))

(s/def ::site-data (s/keys :req-un [::all-widgets-data
                                    ::uid
                                    ::site-name
                                    ::current-route
                                    ::edit-mode
                                    ::logo-text
                                    ::route-widget]))

(s/def ::nangpress-data (s/keys :req-un [::all-widgets-data
                                         ::uid
                                         ::current-route
                                         ::edit-mode
                                         ::logo-text
                                         ::route-widgets
                                         ::route-widget]))

(s/def ::user-site-data (s/keys :req-un [::name ::description ::data]))

(def monolith (atom {}))

(set-validator! 
  monolith
  (fn [new-data]
    (s/valid? ::site-data new-data)))

(defn current-route-map 
  "Get the whole data map for the current route, reqires a seq of the route segments."
  [route routes-map]
  (let [xs (rest route)
        fxs (first xs)
        idx (u/index-of (vec (map :route-name (:children routes-map))) (str "/" fxs))]
    (cond
      (empty? xs) routes-map
      :else (current-route-map xs (get (:children routes-map) idx)))))



(defn monolith-watcher-init [monolith]
  (add-watch monolith :watcher
             (fn  [key atom old-state new-state]
               (let [uid "SGXvf26OEpeVDQ79XIH2V71fVnT2"
                     user-data-ref (->
                                     (js/firebase.database)
                                     (.ref (str "users/" uid)))]
                 (prn "-- Atom Changed --")
                 (prn (keys new-state))

                 #_(->
                     user-data-ref
                     (.set #js {:username "wellwell"
                                :email "leon.talbert@gmail.com"
                                :data  (pr-str @monolith)}))))))

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

  (defn site-name []
    (om/ref-cursor (:site-name (om/root-cursor monolith))))

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

(s/fdef add-current-user-email
        :args (s/cat :data ::all-data))

(defn add-current-user-email 
  "Add current user email to data map" 
  [data]
  (assoc data :email (user-email)))

(defn add-current-uid 
  "Add current user email to data map" 
  [data]
  (assoc data :uid @(uid)))

(s/fdef change-site 
        :args (s/cat :data ::all-data))

(defn change-site 
  "Load a new site" 
  [site-data]
  (-> 
    site-data 
    add-current-user-email 
    add-current-uid
    update-all))

(defn toggle-edit-mode 
  "Toggle edit mode" 
  []
  (om/transact! 
    (edit-mode) 
    (fn [dabool] [(not (first dabool))])))

(s/fdef clj-empty->firebase-empty 
        :args (s/cat :data any?))

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

(s/fdef reset-monolith-atom! 
        :args (s/cat :data ::site-data))

(defn reset-monolith-atom! [data]
  (reset! monolith data))

(s/fdef nnangpress-data->monolith 
        :args (s/cat :nangpress-data ::nangpress-data :current-user any?))

(defn nnangpress-data->monolith
  "Going from system data to system + user data and setting monolith atom" 
  [nnangpress-data current-user]
  (reset-monolith-atom! 
    (assoc 
      (dissoc nnangpress-data :route-widgets)  
      :uid [(if current-user (.-uid current-user) "")] 
      :email [(if current-user (.-email current-user) "")]
      :route-widget (if current-user
                      (-> nnangpress-data :route-widgets :userhome)
                      (-> nnangpress-data :route-widgets :homepage)))))

(s/fdef get-user-sites 
  :args (s/cat :uid ::authed-uid-raw :chan ::channel))

(defn get-user-sites 
  "Get all the site data for a given user" 
  [uid chan]
  (let [db (js/firebase.database)
        data-ref (.ref db (str "users/" uid))]
    (->
      data-ref
      (.once "value")
      (.then (fn [snapshot]
               (let [remote-map (fb/firebase-empty->clj-empty
                                  (js->clj (.val snapshot) :keywordize-keys true))]
                 (put! 
                   chan 
                   (:sites remote-map))))))))

(s/fdef user-site-index 
  :args (s/cat :uid ::authed-uid-raw :site-name string? :chan ::channel)
  :ret ::channel)

(defn user-site-index 
  "Get the index of a user's site" 
  [uid site-name out] 
  (let [c (chan)]
    (go 
      (get-user-sites uid c) 
      (put! out (u/index-of-key-val (<! c) :name site-name)))))

(s/fdef save-site-data 
        :args (s/or 
                :empty empty? 
                :three-args (s/cat :uid ::authed-uid-raw 
                                   :data ::user-site-data 
                                   :idx-or-name (s/or :idx int? :site-name string?))))

(defn save-site-data 
  "Save a user's site data by site name or index" 
  ([]
   (let [{:keys [site-name] :as all-data} @(all-data)]
     (save-site-data 
       (first @(uid)) 
       {:name (first site-name) 
        :description "A description"
        :data all-data}
       (first site-name))))

  ([uid data idx-or-site-name]
   (if 
     (int? idx-or-site-name)
     (->
       (js/firebase.database)
       (.ref (str "users/" uid "/sites/" idx-or-site-name))
       (.set (clj->js data)))
     (let [c (chan)
           _ (user-site-index uid idx-or-site-name c)]
       (go
         (->
           (js/firebase.database)
           (.ref (str "users/" uid "/sites/" (<! c)))
           (.set (clj->js data))))))))

(s/fdef user-site-count 
  :args (s/cat :uid ::authed-uid-raw :chan ::channel)
  :ret ::channel)

(defn user-site-count 
  "number of sites a user has" 
  [uid out]
  (go 
    (let [c (chan)
          _ (get-user-sites uid c)]
      (put! out (count (<! c))))))

(defn new-site 
  "Save data as a new site" 
  []
  (go 
    (let [uid (uid)
          c (chan)
          _ (user-site-count (first @uid) c)
          data (all-data)
          site-name (str (first (:site-name @data)) "-" (u/uid 4)) ]
      (save-site-data 
        (first @uid) 
        {:name site-name
         :description "Change me"
         :data (update @data :site-name (fn [x] [site-name]))}
        (<! c)))))

(defn ref-vec-swap 
  "Swap two elements of a vector cursor" 
  [cursor idx1 idx2]
  (om/transact! cursor (fn [xs] (u/vec-swap xs idx1 idx2))))

(defn update-monolith-user-data 
  "Update monolith with current user data" 

  ([monolith]
   (update-monolith-user-data monolith (fb/current-user)))

  ([monolith current-user]
   (assoc 
     monolith  
     :uid [(if current-user (.-uid current-user) "")] 
     :email [(if current-user (.-email current-user) "")])))

(defn raw-nnangpress->renderable 
  "Raw nnangpress to renderable based on user auth status"  

  ([raw-nnangpress]
   (raw-nnangpress->renderable raw-nnangpress (fb/current-user)))

  ([raw-nnangpress current-user]
   (-> 
     (assoc raw-nnangpress :route-widget (if current-user
                                           (-> raw-nnangpress :route-widgets :userhome)
                                           (-> raw-nnangpress :route-widgets :homepage)))
     (update-monolith-user-data current-user)
     (dissoc :route-widgets))))

(defn renderable-site->full-monolith
  "Combines a renderable site with system data to form full monolith" 

  ([renderable-site]
   (let [c (chan)]
     (go 
       (fb/firebase-get "nangpress-data/" c)
       (renderable-site->full-monolith renderable-site (<! c)))))

  ([renderable-site nangpress-system-data] 
   (merge nangpress-system-data renderable-site)))

(defn set-bg-img 
  "Set background colour or image." 
  [bg-img]
  (cond
    (u/string-contains? bg-img "#")
    (do
      (set! (-> js/document .-body .-background) "")
      (set!
        (-> js/document .-body .-style .-backgroundColor)
        bg-img))
    (u/string-contains? bg-img "linear")
    (set! (-> js/document .-body .-background) bg-img)
    :file
    (set!
      (-> js/document .-body .-background)
      bg-img)))

(defn set-bg-grey 
  "If they current route desires a grey background, then make it so, if not, remove the css class." 
  [grey-bg?]
  (if
    grey-bg? 
    (-> (js/$ "body") (.addClass "grey-out"))
    (-> (js/$ "body") (.removeClass "grey-out"))))

(defn independent-ref-cursor-watcher 
  "Utilizes reference cursors using the react comopnent associated with the master component (although of course it
  can work with any component). This is here mainly so that conceptually the monlith can 'watch itself' and make 
  impure changes outside of react. For example setting the background image based on monolith changes. The background 
  image is better dealt with outside of react." 
  [owner]
  (let [current-route (om/observe owner (current-route))
        routes-map (om/observe owner (routes-map))
        {:keys [bg-img grey-bg?]}  (current-route-map (clojure.string/split (first @current-route) #"/") @routes-map)]

    (set-bg-img bg-img)
    (set-bg-grey grey-bg?)
    (println "current-route: " (keys 
                                 (current-route-map
                                   (clojure.string/split (first @current-route) #"/")
                                   @routes-map 
                                   )
                                 ))

    )
  )

