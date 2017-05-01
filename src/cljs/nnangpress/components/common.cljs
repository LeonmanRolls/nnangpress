(ns nnangpress.components.common
  "Common components."
  (:require 
    [om.core :as om :include-macros true :refer [set-state! update-state!]]
    [om.dom :as dom :include-macros true]
    [nnangpress.monolith :as mn]))


;(set! *warn-on-infer* true)

(defn delete-button 
  "Add a delete button to the component, parent must be position relative. The 'parent' reference cursor vector 
  and details identifying the specific element in that vector that this component is appearing over should be 
  provided. "
  [vec-ref ikey match-val]
  (dom/i #js {:className "fa fa-close fa-2x"
              :style #js {:right "-10px" :top "-10px" :position "absolute" :cursor "pointer" :zIndex "100"}
              :onClick (fn [_] 
                         (mn/ref-vec-map-delete! vec-ref ikey match-val))}))

(defn edit-mode-sense 
  "Display empty div or what you feed me. Intended for componentes that are only meant to be down in edit mode." 
  [owner food]
  (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
    (if 
      (first edit-mode-obs)
      food 
      (dom/div nil ""))))

(defn edit-mode-display 
  [edit-mode]
  (if edit-mode "inherit" "none"))

(def standard-button-style
  "Style for admin toolbar button." 
  {:background "transparent", :color "white", :letterSpacing "1px", :marginRight "5px"})

(defn standard-button
  "Button for admin toolbar. Calls callback when clicked" 
  [cb button-title & extra-style]
  (dom/button #js {:style (clj->js (merge (first extra-style) standard-button-style))
                   :onClick (fn [_] (cb))} 
              button-title))

