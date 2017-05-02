(ns nnangpress.app
  "App initializaiton takes place here. ![Diagram](http://i.imgur.com/3lxmHdT.jpg). Everything after the proxy 
  server is handled by the single page application itself.

  To help with this flow, we can identify three main states that the app can be in, splash, user and site. Everytime 
  a site is loaded the global app state should be updated. Some functions such as saving site data and editable text 
  will behave differently based on the state of the site.

  **Splash:** Nangpress homepage 

  **User:** Show the user's sites and other settings, and allow the creation of new sites.

  **Site:** A specific site created with nangpress.

  Foreign libs should all be required here to be added to compiled cljs code.
  "
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [om.core :as om :include-macros true]
    [cljs.core.async :refer [put! chan <! timeout]]
    [cljs.spec.test :as ts :include-macros true]
    [nnangpress.monolith :as mn]
    [nnangpress.testdata :as td]
    [nnangpress.firebase :as fb]
    [nnangpress.dom :as ndom]
    [nnangpress.widgets :as wgt]
    [nnangpress.components.admin :as cadmin]
    [cljsjs.firebase]
    [firebase.ui]
    [html.to.canvas] 
    [accordi.on]
    [rangy.core]
    [rangy.classapplier]
    [un.do]
    [med.ium]
    [tween.lite]
    [cljsjs.jquery]
    [megafolio.plugins]
    [megafolio.pro]
    [royal.slider]))

(enable-console-print!)
;(set! *warn-on-infer* true)

(defn dev-mode-helper<< 
  "Handle development mode query params e.g. turn on intrumentation." 
  []
  (when (= (get (ndom/get-query-params<<) "dev") "true")
    (println "Instrumentation on.")      
    (println (ts/instrument))))

(defn firebase-init 
  "Init and fetch initial data" 
  [c]
  (.initializeApp js/firebase #js {:apiKey "AIzaSyA_LhuzpwrJT0_9aX3bT81dLq9gdDyqAcQ"
                                   :authDomain "nnangpress.firebaseapp.com"
                                   :databaseURL "https://nnangpress.firebaseio.com"
                                   :storageBucket "nnangpress.appspot.com"
                                   :messagingSenderId "660325527122"})
  (fb/firebase-get "nangpress-data" c))

(defn screen-size-watcher []
  (set! 
    (.-onresize js/window) 
    (fn [e]   
      (om/update! (mn/all-data) :screen-size (-> e .-target .-innerWidth)))))

(defn init 
  "Start here. Initialize the app. Run instrumentation if dev query paramater is set to true.
  Create monolith based on user auth state and init om." 
  []
  (let [c (chan)]
    (go 
      (firebase-init c)
      (reset! mn/nangpress-data-cache (<! c))
      (dev-mode-helper<<)
      (mn/ref-cursor-init mn/monolith)
      ;(mn/monolith-watcher-init mn/monolith)
      (mn/auth-state-load-site! cadmin/master "super-container")
      (screen-size-watcher))))

