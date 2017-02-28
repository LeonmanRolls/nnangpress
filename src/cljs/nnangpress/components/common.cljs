(ns nnangpress.components.common
  (:require 
    [om.core :as om :include-macros true :refer [set-state! update-state!]]
    [om.dom :as dom :include-macros true]
    [nnangpress.monolith :as mn]))

(defn delete-button 
  "Add a delete button to the component, parent must be position relative. The 'parent' reference cursor vector 
  and details identifying the specific element in that vector that this component is appearing over should be 
  provided. "
  [vec-ref ikey match-val]
  (dom/img #js {:style #js {:width "20px" :right "-10px" :top "-10px" 
                            :position "absolute"}
                :src "http://www.stabilita.sk/media/image/cross-icon.png"
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

