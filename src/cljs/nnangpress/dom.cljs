(ns nnangpress.dom
  (:require 
    [om.core :as om]
    [cemerick.url :as url]))

;(set! *warn-on-infer* true)

(defn ^js/window.HTMLBodyElement get-node-by-id 
  "Get a dom node by id" 
  [id]
  (js/document.getElementById id))

(defn input-listener 
  "Listen to an input event on a contentEditable element" 
  [id cb]
  (-> 
    (get-node-by-id id)
    (.addEventListener "input" cb)))

(defn attach-click-listener-by-id 
  "Attach a click clistener to a node. Returns the callback for removal purposes" 
  [id cb]
  (-> 
    js/document 
    (.getElementById id)
    (.addEventListener "click" cb))
  cb)

(defn remove-listener 
  "Remove a listener" 
  [id cb]
  (-> 
    js/document 
    (.getElementById id)
    ^js/document (.removeEventListener "click" cb)))

(defn set-attr-by-id 
  "Sett attr of a node by its id" 
  [id attr value]
  (-> 
    (get-node-by-id id) 
    (.setAttribute attr value)))

(defn get-query-params<<
  "Get query params from the current url." 
  []
  (:query (url/url (-> js/window .-location .-href))))

(defn content-editable-updater 
  "Update cursor given the id of the corresponding contentEditable node" 
  [id data ikey]
  (input-listener 
    id  
    (fn [x] 
      (om/update! data ikey (-> x .-target .-innerText)))))

(defn left-click? [event-which] (= 1 event-which))

(defn inside-element? 
  "Check if a click event happened within an identified element." 
  [e element-identifier]
  (if 
    (= 1 (-> 
           (js/$ (.-target e)) 
           (.closest element-identifier)
           .-length)) 
    true
    false))

