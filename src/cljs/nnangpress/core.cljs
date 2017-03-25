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

(defn simple-input-comp! 
  "Implemented as a full component to avoid issues with the input text box." 
  [cursor owner]
  (reify 
    om/IInitState
    (init-state [_]
      {:text ""})

    om/IWillMount 
    (will-mount [_]
      (let [{:keys [k]} (om/get-state owner)]
        (om/set-state! owner :text (k cursor))))

    om/IDidUpdate
    (did-update [_ _ _]
      (let [input (om/get-node owner "input")]
        (.focus input)))

    om/IRenderState 
    (render-state [_ {:keys [k text]}] 
      (dom/input #js {:type "text"
                      :ref "input"
                      :value text 
                      :style #js {:width "50%"}
                      :onChange (fn [e]
                                  (do 
                                    (om/update! cursor k (.. e -target -value))
                                    (om/set-state! owner :text (.. e -target -value))))}))))

