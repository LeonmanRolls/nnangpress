(ns nnangpress.routing
  "Routing for a single page application. The bridge between the route in the browser bar and the application's 
  route state."
  (:import [goog.history Html5History EventType])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [goog.events :as ev]
            [goog.dom :as gdom]
            [nnangpress.utils :as utls]
            [nnangpress.monolith :as mn]))

;(set! *warn-on-infer* true)

(defn get-token []
  (str js/window.location.pathname js/window.location.search))

(defn make-history []
  (doto  (Html5History.)
    (.setPathPrefix  (str js/window.location.protocol
                          "//"
                          js/window.location.host))
    (.setUseFragment false)))

;This is probably why state is not responsing to url change anymore
(defn handle-url-change [e])

(defonce history (doto (make-history)
                   (goog.events/listen EventType.NAVIGATE #(handle-url-change %))
                   (.setEnabled true)))

(defn nav! 
  "Extracts all possible paths from the routes-map, and then sees which one ends with the given token. This is the 
  currently active route and the html5 history is then updated accordingly. Is done this way because the routes-map 
  could change at any time so we always need to check it when changing navigation location." 
  [token routes-map]
  (let [paths (utls/tree-seq-path
                #(contains? % :children)
                #(:children %)
                routes-map
                #(:route-name %))
        active-path  (first (filter (fn [x] (= (last x) token)) paths))
        new-path (if
                   (= 1 (count active-path))
                   "/"
                   (->>
                     active-path
                     (drop 1)
                     clojure.string/join))]

    (when (not (empty? new-path))
      (om/update! (mn/current-route) [new-path]))
    (.setToken history new-path)))

(defn js-link [routes-map route-name e]
  (do
    (.preventDefault e)
    (nav! route-name routes-map)))

