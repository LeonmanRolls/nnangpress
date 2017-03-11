(ns nnangpress.firebase
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [clojure.walk :as wlk]
    [cljs.core.async :refer [put! chan <!]]))

(defn sign-in-ui-config-gen 
  "Configuration for firebase login flow. Callback will have access to user data."
  [cb]
  #js {:callbacks
       #js {:signInSuccess (fn [user credential redirectUrl]
                             (println "sucessful sign in")
                             (.dir js/console user)
                             (cb user)
                             false)}
       :signInFlow "popup"
       :signInOptions (array
                        #js {:provider
                             js/firebase.auth.EmailAuthProvider.PROVIDER_ID})
       :tosUrl "https://google.com"
       :credentialHelper js/firebaseui.auth.CredentialHelper.NONE})

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
             (put! out (firebase-empty->clj-empty
                         (js->clj (.val snapshot) :keywordize-keys true)))))))

(defn current-user 
  "Get info on the current user" 
  []
  (-> js/firebase .auth .-currentUser))

(defn firebase-signout 
  "Sign out current user and execute callback." 
  [cb]
  (-> 
    js/firebase
    (.auth)
    (.signOut)
    (.then (fn [_] (println "User signed out.") (cb)))))

(defn fb-initiate-auth
  "Initiate firebase auth dialog." 
  [firebase-root-id cb]
  (.start
    (js/firebaseui.auth.AuthUI. (js/firebase.auth))
    (str "#" firebase-root-id)
    (sign-in-ui-config-gen cb)))

(defn fb-delete
  "Delete data at path. Use with care! Check for at least two /s to prevent deleting something at the root level." 
  [path]
  {:pre [(< 2 (count (clojure.string/split path #"/")))]}
  (->
    (js/firebase.database)
    (.ref path)
    (.remove)))

(defn fb-write 
  "Wite data to firebase path"
  [path data]
  (->
    (js/firebase.database)
    (.ref path)
    (.set (clj->js data))))

(defn fb-update 
  "Update certain items at path without overwriting nodes that aren't referenced."
  [path data]
  (->
    (js/firebase.database)
    (.ref path)
    (.update (clj->js data))))

(defn fb-copy 
  "Copy data from one path to another"
  [source dest]
  (let [c (chan)]
    (go 
      (firebase-get source c)
      (fb-write dest (<! c)))))

(defn fb-copy-update 
  "For when you don't want to overwirte the destination's data"
  [source dest]
  (let [c (chan)]
    (go 
      (firebase-get source c)
      (fb-update dest (<! c)))))

(defn fb-move
  "Copy data from one path to another and delete data at original place."
  [source dest]
  (go 
    (<! fb-copy)
    (fb-delete source)))

(comment 

  (go 
    (let [c (chan)]
      (firebase-get "/nangpress-data" c)  
      (println (<! c))))

  (fb-copy
    "/users/eKWcekJm6GMc4klsRG7CNvteCQN2/sites/1/data/route-widget/logo-data" 
    "/nangpress-data/all-navs-data/1/logo-data")

  (fb-write 
    "/nangpress-data/all-navs-data/1/routes-map/children/0/route-name-editable" 
    (nnangpress.widgetdata/widget-data 16))

  )

