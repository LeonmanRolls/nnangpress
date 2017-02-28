(ns nnangpress.app
  "App initializaiton takes place here."
  (:import [goog.history Html5History EventType])
  (:require-macros [cljs.core.async.macros :refer  [go go-loop]])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.monolith :as mn]
            [nnangpress.navbars :as nv]
            [nnangpress.widgets :as wgt]
            [nnangpress.core :as cre]
            [nnangpress.utils :as u]
            [nnangpress.routing :as rt]
            [nnangpress.firebase :as fb]
            [cljs.reader :as rdr]
            [goog.events :as ev]
            [goog.dom :as gdom]
            [ajax.core :refer [GET POST]]
            [cljs.spec :as s :include-macros true]
            [cljs.spec.test :as ts :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

(defn dev-mode-helper<< 
  "Handle development mode query params e.g. turn on intrumentation." 
  []
  (when (= (get (wgt/get-query-params<<) "dev") "true")
    (println "Instrumentation on.")      
    (println (ts/instrument))))

(defn init 
  "Start here. Initialize the app. Run instrumentation if dev query paramater is set to true.
  Create monolith based on user auth state and init om." 
  []
  (let []
    (dev-mode-helper<<)
    (mn/ref-cursor-init mn/monolith)
    (mn/auth-state-load-site! wgt/master "super-container")))

