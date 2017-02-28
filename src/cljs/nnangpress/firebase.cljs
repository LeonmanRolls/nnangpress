(ns nnangpress.firebase
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [clojure.walk :as wlk]
    [cljs.core.async :refer [put! chan <!]]))

(defn load-user-home-site 
  "" 
  [])

(defn sign-in-ui-config-gen 
  "Configuration for firebase login flow. Callback will have access to user data."
  [cb]
  #js {:callbacks
       #js {:signInSuccess (fn [user credential redirectUrl]
                             (println "sucessful sign in")
                             (.dir js/console user)
                             (cb user)
                             #_(->
                               (js/firebase.database)
                               (.ref (str "users/" (.-uid user)))
                               (.once "value")
                               (.then (fn [snapshot]
                                        #_(om/update! all-data (rdr/read-string (.-data (.val snapshot)))))))
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
             (put! 
               out 
               (firebase-empty->clj-empty
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

