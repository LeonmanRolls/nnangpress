(ns nnangpress.monolith
  "Functions for reading and updating the monlith. Most side-effecting functions should go here."
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.utils :as u]
            [nnangpress.dom :as ndom]
            [nnangpress.specs :as spcs]
            [nnangpress.widgetdata :as wd]
            [clojure.zip :as z]
            [clojure.spec :as s]
            [clojure.walk :as wlk]
            [cljs.core.async :refer [put! chan <!]]
            [nnangpress.firebase :as fb]))

(declare update-site-state!)

;#Primitives

;Cursors
(s/def ::map-cursor (= (type %) om/MapCursor))
(s/def ::indexed-cursor #(= (type %) om/IndexedCursor))

(s/def ::all-widgets-data vector?)
(s/def ::current-route vector?)
(s/def ::edit-mode vector?)
(s/def ::logo-text vector?)
(s/def ::route-widget map?)
(s/def ::admin-route-widgets map?)
(s/def ::email (s/or :non-cursor vector? :cursor ::indexed-cursor))
(s/def ::site-name vector?)
(s/def ::site-state string?)
(s/def ::uid vector?)

(s/def ::uid vector?)
(s/def ::authed-uid-raw (s/and #(not (empty? %)) string?))

(s/def ::channel #(= (type %) cljs.core.async.impl.channels/ManyToManyChannel))


;Site meta-data, primarily for displaying a user's sites to the user.
(s/def ::name ::spcs/basic-mediumjs-wgt)
(s/def ::description ::spcs/basic-mediumjs-wgt)
(s/def ::site-id string?)
(s/def ::screenshot string?)

;#Compounds

;Unfortunately simple name. Data for a renderable site. Should be merged with system data to make a fully renderable 
;data structure.
(s/def ::data (s/keys :req-un [::email ::logo-text ::route-widget ::site-name ::site-state ::uid]))

(s/def ::all-data (s/keys :req-un [::all-widgets-data ::uid ::current-route ::edit-mode ::logo-text ::route-widget]))

(s/def ::site-data (s/keys :req-un [::all-widgets-data ::uid ::site-name ::current-route ::edit-mode ::logo-text
                                    ::route-widget]))

;For the sake of not overcomplicating initializing reference cursors, nangpress-data should be renderable and have 
;the shape that reference cursor initialization requires
(s/def ::nangpress-data (s/keys :req-un [::admin-route-widgets ::all-navs-data ::all-widgets-data ::current-route 
                                         ::edit-mode ::sidebar-data ::site-name ::site-state ::uid]))

;Primarily for displaying site on a user's homepage.
(s/def ::site-with-meta (s/keys :req-un [::site-id ::screenshot ::name ::description ::route-widget]))

;Minimum data required for a site to render
(s/def ::renderable (s/keys :req-un [::route-widget ::all-navs-data ::sidebar-data ::site-name ::uid ::email ::edit-mode
                                     ::all-widgets-data ::current-route]))

(def monolith (atom {}))

;Caching, use with caution!
(def nangpress-data-cache (atom {}))

#_(set-validator! 
  monolith
  (fn [new-data]
    (s/valid? ::site-data new-data)))

(defn new-route-widget 
  "Essentially the simplest nangpress site possible, with a tutorial widget on the homepage." 
  []
  {:logo-data {:logo-style {:fontSize "200%"
                            :textTransform "inherit"}
               :logo-text (wd/widget-data 16)}
   :main-view-style {:style {:dispaly "inherit"
                             :paddingLeft "170px"
                             :paddingRight "170px"}} 
   :nav-style {:backgroundColor "#CE4072"}
   :route-widget-id 0
   :routes-map {:bg-img "http://wallpaper-gallery.net/images/minimal-wallpaper/minimal-wallpaper-17.jpg"
                :children [{:bg-img "http://wallpaper-gallery.net/images/minimal-wallpaper/minimal-wallpaper-17.jpg"
                            :children [{:bg-img "http://wallpaper-gallery.net/images/minimal-wallpaper/minimal-wallpaper-17.jpg"
                                        :grey-bg? true
                                        :nav-hint ["Architects"]
                                        :nav-hint-style {:color "black"}
                                        :route-name "/child-ola-ola"
                                        :widgets []}]
                            :grey-bg? true
                            :nav-hint ["Architects"]
                            :nav-hint-style {:color "black"}
                            :route-name "/parent-ola-ola"
                            :widgets []}]
                :grey-bg? true
                :nav-hint ["Architects"] 
                :nav-hint-style {:color "black"}
                :route-name "/"
                :widgets [(wd/widget-data 15)]}})

(defn new-site-template
  []
  "Data for displaying on the userhome screen and rendering fully."
  {:name (wd/widget-data 1)
   :description (wd/widget-data 1)
   :site-id (u/uid)
   :screenshot "http://placekitten.com/500/400" 
   :route-widget (new-route-widget)})

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
               (let []
                 (prn "-- Atom Changed --")
                 (prn (keys new-state))
                 (prn "-- Site state --")
                 (prn (:site-state new-state))))))

(s/fdef ref-cursor-init 
        :args (s/cat :monolith u/atom?))

(defn ref-cursor-init 
  "Defines our monolith API for convenient access to data further down the tree." 
  [monolith]

  (defn route-widget-data []
    (om/ref-cursor (:route-widget (om/root-cursor monolith))))

  (defn all-navs-data []
    (om/ref-cursor (:all-navs-data (om/root-cursor monolith))))

  (defn sidebar-data []
    (om/ref-cursor (:sidebar-data (om/root-cursor monolith))))

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

  (defn logo-hint []
    (om/ref-cursor (-> (om/root-cursor monolith) :route-widget :routes-map :nav-hint))))

(defn current-widgets 
  "Get the widget(s) data for the current route" 
  [route routes-map]
  (let [xs (rest route)
        fxs (first xs)
        idx (u/index-of (vec (map :route-name (:children routes-map))) (str "/" fxs))]
    (cond
      (empty? xs) (:widgets routes-map)
      :else (current-widgets xs (get (:children routes-map) idx)))))

(defn current-widgets-builder<< 
  "A wrapper around the raw current-widgets function. Initializes required reference cursors in order to return the 
  current widgets cursor." 
  [owner]
  (let [routes-map-obs (om/observe owner (routes-map))
        current-route-obs (om/observe owner (current-route))
        current-widgets (current-widgets
                          (clojure.string/split (first @current-route-obs) #"/")
                          routes-map-obs)]
    current-widgets))

(s/fdef update-all
        :args (s/cat :data ::renderable))

(defn update-all 
  "Replace the entire monolith with a new monolith" 
  [data]
  (println "update-all: " (type (:email data)))
  (om/update! (all-data) data))

(defn add-current-user-email 
  "Add current user email to data map" 
  [data]
  (assoc data :email (user-email)))

(defn add-current-uid 
  "Add current user email to data map" 
  [data]
  (assoc data :uid @(uid)))

(s/fdef change-site 
        :args (s/cat :data ::renderable))

(defn change-site 
  "Load a new site" 
  [site-data]
  (-> 
    site-data 
    add-current-user-email 
    add-current-uid
    update-all)
  (update-site-state!))

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
        :args (s/cat :data ::renderable))

(defn reset-monolith-atom! [data]
  (reset! monolith data))

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
      (put! out (u/index-of-key-val (<! c) :site-id site-name)))))

(defn screenshot-data-uri 
  "Take a screenshot using html2canvas and returns a data uri string." 
  [out]
  (js/html2canvas 
    (ndom/get-node-by-id "body")
    #js{:background "#95a5a6"
        :onrendered (fn [canvas] 
                      (put! out (.toDataURL canvas)))}))

(s/fdef save-site-data 
        :args (s/or 
                :empty empty? 
                :three-args (s/cat :uid ::authed-uid-raw 
                                   :data any? 
                                   :idx-or-name (s/or :idx int? :site-name string?))))

(defn save-site-data 
  "Save a user's site data by site name or index" 
  ([]
   (go 
     (let [c (chan)
           _ (screenshot-data-uri c)
           {:keys [site-name] :as all-data} @(all-data)]
       (save-site-data 
         (first @(uid)) 
         {:screenshot (<! c) 
          :data all-data}
         (first site-name)))))

  ([uid data idx-or-site-name]
   (if 
     (int? idx-or-site-name)
     (->
       (js/firebase.database)
       (.ref (str "users/" uid "/sites/" idx-or-site-name))
       (.update (clj->js data)))
     (let [c (chan)
           _ (user-site-index uid idx-or-site-name c)]
       (go
         (->
           (js/firebase.database)
           (.ref (str "users/" uid "/sites/" (<! c)))
           (.update (clj->js data))))))))

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
          c2 (chan)
          _ (user-site-count (first @uid) c)
          _ (screenshot-data-uri c2)
          data (all-data)
          site-name (str (first (:site-name @data)) "-" (u/uid 4)) ]
      (save-site-data 
        (first @uid) 
        {:name (wd/widget-data 1)
         :site-id site-name
         :description (wd/widget-data 1) 
         :screenshot (<! c2)
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

(s/fdef nangpress-data->renderable
        :args (s/cat :nangpess-data ::nangpress-data :current-user (s/? any?)))

(defn nangpress-data->renderable 
  "Raw nnangpress to renderable based on user auth status. Not getting nangpress-data on its own because 
  this requires an async call."  
  ([nangpress-data]
   (nangpress-data->renderable nangpress-data (fb/current-user)))

  ([nangpress-data current-user]
   (-> 
     (assoc nangpress-data :route-widget (if current-user
                                           (-> nangpress-data :admin-route-widgets :userhome)
                                           (-> nangpress-data :admin-route-widgets :homepage)))
     (update-monolith-user-data current-user)
     (dissoc :admin-route-widgets))))

(s/fdef site-meta->renderable
        :args (s/cat :nangpress-data ::nangpress-data :site-meta ::site-with-meta :current-user (s/? any?)))

(defn site-meta->renderable 
  "Primarily for going from userhome to an end user site." 
  [nangpress-data site-meta & current-user]
  (assoc 
    (if current-user
      (apply nangpress-data->renderable nangpress-data current-user)
      (nangpress-data->renderable nangpress-data))
    :route-widget 
    (:route-widget site-meta)))

(s/fdef renderable-site->full-monolith
        :args (s/cat :renderable-stie any? :nangpress-system-data (s/? any?)))

(defn renderable-site->full-monolith
  "Combines a renderable site with system data to form full monolith" 

  ([renderable-site]
   (let [c (chan)]
     (go 
       (fb/firebase-get "nangpress-data/" c)
       (renderable-site->full-monolith renderable-site (<! c)))))

  ([renderable-site nangpress-system-data] 
   (merge nangpress-system-data renderable-site)))

(defn set-bg-img! 
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

(defn set-bg-grey! 
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

    (set-bg-img! bg-img)
    (set-bg-grey! grey-bg?)))

(defn ref-vec-map-delete!
  "Givec a cursor vector, remove an element based on the val of a map in the vector" 
  [vec-ref ikey match-val]
  (om/transact! vec-ref 
                (fn [xs]
                  (vec (remove #(= (ikey %) match-val) xs)))))

(defn ref-vec-insert-second!
  "Transact in the second (idx 1) spot" 
  [ref-vec new-elem]
  (om/transact! 
    ref-vec 
    (fn [xs] 
      (vec (conj (conj (rest xs) new-elem) (first xs))))))

(defn ref-conj!
  "Conj a reference curosr"
  [ref-cur subject]
  (om/transact! ref-cur (fn [x] (conj x subject))))

(defn update-local-style!
 "Update a component's local style." 
  [owner key val]
 (om/update-state! owner :local-style (fn [x] (update x key (fn [_] val)))) )

(defn site-state-decider 
  "Site state is important as it modifies various functions of nangpress." 
  [query-param login-state]
  (let [site? (get query-param "site")]
    (cond 
      site? "site"
      (and (not site?) (empty? login-state)) "splash"
      (and (not site?) login-state) "user")))

(defn update-site-state! 
  "Utility for keeping site state up to date. Should be called on every major change to the monolith." 
  ([]
   (om/update! 
     (all-data) 
     :site-state 
     (site-state-decider (ndom/get-query-params<<) (user-email))))

  ([site-state]
   (om/update! (all-data) :site-state site-state)))

(s/fdef auth-state-load-site! 
        :args (s/cat :root-component fn? :root-node-id string?))

(defn auth-state-load-site!
  "Load site based on the auth state and/or the particular user. Also initializes the root component." 
  [root-component root-node-id]
  (go 
    (let [current-user (-> js/firebase .auth .-currentUser)
          c (chan)
          _ (fb/firebase-get "nangpress-data/" c)
          nangpress-data (<! c)]

      (reset-monolith-atom! 
        (nangpress-data->renderable nangpress-data current-user))
      (update-site-state!)
      (om/root root-component monolith {:target (. js/document (getElementById root-node-id))}))))

