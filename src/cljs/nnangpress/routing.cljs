(ns nnangpress.routing
  (:import [goog.history Html5History EventType])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [goog.events :as ev]
            [goog.dom :as gdom]
            [nnangpress.utils :as utls]
            [nnangpress.monolith :as mn]))

(defn get-token []
  (str js/window.location.pathname js/window.location.search))

(defn make-history []
  (doto  (Html5History.)
    (.setPathPrefix  (str js/window.location.protocol
                          "//"
                          js/window.location.host))
    (.setUseFragment false)))

(defn handle-url-change [e])

(defonce history (doto (make-history)
                   (goog.events/listen EventType.NAVIGATE #(handle-url-change %))
                   (.setEnabled true)))

(defn nav! [token routes-map]
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
