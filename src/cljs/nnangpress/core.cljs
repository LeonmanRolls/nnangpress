(ns nnangpress.core
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [nnangpress.monolith :as mn]
            [nnangpress.utils :as u]))

(defn remove-element
  "Requires label to be passed in as state"
  [data owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [label] :as state}]
      (let [ref-id (u/uid)]
        (println "remove-element: " data)
        (dom/div #js {:style #js {:marginTop "20px"}
                      :className "edit"}
                 (str label ": ")
                 (dom/input #js {:ref ref-id})
                 (dom/button
                   #js {:onClick (fn [_]
                                   (let [widget-pos (js/parseInt
                                                      (.-value
                                                        (om/get-node owner ref-id)))]
                                     (om/transact! data (fn [x]
                                                          (u/vec-remove x widget-pos)))))}
                   "Submit"))))))

(defn simple-input-cursor! [value cursor korks]
  (dom/input #js {:value value
                  :style #js {:width "100%"}
                  :onChange (fn [e]
                              (om/update! cursor korks (.. e -target -value)))}))

