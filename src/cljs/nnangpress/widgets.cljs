(ns nnangpress.widgets
  (:require 
    [om.core :as om :include-macros true :refer [set-state! update-state!]]
    [om.dom :as dom :include-macros true]
    [nnangpress.utils :as u]
    [nnangpress.monolith :as mn]
    [nnangpress.core :as cre]
    [nnangpress.routing :as rt]
    [goog.dom :as gdom]))

(defmulti widget-data (fn [x] x))

(defmulti widget (fn [data owner] (:widget-uid data)))

(defmethod widget-data 001 [_]
  {:widget-uid 001
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

;Medium text block
(defmethod widget 001 [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)
       :advertise? false})

    om/IDidMount
    (did-mount [_]
      (let [uuid (.toString (om/get-state owner :uuid))
            advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (when (and (first @edit-mode-obs) (not advertise?))
          (js/Medium. #js {:element (.getElementById js/document uuid)
                           :mode js/Medium.richMode
                           :placeholder "Your Text here"
                           :modifiers #js {:q (fn [event element]
                                                (om/update!
                                                  data
                                                  :inner-html
                                                  [(.-innerHTML (gdom/getElement uuid))]))}}))))

    om/IDidUpdate
    (did-update [_ _ _]
      (let [uuid (.toString (om/get-state owner :uuid))
            advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (when (and (first @edit-mode-obs) (not advertise?))
          (js/Medium. #js {:element (.getElementById js/document uuid)
                           :mode js/Medium.richMode
                           :placeholder "Your Text here"
                           :modifiers #js {:q (fn [event element]
                                                (om/update!
                                                  data
                                                  :inner-html
                                                  [(.-innerHTML (gdom/getElement uuid))]))}}))))

    om/IRenderState
    (render-state [_ {:keys [uuid] :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]

        (dom/div #js {:id (.toString uuid)
                      :style #js {:color "black"}
                      :dangerouslySetInnerHTML #js {:__html (first (:inner-html data))}})))))

(defmethod widget-data 2 [_]
  {:widget-uid 2
   :object-id (u/uid)
   :imgs [{:object-id (u/uid) 
           :url "http://placekitten.com/900/600"} 
          {:object-id (u/uid)
           :url "http://placekitten.com/900/600"}]})

(defmethod widget 002 [{:keys [imgs] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uid (u/uid)
       :advertise? false
       :img-partial (fn [{:keys [url] :as data}] 
                      (str "<img class=\"rsImg\" src=\"" url "\"/>"))
       :default-img (fn []  
                      {:object-id (u/uid)
                       :url "http://placekitten.com/900/600"})
       :slider-init (fn [uid]
                      (->
                        (js/$ (str "#" uid))
                        (.royalSlider #js {:keyboardNavEnabled true :controlNavigation "bullets"
                                           :autoScaleSlider true :autoScaleSliderWidth 14
                                           :autoScaleSliderHeight 9
                                           :slidesSpacing 0
                                           :imageScaleMode "fill"
                                           :fullscreen #js {:enabled true :nativeFS true}})))})

    om/IDidMount
    (did-mount [_]
      (let [uid (om/get-state owner :uid)
            slider-init (om/get-state owner :slider-init)]
        (slider-init uid)))

    om/IDidUpdate 
    (did-update [_ _ _]
      (let [uid (om/get-state owner :uid)
            slider-init (om/get-state owner :slider-init)]
        (slider-init uid)))

    om/IRenderState
    (render-state [_ {:keys [uid img-partial default-img advertise?] :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/div nil 
                 (dom/div #js {:style #js {:color "black"}
                               :dangerouslySetInnerHTML 
                               #js {:__html 
                                    (str 
                                      "<div id=\"" uid "\" class=\"royalSlider rsDefault\">"
                                      (apply str (map img-partial imgs))
                                      "</div>")}})        

                 (when (and (first @edit-mode-obs) (not advertise?))  

                   (dom/div nil 
                            (apply dom/div nil
                                   (om/build-all
                                     (fn [{:keys [url object-id] :as data} owner]
                                       (reify
                                         om/IRender
                                         (render [_]
                                           (dom/div nil 
                                                    (cre/simple-input-cursor (:url data) data :url)     
                                                    (dom/button 
                                                      #js {:onClick (fn [_]
                                                                      (om/transact! 
                                                                        imgs
                                                                        (fn [x]
                                                                          (vec 
                                                                            (remove
                                                                              #(= 
                                                                                 (:object-id %)
                                                                                 object-id) x)))))}
                                                      "Delete")))))
                                     imgs))

                            (dom/button #js {:onClick (fn [_]
                                                        (om/transact!
                                                          imgs
                                                          (fn [x] (conj x (default-img)))))}
                                        "Add an image"))))))))

(defmethod widget-data 003 [_]
  {:widget-uid 003
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

;Boxed medium text
(defmethod widget 003 [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)
       :advertise? false})

    om/IDidMount
    (did-mount [_]
      (let [uuid (.toString (om/get-state owner :uuid))
            advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (when (and (first @edit-mode-obs) (not advertise?))
          (js/Medium. #js {:element (.getElementById js/document uuid)
                           :mode js/Medium.richMode
                           :placeholder "Your Text here"
                           :modifiers #js {:q (fn [event element]
                                                (om/update!
                                                  data
                                                  :inner-html
                                                  [(.-innerHTML (gdom/getElement uuid))]))}}))))

    om/IDidUpdate
    (did-update [_ _ _]
      (let [uuid (.toString (om/get-state owner :uuid))
            advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (when (and (first @edit-mode-obs) (not advertise?)) 
          (js/Medium. #js {:element (.getElementById js/document uuid)
                           :mode js/Medium.richMode
                           :placeholder "Your Text here"
                           :modifiers #js {:q (fn [event element]
                                                (om/update!
                                                  data
                                                  :inner-html
                                                  [(.-innerHTML (gdom/getElement uuid))]))}}))))

    om/IRenderState
    (render-state [_ {:keys [uuid] :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]

        (dom/div #js {:id (.toString uuid)
                      :className "box-paragraph"
                      :dangerouslySetInnerHTML #js {:__html (first (:inner-html data))}})))))

(defmethod widget-data 004 [_]
  {:widget-uid 004
   :object-id (u/uid)
   :widget-name "Accordion"
   :text [{:title {:widget-uid 001
                   :widget-name "Standard text widget"
                   :inner-html ["<p> Hi there </p>"]}
           :sub {:widget-uid 001
                 :widget-name "Standard text widget"
                 :inner-html ["<p> Hi there </p>"]}}]})

;Accordion
(defmethod widget 004 [{:keys [text] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [uuid (str "a" (subs (.toString (random-uuid)) 0 5))]
        {:uuid uuid
         :advertise? false
         :accordion-sub
         (fn [{:keys [title sub] :as data} owner]
           (reify
             om/IRender
             (render [_]
               (dom/div nil
                        (dom/dt nil
                                (dom/a #js {:href "#accordion1"
                                            :aria-expanded "false"
                                            :aria-controls "accordion1"
                                            :className (str uuid " accordion-title accordionTitle js-accordionTrigger")}
                                       (om/build widget title)))
                        (dom/dd #js {:className "accordion-content accordionItem is-collapsed"
                                     :id "accordion1"
                                     :aria-hidden "true"}
                                (om/build widget sub))))))}))

    om/IDidUpdate
    (did-update  [this prev-props prev-state]
      (js/accordion (str "." (:uuid (om/get-state owner)))))

    om/IDidMount
    (did-mount [_]
      (js/accordion (str "." (:uuid (om/get-state owner)))))

    om/IRenderState
    (render-state [_ {:keys [accordion-sub] :as state}]
      (let [advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/div nil
                 (dom/div #js {:className "accordion"}
                          (apply dom/dl nil (om/build-all accordion-sub text)))

                 (when (and (first @edit-mode-obs) (not advertise?))
                   (dom/div nil 
                            (dom/button
                              #js{:onClick (fn [_] (om/transact!
                                                     text
                                                     (fn [text]
                                                       (conj text {:title (widget-data 001)
                                                                   :sub (widget-data 001)}))))}
                              "Add Section")
                            (om/build cre/remove-element text 
                                      {:state {:label "remove accordion section"}}))))))))

(defmethod widget-data 005 [_]
  {:widget-uid 005
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

;Clear box red border
(defmethod widget 005 [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)
       :active? false})

    om/IDidMount
    (did-mount [_]
      (let [uuid (.toString (om/get-state owner :uuid)) 
            advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (when (and (first @edit-mode-obs) (not advertise?))
          (js/Medium. #js {:element (.getElementById js/document uuid)
                           :mode js/Medium.richMode
                           :placeholder "Your Text here"
                           :modifiers #js {:q (fn [event element]
                                                (om/update!
                                                  data
                                                  :inner-html
                                                  [(.-innerHTML (gdom/getElement uuid))]))}}))))

    om/IDidUpdate 
    (did-update [_ _ _]
      (let [uuid (.toString (om/get-state owner :uuid)) 
            advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (when (and (first @edit-mode-obs) (not advertise?))
          (js/Medium. #js {:element (.getElementById js/document uuid)
                           :mode js/Medium.richMode
                           :placeholder "Your Text here"
                           :modifiers #js {:q (fn [event element]
                                                (om/update!
                                                  data
                                                  :inner-html
                                                  [(.-innerHTML (gdom/getElement uuid))]))}}))))

    om/IRenderState
    (render-state [_ {:keys [uuid] :as state}]
      (dom/div #js {:id (.toString uuid)
                    :className "box-paragraph-clear"
                    :dangerouslySetInnerHTML #js {:__html (first (:inner-html data))}}))))

(defmethod widget-data 006 [_]
  {:widget-uid 006
   :object-id (u/uid)
   :widget-name "Standard image widget"
   :img "http://solariarchitects.com/img/leaderboards/group_photo_everyday_zoomed.jpg"})

;Simple Image
(defmethod widget 006 [{:keys [img] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)
       :advertise? false})

    om/IRenderState
    (render-state [_ {:keys [uuid] :as state}]
      (let [advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (dom/div nil
                 (dom/img #js {:style #js {:width "100%"}
                               :src img})
                 (when (and (first @edit-mode-obs) (not advertise?)) 
                   (dom/input #js {:value img
                                   :style #js {:width "100%"}
                                   :onChange (fn [e]
                                               (om/update! data :img (.. e -target -value)))})))))))

(defmethod widget-data 007 [_]
  {:widget-uid 007
   :object-id (u/uid)
   :widget-name "Grid"
   :imgs [{:id "entry-1"
           :className "mega-entry"
           :data-src "http://solariarchitects.com/img/teampics/jsolari_everyday.jpg"
           :data-width "320"
           :data-height "400"}
          {:id "entry-1-1"
           :className "mega-entry"
           :title "WE HAVE A LAUGH"
           :text "Cue James in a bald cap, need I say more?"
           :data-width "320"
           :data-height "400"}]})

(defmethod widget 007 [{:keys [imgs] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [uuid (.toString (random-uuid))]
        {:uuid uuid
         :advertise? false
         :default-img (fn []
                        {:id (.toString (random-uuid))
                         :className "mega-entry"
                         :data-src "http://solariarchitects.com/img/lyall/lyall-00.jpg"
                         :data-width "320"
                         :data-height "400"})

         :default-text (fn []
                         {:id (.toString (random-uuid))
                          :className "mega-entry"
                          :title "WE HAVE A LAUGH"
                          :text "Cue James in a bald cap, need I say more?"
                          :data-width "320"
                          :data-height "400"})

         :widget-img (fn [{:keys [id link className data-src data-width data-height title subtitle]
                           :as data}]
                       (str
                         "<div"
                         " id=\"" id "\""
                         " class=\"" className  " norounded\""
                         " data-src=\"" data-src  "\""
                         " data-width=\"" data-width  "\""
                         " data-height=\"" data-height  "\""
                         ">"
                         "<div id=\"" link "--" id "\" class=\"mega-hover\""
                         ">"
                         "<div class=\"mega-hovertitle\">"
                         title
                         "<div class=\"mega-hoversubtitle\">"
                         subtitle
                         "</div>"
                         "</div>"
                         "</div>"
                         "</div>"))

         :widget-text (fn [{:keys [id className data-width data-height title text] :as data}]
                        (str
                          "<div"
                          " id=\"" id "\""
                          " class=\"gallery-text " className "\""
                          " data-width=\"" data-width  "\""
                          " data-height=\"" data-height  "\""
                          ">"
                          "<b>"
                          title
                          "</b>"
                          "<p>"
                          text
                          "</p>"
                          "<div class=\"see-all-button\">...see all</div>"
                          "</div>"))

         :text-or-img (fn [widget-img widget-text data]
                        (if (contains? data :text)
                          (widget-text data)
                          (widget-img data)))
         
         :edit-fn (fn [data owner]
                                  (reify
                                    om/IRender
                                    (render [_]
                                      (if (contains? data :text)
                                        (dom/div nil
                                                 (cre/simple-input-cursor (:title data) data :title)
                                                 (cre/simple-input-cursor (:text data) data :text))
                                        (cre/simple-input-cursor (:data-src data) data :data-src)))))}))

    om/IDidUpdate
    (did-update  [this prev-props prev-state]
      (->
        (js/$ ".megafolio-container")
        (.megafoliopro #js {})))

    om/IDidMount
    (did-mount [_]
      (let [uuid (om/get-state owner :uuid)
            routes-map-obs (om/observe owner (mn/routes-map))]
        (->
          (js/$ ".megafolio-container")
          (.click (fn [event]
                    (rt/js-link
                      @routes-map-obs
                      (first (clojure.string/split (-> event .-target .-id) #"--"))
                      event))))
        (->
          (js/$ ".megafolio-container")
          (.megafoliopro #js {}))))

    om/IRenderState
    (render-state [_ {:keys [edit-fn widget-img widget-text text-or-img default-img default-text advertise?]
                      :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/div nil
                 (dom/div #js {:className "container"}
                          (dom/div #js {:className "megafolio-container"
                                        :dangerouslySetInnerHTML
                                        #js {:__html (apply str (map
                                                                  (partial
                                                                    text-or-img
                                                                    widget-img
                                                                    widget-text)
                                                                  imgs))}}))

                 (when (and (first @edit-mode-obs) (not advertise?))

                   (dom/div nil 
                            (apply 
                              dom/div nil
                              (om/build-all edit-fn imgs))

                            (dom/button #js {:onClick (fn [_]
                                                        (om/transact!
                                                          imgs
                                                          (fn [x] (conj x (default-img)))))}
                                        "Add an image")

                            (dom/button #js {:onClick (fn [_]
                                                        (om/transact!
                                                          imgs
                                                          (fn [x] (conj x (default-text)))))}
                                        "Add text")

                            (om/build cre/remove-element imgs 
                                      {:state {:label "remove nth element"}}))))))))

(defmethod widget-data 8 [_]
  {:widget-uid 8
   :object-id (u/uid)
   :widget-name "Right Nav"
   :imgs []})

;Small right nav 
(defmethod widget 8 [{:keys [lis] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)
       :li (fn [{:keys [route label active?] :as data} owner]
             (reify
               om/IRenderState
               (render-state [_ {:keys [routes-map] :as state}]
                 (dom/li #js {:className "right-nav-li"
                              :onClick (partial rt/js-link routes-map route) }
                         (dom/div #js {:className (when active? "active-text")}
                                  label)))))})

    om/IRenderState
    (render-state [_ {:keys [uuid li] :as state}]
      (let [routes-map-obs (om/observe owner (mn/routes-map))]
        (apply dom/ul #js {:className "right-nav"}
               (om/build-all li lis {:state {:routes-map routes-map-obs}}))))))

(defn admin-toolbar [data owner]
  (reify 
    om/IRender
    (render [_]
      (let []
        (dom/div #js{:className "admin-toolbar"} 
                 (dom/b nil "Welcome to Nnangpress alpha ")
                 (dom/button #js {:onClick (fn [_] 
                                             (om/transact! 
                                               (mn/edit-mode) 
                                               (fn [dabool]
                                                 [(not (first dabool))] )))}
                             "Toogle edit mode"))))))

(defn select-widget-wrapper [{:keys [widget-name] :as data} owner]
  (reify 
    om/IRenderState 
    (render-state [_ {:keys [cursor] :as state}]
      (dom/div #js {:className "selectWidget"} 
               widget-name 
               (dom/button #js {:onClick (fn [_] (om/transact! 
                                                   cursor 
                                                   (fn [x] (conj x data))))} "Add widget")
               (om/build widget data {:init-state {:advertise? true}})))))

(defn all-widget-wrapper [{:keys [object-id] :as data} owner]
  (reify 
    om/IRenderState 
    (render-state [_ {:keys [current-widgets] :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/div nil 
                 #_(when (first @edit-mode-obs)
                   #_(dom/button #js{:onClick (fn [_] 
                                              (om/transact! 
                                                current-widgets 
                                                (fn [x]
                                                  (vec
                                                    (remove #(= (:object-id %) object-id) x)))))} 
                               "Delete"))
                 (om/build widget data))))))

