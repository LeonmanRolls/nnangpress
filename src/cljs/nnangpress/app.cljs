(ns nnangpress.app
  "App initializaiton takes place here."
  (:require 
    [cljs.spec.test :as ts :include-macros true]
    [nnangpress.monolith :as mn]
    [nnangpress.dom :as ndom]
    [nnangpress.widgets :as wgt]
    [nnangpress.components.admin :as cadmin]))

(enable-console-print!)

(defn dev-mode-helper<< 
  "Handle development mode query params e.g. turn on intrumentation." 
  []
  (when (= (get (ndom/get-query-params<<) "dev") "true")
    (println "Instrumentation on.")      
    (println (ts/instrument))))

(defn init 
  "Start here. Initialize the app. Run instrumentation if dev query paramater is set to true.
  Create monolith based on user auth state and init om." 
  []
  (let []
    (dev-mode-helper<<)
    (mn/ref-cursor-init mn/monolith)
    (mn/auth-state-load-site! cadmin/master "super-container")))

