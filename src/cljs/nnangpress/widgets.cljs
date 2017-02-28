(ns nnangpress.widgets
  "Widgets are the main 'unit' of display in nnangpress. Widgets can be added and deleted by the user. A widget 
  comprises a react component and its supporting data. These are both implemented as multimethods. So if the user 
  selects a new widget, the widget's id is passed to a multimethod that returns the data for that widget. When a 
  widget is rendered, the multimethod returns the corresponding react component."
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [om.core :as om :include-macros true :refer [set-state! update-state!]]
    [om.dom :as dom :include-macros true]
    [cljs.reader :as rdr]
    [nnangpress.utils :as u]
    [nnangpress.monolith :as mn]
    [nnangpress.core :as cre]
    [nnangpress.routing :as rt]
    [nnangpress.firebase :as fb]
    [nnangpress.dom :as ndom]
    [nnangpress.components.common :as cc]
    [goog.dom :as gdom]
    [cljs.core.async :refer [put! chan <!]]
    [cljs.spec :as s]
    [clojure.set :as st]))

(declare widget-data-type master admin-sidebar main-view)

(s/def ::widget-uid int?)
(s/def ::object-id string?)
(s/def ::widget-name string?)
(s/def ::inner-html vector?)
(s/def ::imgs vector?)
(s/def ::text vector?)
(s/def ::img string?)
(s/def ::user-sites vector?)
(s/def ::widget-data (s/multi-spec widget-data-type :widget-uid))

(defn medium-init 
  "Helper for mediumjs components. Initializes a medium instance. Returns a function that can be used to destroy 
  instance and related listeners" 
  [uuid data link-btn-id link-input-id]
  (let [medium (js/Medium. #js {:element (.getElementById js/document uuid)
                                :mode js/Medium.richMode
                                :placeholder "Your Text here"
                                :attributes nil
                                :tags nil
                                :pasteAsTExt false
                                :modifiers #js {:q (fn [event element]
                                                     (om/update!
                                                       data
                                                       [(.-innerHTML (gdom/getElement uuid))]))}})

        cb (ndom/attach-click-listener-by-id 
             link-btn-id 
             (fn []
               (do 
                 (.focus medium)
                 (.invokeElement 
                   medium 
                   "a" 
                   #js {:title "I am a link"
                        :style "color: #66d9ef"
                        :target "_blank"
                        :href (.-value 
                                (ndom/get-node-by-id link-input-id))}))))]

    (fn []
      (.destroy medium)
      (ndom/remove-listener link-btn-id cb))))

(defn rich-text-edit 
  "Mediumjs rich text editor" 
  [data owner]
  (let [uid (u/uid)
        advertise? false
        link-btn-id (u/uid)
        link-input-id (u/uid)]
    (reify
      om/IDidMount
      (did-mount [_]
        (let [edit-mode-obs (first (om/observe owner (mn/edit-mode)))]
          (medium-init uid data link-btn-id link-input-id)
          (ndom/set-attr-by-id uid "contenteditable" (str edit-mode-obs))))

      om/IDidUpdate
      (did-update [_ _ _]
        (let [edit-mode-obs (first (mn/edit-mode))
              medium-destroy (medium-init uid data link-btn-id link-input-id)]
          (medium-destroy)
          (medium-init uid data link-btn-id link-input-id)
          (ndom/set-attr-by-id uid "contenteditable" (str edit-mode-obs))))

      om/IRenderState
      (render-state [_ state]
        (let [edit-mode-obs (first (om/observe owner (mn/edit-mode)))]
          (dom/div nil 
                   (dom/div #js {:id uid
                                 :style #js {:marginTop "-10px"}
                                 :dangerouslySetInnerHTML #js {:__html (first data)}})

                   (dom/div #js {:style #js {:display (cc/edit-mode-display edit-mode-obs)}}
                            (dom/input #js {:id link-input-id})
                            (dom/button #js{:id link-btn-id} "Link"))))))))

;##Wdigets 
;The main widget multimethods. 

(defmulti widget-data-type 
  "Spec multimethod." 
  :widget-uid)

(defmulti widget-data 
  "Data for widget components." 
  (fn [x] x))

(defmulti widget 
  "Components for displaying widgets." 
  (fn [data owner] (:widget-uid data)))

(defmethod widget-data-type 1 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::inner-html]))

(defmethod widget-data 001  
  [_]
  {:widget-uid 001
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html [(str "<p>" (u/uid) "</p>" )]})

;Basic mediumjs widget
(defmethod widget 001  
  [data owner]
  (let [{:keys [object-id]} data]
    (reify
      om/IRender
      (render [_ ]
        (dom/div nil (om/build rich-text-edit (:inner-html data)))))))

(defmethod widget-data-type 2 [_]
  (s/keys :req-un [::widget-uid ::object-id ::imgs]))

(defmethod widget-data 2 [_]
  {:widget-uid 2
   :object-id (u/uid)
   :imgs [{:object-id (u/uid)
           :url "http://placekitten.com/900/600"}
          {:object-id (u/uid)
           :url "http://placekitten.com/900/600"}]})

;Image slider widget.
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
                        (.royalSlider #js {:keyboardNavEnabled false :controlNavigation "bullets"
                                           :autoScaleSlider true :autoScaleSliderWidth 14
                                           :autoScaleSliderHeight 9
                                           :slidesSpacing 0
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
                                                    (cre/simple-input-cursor! (:url data) data :url)
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

(defmethod widget-data-type 3 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::inner-html]))

(defmethod widget-data 003 [_]
  {:widget-uid 003
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

;Boxed mediumjs text widget
(defmethod widget 003 [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "box-paragraph"}
               (om/build rich-text-edit (:inner-html data))))))

(defmethod widget-data-type 4 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::text]))

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

(defmethod widget-data-type 5 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::inner-html]))

(defmethod widget-data 005 [_]
  {:widget-uid 005
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

;Clear box red border
(defmethod widget 005 [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "box-paragraph-clear"}
               (om/build rich-text-edit (:inner-html data))))))

(defmethod widget-data-type 6 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::img]))

(defmethod widget-data 006 [_]
  {:widget-uid 006
   :object-id (u/uid)
   :widget-name "Standard image widget"
   :img "http://solariarchitects.com/img/leaderboards/group_photo_everyday_zoomed.jpg"
   :style {:width "60%"}})

;Simple Image
(defmethod widget 006 [{:keys [style img object-id] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)
       :advertise? false})

    om/IRenderState
    (render-state [_ {:keys [uuid] :as state}]
      (let [advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (dom/div #js {:style #js {:textAlign "center"}} 
                 (dom/img #js {:style (clj->js style)
                               :src (:img data)})
                 (when (and (first @edit-mode-obs) (not advertise?))
                   (dom/input #js {:value (:img data)
                                   :style #js {:width "100%"}
                                   :onChange (fn [e]
                                               (om/update! data :img (.. e -target -value)))})))))))

(defmethod widget-data-type 7 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::imgs]))

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

;Image and text grid  
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
                                                 (cre/simple-input-cursor! (:title data) data :title)
                                                 (cre/simple-input-cursor! (:text data) data :text))
                                        (cre/simple-input-cursor! (:data-src data) data :data-src)))))}))

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

(defmethod widget-data-type 8 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::imgs]))

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

(defmethod widget-data-type 9 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name]))

(defmethod widget-data 9 [_]
  {:widget-uid 9
   :object-id (u/uid)
   :widget-name "Sign in widget"
   :style {:fontSize "20px"
           :outline "none"
           :height "80px"
           :width "300px"
           :borderRadius "40px"
           :background "black"
           :border "5px solid #3498db"
           :color "#3498db" 
           :letterSpacing "1px"
           :cursor "pointer"
           :display "inherit"}})

;Sign in
(defmethod widget 9 [{:keys [style]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:advertise? false
       :local-style {:display ""}})

    om/IRenderState
    (render-state [_ {:keys [local-style]}]
      (let [all-data (om/observe owner (mn/all-data))]

        (dom/div #js {:style #js {:textAlign "center"}}
                 (dom/div #js {:id "firebase"} "")
                 (dom/button
                   #js {:id "firebase-button"
                        :style (clj->js (merge style local-style))
                        :onClick (fn [_] 
                                   (mn/update-local-style! owner :display "none")
                                   (fb/fb-initiate-auth 
                                     "firebase"
                                     (fn [user]
                                       (mn/auth-state-load-site! master "super-container"))))}
                   "Sign up / Sign in"))))))

(defmethod widget-data-type 10 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::user-sites]))

(defmethod widget-data 10 [_]
  {:widget-uid 10
   :object-id (u/uid)
   :widget-name "Show your sites"
   :user-sites [{:name "site1"
                 :description "A cool site"
                 :data {:a "placeholder"}}
                {:name "site2"
                 :description "Another cool site"
                 :data {:a "placeholder"}}]})

;The user's sites as seen when on the user homepage. Not meant to be a user selectable widget.  
(defmethod widget 10 [{:keys [user-sites] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:advertise? false
       :display-site (fn [{:keys [name description data] :as all-data} owner]
                       (reify
                         om/IRender
                         (render [_]
                           (dom/div nil
                                    (dom/p nil (str "Site name: " name))
                                    (dom/p nil (str "Site description: " description))
                                    (dom/button
                                      #js {:onClick (fn [_] 
                                                      (go 
                                                        (mn/change-site 
                                                          (<! 
                                                            (mn/renderable-site->full-monolith @data)))))}
                                      "Go to site")))))})

    om/IWillMount
    (will-mount [_]
      (let [uid-obs (om/observe owner (mn/uid))
            advertise? (om/get-state owner :advertise?)]
        ;Refactor
        (when (not advertise?)
          (->
            (js/firebase.database)
            (.ref (str "users/" (first @uid-obs)  "/sites"))
            (.once "value")
            (.then (fn [snapshot]
                     (let [remote-map (js->clj (.val snapshot) :keywordize-keys true)]
                       (om/update! user-sites remote-map))))))))

    om/IRenderState
    (render-state [_ {:keys [display-site] :as state}]
      (apply dom/div nil
             (om/build-all display-site user-sites)))))

(defmethod widget-data-type 11 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::inner-html]))

(defmethod widget-data 11 [_]
  {:widget-uid 11 
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]
   :visible? true
   :tags [{:edit true} {:tag "Entrepreneurship"} {:tag "Open Source"} {:tag "Collaboration"} 
          {:tag "PHP"} {:tag "Javascript"} {:tag "Clojure(script)"} ]})

(defmulti tag 
  "Project tags"
  (fn [data owner] (contains? data :tag)))

(defmethod tag true
  [data owner]
  (reify 
    om/IInitState 
    (init-state [_]
      {:uid (u/uid)})

    om/IDidMount 
    (did-mount [_]
      (ndom/content-editable-updater (om/get-state owner :uid) data :tag))

    om/IRenderState 
    (render-state [_ {:keys [uid tags] :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/li #js {:style #js {:float "left" :background "#CE4072" :paddingRight "10px" 
                                 :paddingLeft "10px" :margin "0px" :position "relative"}} 
                (when (first edit-mode-obs) (cc/delete-button tags :tag (:tag data)))

                (dom/p #js {:id uid :contentEditable (first edit-mode-obs)} (:tag data)))))))

(defmethod tag false
  [data owner]
  (reify 
    om/IRenderState
    (render-state [_ state]
      (cc/edit-mode-sense 
        owner
        (dom/li #js {:onClick (fn [_] 
                                (mn/ref-vec-insert-second! (:tags state) {:tag "Change me"}))
                     :style #js {:float "left" :background "#CE4072" :paddingRight "10px" 
                                 :paddingLeft "10px" :marginRight "10px"}} 
                "Add Tag +")))))

(defn tag-intersect? 
  "Check if a widget's tags intersect with tags chosen by a tag filter widget" 
  [owner tags]
  (let [current-route-obs (om/observe owner (mn/current-route))
        routes-map-obs (om/observe owner (mn/routes-map))
        current-widgets (mn/current-widgets
                          (clojure.string/split (first @current-route-obs) #"/")
                          routes-map-obs)   
        filter-widget? (filter (fn [x] (= 12 (get x :widget-uid)))  current-widgets)
        selected-tags (set 
                        (reduce 
                          (fn [x {:keys [clicked tagz] :as y}]  
                            (if clicked 
                              (conj x tagz)
                              x)) 
                          []
                          (:tags (first filter-widget?))))
        intersect? (not (empty? (st/intersection selected-tags (set (map :tag tags)))))]
    intersect?))

;Text widget with tags, allows the widget's display to be turned on and off by a filter widget.  
(defmethod widget 11 [{:keys [tags visible?] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:style #js {:display (if (tag-intersect? owner tags) "inherit" "none")}} 

               (apply dom/ul #js {:style #js {:display "inline-block" :margin "0px"}} 
                      (om/build-all tag tags {:state {:tags tags}}))

               (dom/div #js {:className "box-paragraph"}
                        (om/build rich-text-edit (:inner-html data)))))))

(defmethod widget-data-type 12 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::img]))

(defmethod widget-data 12 [_]
  {:widget-uid 12   
   :object-id (u/uid)
   :widget-name "Standard image widget"
   :tags [{:addtag true} {:clicked true :tagz "Entrepreneurship"}
          {:clicked true :tagz "Open Source"} {:clicked true :tagz "Clojurescript"}
          {:clicked true :tagz "Collaboration"} {:clicked true :tagz "PHP"}
          {:clicked true :tagz "Javascript"} {:clicked true :tagz "Clojure(script)"}
          {:clicked true :tagz "Clojure"}]})

(def default-tag {:clicked true :tagz "Change me"})

(defmulti select-tag 
  "Allow selection of an individual tag"
  (fn [data owner] (contains? data :tagz)))

(defmethod select-tag true 
  [{:keys [tagz clicked] :as data} owner]
  (reify 
    om/IInitState 
    (init-state [_]
      {:uid (u/uid)})

    om/IDidMount 
    (did-mount [_]
      (ndom/content-editable-updater (om/get-state owner :uid) data :tagz))

    om/IRenderState
    (render-state [_ {:keys [uid tags] :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/li #js {:onClick (fn [x] 
                                (when (not (first edit-mode-obs))
                                  (om/transact! data :clicked (fn [bool] (not bool)))))
                     :style #js {:float "left" :border "3px solid #CE4072" :position "relative"
                                 :padding "5px" :margin "5px" :cursor "pointer"
                                 :background (if clicked "#CE4072" "inherit")}} 

                (when (first edit-mode-obs)
                  (cc/delete-button tags :tagz tagz))

                (dom/p #js {:id uid :contentEditable (first edit-mode-obs)} tagz))))))

(defmethod select-tag false 
  [{:keys [tagz clicked] :as data} owner]
  (reify 
    om/IRenderState
    (render-state [_ {:keys [tags] :as state}]
      (cc/edit-mode-sense 
        owner
        (dom/li #js {:onClick (fn [_] 
                                (mn/ref-vec-insert-second! tags default-tag))
                     :style #js {:float "left" :border "3px solid #CE4072" 
                                 :padding "5px" :margin "5px" :cursor "pointer"
                                 :background (if clicked "#CE4072" "inherit")}} 
                "Add Tag +")))))

;Tag filter. Will filter widget visibility for any widget that has tag data associated with it. 
(defmethod widget 12 [{:keys [tags] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)
       :advertise? false})

    om/IRenderState
    (render-state [_ {:keys [uuid] :as state}]
      (let [advertise? (om/get-state owner :advertise?)
            edit-mode-obs (om/observe owner (mn/edit-mode))]

        (dom/div #js {:style #js {:marginBottom "10px"}} 
                 (dom/p nil "Choose the tags you're interested in:") 
                 (apply dom/ul #js {:style #js {:display "inline-block" :margin "0px"}}
                        (om/build-all select-tag tags {:state {:tags tags}})))))))

(defmethod widget-data 13 [_]
  {:widget-uid 13
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :like-box-string "<div class=\"fb-page\" data-href=\"https://www.facebook.com/U1stGamesOfficial/\"  data-width=\"500\" data-height=\"300\" data-small-header=\"true\" data-adapt-container-width=\"true\" data-show-posts=\"false\" data-hide-cover=\"false\" data-show-facepile=\"false\"><div class=\"fb-xfbml-parse-ignore\"><blockquote cite=\"https://www.facebook.com/U1stGamesOfficial/\"><a href=\"https://www.facebook.com/U1stGamesOfficial/\">U1st Games</a></blockquote></div></div>"})

;Facebook like box
(defmethod widget 13 [{:keys [like-box-string] :as data} owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (FB.XFBML.parse))

    om/IDidUpdate
    (did-update [_ _ _]
      (FB.XFBML.parse))

    om/IRender
    (render [_]
      (dom/div nil 
               (dom/div #js {:style #js {:marginTop "-10px" :textAlign "center"}
                             :dangerouslySetInnerHTML #js {:__html like-box-string}})         
               (cc/edit-mode-sense 
                 owner 
                 (cre/simple-input-cursor! like-box-string data :like-box-string))))))

(defmethod widget-data 14 [_]
  {:widget-uid 14
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :youtube-video-id "S-0MmK73OdY"})

(defn youtube-string-gen 
  "Given a youtube video url, return embedable string" 
  [youtube-video-id]
  (str 
    "<iframe id=\"ytplayer\" type=\"text/html\" width=\"100%\" height=\"360\" src=\"https://www.youtube.com/embed/" 
    youtube-video-id  
    "?autoplay=0\" frameborder=\"0\"></iframe>"))

;Youtube embed
(defmethod widget 14 [{:keys [youtube-video-id] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil 
               (dom/div #js {:style #js {:marginTop "-10px" :textAlign "center"}
                             :dangerouslySetInnerHTML #js {:__html (youtube-string-gen youtube-video-id)}})         
               (cc/edit-mode-sense 
                 owner 
                 (cre/simple-input-cursor! youtube-video-id data :youtube-video-id))))))

