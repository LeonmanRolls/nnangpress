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

(declare update-site-state! site-state-decider site-transition)

;#Primitives

(s/def ::all-widgets-data vector?)
(s/def ::current-route vector?)
(s/def ::edit-mode vector?)
(s/def ::logo-text ::wd/widget-data-1)
(s/def ::logo-style map?)
(s/def ::admin-route-widgets map?)
(s/def ::admin-sites map?)
(s/def ::email (s/or :non-cursor vector? :cursor ::spcs/indexed-cursor))
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
(s/def ::site-id-vec vector?)
(s/def ::screenshot string?)

;#Compounds

(s/def ::logo-data (s/keys :req-un [::logo-text ::logo-style]))

;Unfortunately simple name. Data for a renderable site. Should be merged with system data to make a fully renderable 
;data structure.
(s/def ::data (s/keys :req-un [::email ::logo-text ::route-widget ::site-name ::site-state ::uid]))

(s/def ::all-data (s/keys :req-un [::all-widgets-data ::uid ::current-route ::edit-mode ::logo-text ::route-widget]))

(s/def ::site-data (s/keys :req-un [::all-widgets-data ::uid ::site-name ::current-route ::edit-mode ::logo-text
                                    ::route-widget]))

;For the sake of not overcomplicating initializing reference cursors, nangpress-data should be renderable and have 
;the shape that reference cursor initialization requires
(s/def ::nangpress-data (s/keys :req-un [::admin-sites ::all-navs-data ::all-widgets-data ::current-route 
                                         ::edit-mode ::sidebar-data ::site-name ::site-state ::uid]))

;Primarily for displaying site on a user's homepage
(s/def ::site-with-meta (s/keys :req-un [::site-id ::screenshot ::name ::description ::route-widget]))

(s/def ::children (s/cat :route-map (s/* ::route-map)))

(s/def ::route-map (s/keys :req-un [::bg-img ::grey-bg? ::nav-hint ::nav-hint-style ::route-name ::widgets 
                                    ::route-name-editable ::children]))

(s/def ::routes-map ::route-map)

;Primarily used by navbars to handle routing and render the navbar itself
(s/def ::route-widget (s/keys :req-un [::logo-data ::main-view-style ::nav-style ::route-widget-id ::routes-map]))

;Minimum data required for a site to render
(s/def ::renderable (s/keys :req-un [::route-widget ::all-navs-data ::sidebar-data ::site-name ::uid ::email ::edit-mode
                                     ::all-widgets-data ::current-route ::site-id-vec ::site-state]))

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
               :logo-text (wd/widget-data 1)}
   :main-view-style {:style {:dispaly "inherit"
                             :paddingLeft "170px"
                             :paddingRight "170px"}} 
   :nav-style {:backgroundColor "#CE4072"}
   :route-widget-id 0
   :routes-map {:bg-img "http://i.imgur.com/vRVh0IX.jpg"
                :children [{:bg-img "http://i.imgur.com/vRVh0IX.jpg"
                            :children [{:bg-img "http://i.imgur.com/vRVh0IX.jpg"
                                        :children []
                                        :grey-bg? true
                                        :nav-hint ["Architects"]
                                        :nav-hint-style {:color "black"}
                                        :route-name "/child-ola-ola"
                                        :route-name-editable (wd/widget-data 16)
                                        :widgets []}]
                            :grey-bg? true
                            :nav-hint ["Architects"]
                            :nav-hint-style {:color "black"}
                            :route-name "/parent-ola-ola"
                            :route-name-editable (wd/widget-data 16)
                            :widgets []}]
                :grey-bg? true
                :nav-hint ["Architects"] 
                :nav-hint-style {:color "black"}
                :route-name "/"
                :route-name-editable (wd/widget-data 16)
                :widgets [(wd/widget-data 15)]}})

(defn new-site-template
  []
  "Data for displaying on the userhome screen and rendering fully."
  {:name (wd/widget-data 1)
   :description (wd/widget-data 1)
   :site-id (u/uid)
   :screenshot "http://i.imgur.com/ZV4TMBp.png" 
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
                 (prn "-- Site id vec --")
                 (prn (:site-id-vec new-state))
                 (prn "-- Site state --")
                 (prn (:site-state new-state))
                 ))))

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

(s/fdef current-widgets 
        :args (s/cat :route any? :rotues-map any?))

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
  (om/update! (all-data) data))

(defn add-current-user-email 
  "Add current user email to data map" 
  [data]
  (assoc data :email (user-email)))

(defn add-current-uid 
  "Add current user email to data map" 
  [data]
  (assoc data :uid @(uid)))

(s/fdef set-site-state 
        :args (s/cat :renderable ::renderable :state string?))

(defn set-site-state 
  "" 
  [renderable state]
  (assoc renderable :site-state state))

(s/fdef change-site 
        :args (s/cat :data ::renderable))

;Implement site state changes in an atom watcher
(defn change-site 
  "Load a new user site. A change in a site should always result in a change in the site-id-vec." 
  [site-data]
  (go 
    (-> 
      site-data 
      add-current-user-email 
      add-current-uid
      (set-site-state (site-state-decider 
                        (<! (fb/site-owner? (first (:uid @(all-data))) (first (:site-id-vec @(all-data)))))))
      update-all) 
    )
  )

(defn toggle-edit-mode 
  "Toggle edit mode" 
  []
  (om/transact! (edit-mode) (fn [dabool] [(not (first dabool))])))

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
  (fb/firebase-get (str "users/" uid "/sites") chan))

(s/fdef user-site-index 
  :args (s/cat :uid ::authed-uid-raw :site-name string?)
  :ret ::channel)

(defn user-site-index 
  "Get the index of a user's site" 
  [uid site-id] 
  (let [c (chan)]
    (go 
      (get-user-sites uid c) 
      (u/index-of-key-val (<! c) :site-id site-id))))

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
                                   :data (s/or :new-site ::site-with-meta :update-site (s/keys :req-un [::screenshot ::route-widget])) 
                                   :idx-or-name (s/or :idx int? :site-name string?))))

(defn save-site-data 
  "Save a user's site data by site name or index. Saves to site meta only updating route-map and screenshot." 
  ([]
   (go 
     (let [c (chan)
           _ (screenshot-data-uri c)
           {:keys [site-name site-id-vec route-widget] :as all-data} @(all-data)]
       (save-site-data 
         (first @(uid)) 
         {:screenshot (<! c) 
          :route-widget route-widget}
         (first site-id-vec)))))

  ([uid data idx-or-site-name]
   (go 
     (if 
       (int? idx-or-site-name)
       (fb/fb-update (str "users/" uid "/sites/" idx-or-site-name) data)
       (fb/fb-update (str "users/" uid "/sites/" (<! (user-site-index uid idx-or-site-name))) data)))))

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
          {:keys [site-id route-widget]} @(all-data)]
      (save-site-data 
        (first @uid) 
        (assoc 
          (new-site-template) 
          :route-widget route-widget
          :screenshot (<! c2))
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
                                           (-> nangpress-data :admin-sites :userhome :route-widget)
                                           (-> nangpress-data :admin-sites :homepage :route-widget)))
     (update-monolith-user-data current-user)
     (dissoc :admin-route-widgets)
     (dissoc :admin-sites))))

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
    (:route-widget site-meta)
    :site-id-vec [(:site-id site-meta)]))

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

(s/fdef set-bg-img!
        :args (s/cat :bg-img string?))

(defn set-bg-img! 
  "Set background colour or image." 
  [bg-img]
  (cond
    (u/string-contains? bg-img "#") (do
                                      (set! (-> js/document .-body .-background) "")
                                      (set!
                                        (-> js/document .-body .-style .-backgroundColor)
                                        bg-img))

    (u/string-contains? bg-img "linear") (set! (-> js/document .-body .-background) bg-img)

    :file (set!
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
        {:keys [bg-img grey-bg?]} (current-route-map (clojure.string/split (first @current-route) #"/") @routes-map)]

    (when bg-img
      (set-bg-img! bg-img)
      (set-bg-grey! grey-bg?))))

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
  (om/update-state! owner :local-style (fn [x] (update x key (fn [_] val)))))

(defn live-site? 
  "While waiting for proper system for dealing with user's sites, DNS etc. Live site refers to the state where the site 
  is being viewed under a custom domain name, not just the onwer browsing to it from their userhome." 
  []
  (u/string-contains? (-> js/window .-location .-href) "leontalbert"))

(defn site-state-decider 
  "Site state is important as it modifies various functions of nangpress.
  user: If a user is logged in and they are at nangpress.com, show the page that displays their sites.
  splash: If it's not a site and the user is not logged in, show the nangpress homepage.
  site: An actual site built with nangpress.
  site-stranger: Site where the user is not logged in.
  site-owner: Site where the user is logged in and is the owner of the site.
  site-visitor: Site where the user is logged in but is not the owner of the site." 
  [site-owner?]
  (let [site? (live-site?)
        login-state (not (empty? (first (user-email))))]
    (cond 
      (and (not login-state)) "site-stranger"
      (and login-state site-owner?) "site-owner"
      (and login-state (not site-owner?)) "site-visitor"
      (and (not login-state)) "splash"
      (and login-state) "user")))

(defn update-site-state! 
  "Utility for keeping site state up to date. Should be called on every major change to the monolith." 
  ([]
   (go 
     (om/update! 
       (all-data) 
       :site-state 
       (site-state-decider (<! (fb/site-owner? 
                                 (first (:uid @(all-data))) 
                                 (first (:site-id-vec @(all-data)))))))))

  ([site-state]
   (om/update! (all-data) :site-state site-state)))

(s/fdef auth-state-load-site! 
        :args (s/cat :root-component fn? :root-node-id string?))

(defn auth-state-load-site!
  "Load site based on the auth state and/or the particular user. Also initializes the root component. 
  Portfolio site is being hardcoded for now until the system for dealing with DNS is implemented." 
  [root-component root-node-id]
  (go 
    (cond 
      (live-site?)
      (let [c (chan)
            _ (fb/firebase-get "users/eKWcekJm6GMc4klsRG7CNvteCQN2/sites/3" c)]
        (<! (site-transition (<! c))))
      :else 
      (site-transition @nangpress-data-cache cb))

    (om/root root-component monolith {:target (. js/document (getElementById root-node-id))})
    (.addClass (js/$ "body") "loaded")))

(s/fdef update-sites!!
        :args (s/cat :user-sites (s/coll-of ::site-with-meta) :uid any?))

(defn update-sites!! 
  "Takes all of the user's sites and tucks them away safely. Pre condition to somewhat protect user's data." 
  [user-sites uid]
  {:pre [(s/valid? (s/coll-of ::site-with-meta) user-sites)]}
  (fb/fb-write 
    (str "users/" uid  "/sites")
    user-sites))

(defn toggle-menu 
  "" 
  []
  (om/transact! (sidebar-data) :sidebar-visible u/toggle))

;All site transitions, that is a change of state that would warrant the change of the 'site-id-vec' monolith 
;paramter, should go through here.
(defmulti site-transition (fn [x]
                            (cond 
                              (contains? x :admin-sites) "nangpress-admin"
                              :else :default)))

;For initial render before we have cursors going.
(defmethod site-transition "nangpress-admin"
  [nangpress-data]
  (let [current-user (fb/current-user)]
    (reset-monolith-atom! 
      (-> 
        (assoc nangpress-data :route-widget (if current-user 
                                              (-> nangpress-data :admin-sites :userhome :route-widget)
                                              (-> nangpress-data :admin-sites :homepage :route-widget)))
        (assoc :site-id-vec (if current-user ["userhome"] ["homepage"]))
        (assoc :site-state (if current-user "user" "splash"))
        (dissoc :admin-route-widgets)
        (dissoc :admin-sites)
        (update-monolith-user-data current-user)))))

;For live sites
(defmethod site-transition :default  
  [x]
  (go 
    (let [current-user (fb/current-user)
          site-owner? (if current-user (<! (fb/site-owner? (.-uid current-user) (:site-id x))) false)]
      (reset-monolith-atom! 
        (-> 
          (assoc @nangpress-data-cache :route-widget (:route-widget x))
          (assoc :site-id-vec [(:site-id x)])
          (assoc :site-state (cond 
                               site-owner? "site-owner" 
                               current-user "site-visitor"
                               :else "site-stranger"))
          (update-monolith-user-data current-user))))))

