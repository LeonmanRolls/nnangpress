(ns nnangpress.widgets
  "Widgets are the main 'unit' of display in nnangpress. Widgets can be added and deleted by the user. A widget
  comprises a react component and its supporting data. These are both implemented as multimethods. So if the user
  selects a new widget, the widget's id is passed to a multimethod that returns the data for that widget. When a
  widget is rendered, the multimethod returns the corresponding react component."
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [om.core :as om :include-macros true :refer [set-state! update-state!]]
    [om.dom :as dom :include-macros true]
    [nnangpress.utils :as u]
    [nnangpress.specs :as spcs]
    [nnangpress.widgetdata :as wd]
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

(enable-console-print!)

;(set! *warn-on-infer* true)

(declare widget-data-type admin-sidebar main-view)

(def Layout (js/React.createFactory js/ReactMDL.Layout))
(def Header (js/React.createFactory js/ReactMDL.Header))
(def Navigation (js/React.createFactory js/ReactMDL.Navigation))
(def Content (js/React.createFactory js/ReactMDL.Content))
(def Button (js/React.createFactory js/ReactMDL.Button))
(def Card (js/React.createFactory js/ReactMDL.Card))
(def CardText (js/React.createFactory js/ReactMDL.CardText))
(def CardActions (js/React.createFactory js/ReactMDL.CardActions))
(def CardTitle (js/React.createFactory js/ReactMDL.CardTitle))
(def CardMenu (js/React.createFactory js/ReactMDL.CardMenu))
(def Grid (js/React.createFactory js/ReactMDL.CardMenu))
(def Cell (js/React.createFactory js/ReactMDL.CardMenu))

(s/def ::imgs vector?)
(s/def ::text vector?)
(s/def ::img string?)
(s/def ::user-sites vector?)
(s/def ::widget-data (s/multi-spec widget-data-type :widget-uid))

(defn medium-init
  "Helper for mediumjs components. Initializes a medium instance. Returns a function that can be used to destroy
  instance and related listeners. Listening to events that modify text, including saving the text is handled by
  functions attached to the container of the mediumjs object. Therefore buttons need to be on the top level of
  the contentEditable element's container."
  [uuid data link-btn-id link-input-id edit-uid]
  (let [article (.getElementById js/document uuid)
        container (.-parentNode article)
        edit-container (.getElementById js/document edit-uid)
        medium (js/Medium. #js {:element article
                                :mode js/Medium.richMode
                                :placeholder "Your Text here"
                                :autofocus false
                                :attributes nil
                                :tags nil
                                :pasteAsText false
                                :modifiers #js {:b (fn [event element]
                                                     )
                                                :q (fn [event element]
                                                     (.log js/console (str "innerhtml: " (gdom/getElement uuid)))
                                                     #_(om/update!
                                                       data
                                                       :inner-html
                                                       [(.-innerHTML (gdom/getElement uuid))]))}})

        _ (set! (-> medium .-fontSize) 1)

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
                        :href (.-value (ndom/get-node-by-id link-input-id))}))))]

    (set!
      (-> edit-container (.querySelector ".header-one") .-onmousedown)
      (fn []
        (do
          (.focus medium)
          (.invokeElement medium "h1" #js {}))))

    (set!
      (-> edit-container (.querySelector ".header-two") .-onmousedown)
      (fn []
        (do
          (.focus medium)
          (.invokeElement medium "h2" #js {}))))

    (set!
      (-> edit-container (.querySelector ".header-three") .-onmousedown)
      (fn []
        (do
          (.focus medium)
          (.invokeElement medium "h3" #js {}))))

    (set!
      (-> edit-container (.querySelector ".header-four") .-onmousedown)
      (fn []
        (do
          (.focus medium)
          (.invokeElement medium "h4" #js {}))))

    (set!
      (-> edit-container (.querySelector ".header-five") .-onmousedown)
      (fn []
        (do
          (.focus medium)
          (.invokeElement medium "h5" #js {}))))

    (set!
      (-> edit-container (.querySelector ".header-six") .-onmousedown)
      (fn []
        (do
          (.focus medium)
          (.invokeElement medium "h6" #js {}))))

    (fn []
      (.destroy medium)
      (ndom/remove-listener link-btn-id cb))))

;or is for legacy rich-text-edit data
(defn rich-text-edit
  "Mediumjs rich text editor"
  [{uid :medium-id inner-html :inner-html :or {uid (u/uid)} :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uid uid
       :advertise? false
       :edit-uid (u/uid)
       :link-btn-id (u/uid)
       :link-input-id (u/uid)})

    om/IDidMount
    (did-mount [_]
      (let [{:keys [uid advertise? edit-uid link-btn-id link-input-id edit]} (om/get-state owner)
            edit-mode-obs (first (om/observe owner (mn/edit-mode)))]
        (.log js/console "uid: " uid)
        (medium-init uid data link-btn-id link-input-id edit-uid)
        (ndom/set-attr-by-id uid "contenteditable" (if (or edit-mode-obs edit) "true" "false"))))

    om/IDidUpdate
    (did-update [_ _ _]
      (let [{:keys [edit uid]} (om/get-state owner)
            edit-mode-obs (first (mn/edit-mode))]
        (ndom/set-attr-by-id uid "contenteditable" (if (or edit-mode-obs edit) "true" "false"))))

    om/IRenderState
    (render-state [_ {:keys [uid advertise? edit-uid link-btn-id link-input-id style]}]
      (let [edit-mode-obs (first (om/observe owner (mn/edit-mode)))]
        (dom/div #js {:style (clj->js style)}
                 (.log js/console "render uid: " uid)
                 (dom/div #js {:id uid
                               :style #js {:marginTop "-10px" :outline (if edit-mode-obs "1px solid blue" "")}
                               :dangerouslySetInnerHTML #js {:__html (first inner-html)}})

                 (dom/div #js {:id edit-uid
                               :style #js {:display (cc/edit-mode-display edit-mode-obs) :textAlign "left"}}

                          (.log js/console "data data: " (clj->js @data))

                          (dom/button #js {:className "header-one"} "H1")
                          (dom/button #js {:className "header-two"} "H2")
                          (dom/button #js {:className "header-three"} "H3")
                          (dom/button #js {:className "header-four"} "H4")
                          (dom/button #js {:className "header-five"} "H5")
                          (dom/button #js {:className "header-six"} "H6")
                          (dom/button #js {:className "align-left" :onClick #(om/update! style :textAlign "left")}
                                    (dom/i #js {:className "fa fa-align-left"}))
                          (dom/button #js {:className "align-middle" :onClick #(om/update! style :textAlign "center")}
                                    (dom/i #js {:className "fa fa-align-justify"}))
                          (dom/button #js {:className "align-right" :onClick #(om/update! style :textAlign "right")}
                                    (dom/i #js {:className "fa fa-align-right"}))
                          (dom/button #js {:className "align-left" :onClick #(do
                                                                               (.log js/console
                                                                                     (.-innerHTML (gdom/getElement uid)))
                                                                               (.log js/console "inner-html: " inner-html)
                                                                               (.log js/console (type inner-html))
                                                                               (om/update!
                                                                                 inner-html
                                                                                 [(.-innerHTML (gdom/getElement uid))]))}
                                      (dom/i #js {:className "fa fa-save"}))

                          (dom/input #js {:id link-input-id})
                          (dom/button #js{:id link-btn-id} "Link")))))))

(s/def ::textAlign (s/and string? #{"left" "center" "right"}))

(s/fdef build-rich-text
        :args (s/cat :data (s/and ::spcs/map-cursor #(and (contains? % :object-id) (contains? % :inner-html)))
                     :style (s/and (s/keys :req-un [::textAlign]) ::spcs/map-cursor)))

(defn build-rich-text
  "Gives us a chance to spec the buliding of the simple text component."
  [data style]
    (om/build rich-text-edit data {:state {:style style}}))

;##Widgets
;The main widget multimethods.
(defmulti widget-data-type
  "Spec multimethod."
  :widget-uid)

(defmulti widget
  "Components for displaying widgets."
  (fn [data owner]

    (:widget-uid data)))

(defmethod widget-data-type 1 [_] ::basic-medium-js-widget)

;Basic mediumjs widget
(defmethod widget 001
  [data owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [edit]}]
      (dom/div nil
               (om/build rich-text-edit data {:state {:edit edit :style (:style data)}})))))

(defmethod widget-data-type 2 [_]
  (s/keys :req-un [::widget-uid ::object-id ::imgs]))

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

;Boxed mediumjs text widget
(defmethod widget 003 [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "box-paragraph"}
               (build-rich-text data (:style data))))))

(defmethod widget-data-type 4 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::text]))

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
                                (dom/div nil
                                         (dom/p nil "This is some text"))
                                #_(om/build widget sub))))))}))

    om/IDidUpdate
    (did-update  [this prev-props prev-state]
      #_(js/accordion (str "." (:uuid (om/get-state owner)))))

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
                                                       (conj text {:title (wd/widget-data 001)
                                                                   :sub (wd/widget-data 001)}))))}
                              "Add Section")
                            (om/build cre/remove-element text
                                      {:state {:label "remove accordion section"}}))))))))

(defmethod widget-data-type 5 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::inner-html]))

;Clear box red border
(defmethod widget 005 [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "box-paragraph-clear"}
               (om/build rich-text-edit data)))))

(defmethod widget-data-type 6 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::img]))

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

;"<a href=\"http://google.com\" style=\"width:100%;height:100%;\">"
;"</a>"

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
                         "</div>"
                         ))

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
                          (dom/div nil
                                   (cre/simple-input-cursor! (:data-src data) data :data-src)
                                   (cre/simple-input-cursor! (:link data) data :link)
                                   (cre/simple-input-cursor! (:title data) data :title)
                                   (cre/simple-input-cursor! (:subtitle data) data :subtitle))))))}))

    om/IDidUpdate
    (did-update  [this prev-props prev-state]
      (let [routes-map-obs (om/observe owner (mn/routes-map))]
      (doseq [{:keys [id link]} imgs]
        (->
          (js/$ (str "#" id))
          (.click (fn [event]
                    (rt/js-link
                      @routes-map-obs
                      link
                      event))))))
      (->
        (js/$ ".megafolio-container")
        (.megafoliopro #js {})))

    om/IDidMount
    (did-mount [_]
      (let [routes-map-obs (om/observe owner (mn/routes-map))]
        (doseq [{:keys [id link]} imgs]
          (->
            (js/$ (str "#" id))
            (.click (fn [event]
                      (rt/js-link
                        @routes-map-obs
                        link
                        event)))))
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

                            (dom/button #js {:onClick (fn [_] (om/transact!  imgs
                                                          (fn [x] (conj x (default-text)))))}
                                        "Add text")

                            (om/build cre/remove-element imgs
                                      {:state {:label "remove nth element"}}))))))))

(defmethod widget-data-type 8 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::imgs]))

(defn li [{:keys [route active?] :as data} owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [routes-map] :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (.log js/console "right nav: " data)
        (dom/li #js {:className "right-nav-li"
                     :onClick (if (first edit-mode-obs) identity (partial rt/js-link routes-map route))}
                (dom/div #js {:className (if active? "active-text" "")}
                         (.substr route 1)
                         (when (first edit-mode-obs) (cre/simple-input-cursor! (:route data) data :route))))))))

;Small right nav
(defmethod widget 8 [{:keys [lis] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uuid (random-uuid)})

    om/IRenderState
    (render-state [_ {:keys [uuid advertise?] :as state}]
      (let [routes-map-obs (om/observe owner (mn/routes-map))]
        (apply dom/ul #js {:className (if advertise? "" "right-nav")}
               (om/build-all li lis {:state {:routes-map routes-map-obs}}))))))

(defmethod widget-data-type 9 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name]))

(defmethod widget-data-type 10 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::user-sites]))

(defn display-site
  ""
  [{:keys [name description route-widget screenshot] :as all-data} owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [delete]}]
      (Card #js {:shadow 0 :style #js {:width "400px" :display "inline-block" :margin "10px"
                                       :textAlign "left"}}
            (CardTitle #js {:style #js {:color "#fff"
                                        :height "176px"
                                        :background (str "url(" screenshot ")" " center / cover")}}
                       "Site name")
            (CardText #js {} "Site description")
            (CardActions #js {:border true}
                         (Button #js {:colored true :onClick #(mn/site-transition @all-data)}
                                 "Go to site")
                         (Button #js {:colored true :onClick #(put! delete name)}
                                 "Delete site"))))))

;The user's sites as seen when on the user homepage. Not meant to be a user selectable widget. This widget
;is somewhat removed from the general monolith architecture. It loads its own data into the monolith
;based on the current user, and provides a channel for sub components to communicate back to it for saving
;updates to the user's site data. So this component and it's sub components are their own mini ecosystem.
(defmethod widget 10 [{:keys [user-sites] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:advertise? false
       :delete (chan)
       :nd-chan (chan)})

    om/IWillMount
    (will-mount [_]
      (let [uid-obs (om/observe owner (mn/uid))
            {:keys [advertise? delete nd-chan nangpress-data]} (om/get-state owner)
            _ (fb/firebase-get "nangpress-data" nd-chan)
            c (chan)]
        (when (not advertise?)
          (go
            (fb/firebase-get (str "users/" (first @uid-obs)  "/sites") c)
            (om/update! user-sites (vec (filter #(not (nil? %)) (<! c))))))
        (go (loop []
              (let [site-name (<! delete)]
                (om/transact! user-sites (fn [xs] (vec (remove #(= site-name (:name %)) xs)))))
              (recur)))))

    om/IWillUpdate
    (will-update [_ next-props _]
      (mn/update-sites!! @(:user-sites next-props) (first (om/observe owner (mn/uid)))))

    om/IRenderState
    (render-state [_ {:keys [delete]}]

      (dom/div nil
               (Layout #js {:fixedHeader true :style #js {:background "whitesmoke" :height "100%"}}
                       (Header #js {:title "Your Sites"}
                               (Navigation #js {}
                                           (Button #js {:style #js {:line-height "0px"}
                                                        :onClick (fn [] (om/transact!
                                                                          user-sites
                                                                          #(conj % (mn/new-site-template))))
                                                        :raised true}
                                                   "+ Add New Site")))

                       (apply dom/div #js {:style #js {:textAlign "center"}}
                              (om/build-all display-site user-sites {:init-state {:delete delete}})))))))

(defmethod widget-data-type 11 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::inner-html]))

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
(defmethod widget 11 [{:keys [tags visible? more-info] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (let [routes-map-obs (om/observe owner (mn/routes-map))
            edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/div #js {:style #js {:display (if (tag-intersect? owner tags) "inherit" "none")}}

                 (apply dom/ul #js {:style #js {:display "inline-block" :margin "0px"}}
                        (om/build-all tag tags {:state {:tags tags}}))

                 (dom/div #js {:className "box-paragraph"}
                          (om/build rich-text-edit data)
                          (dom/div #js {:style #js {:textAlign "center"}}
                                   (dom/button #js {:style #js {:padding "10px 20px"}
                                                    :onClick (partial rt/js-link @routes-map-obs more-info)
                                                    :className "button-one"} "more info")

                                   (when (first @edit-mode-obs)
                                     (om/build cre/simple-input-comp! data {:state {:k :more-info}}))
                                   )))))))

(defmethod widget-data-type 12 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::img]))

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

;Facebook like box
(defmethod widget 13 [{:keys [like-box-string] :as data} owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (^js/FB.XFBML js/FB.XFBML.parse))

    om/IDidUpdate
    (did-update [_ _ _]
      (^js/FB.XFBML js/FB.XFBML.parse))

    om/IRender
    (render [_]
      (dom/div nil
               (dom/div #js {:style #js {:marginTop "-10px" :textAlign "center"}
                             :dangerouslySetInnerHTML #js {:__html like-box-string}})
               (cc/edit-mode-sense
                 owner
                 (cre/simple-input-cursor! like-box-string data :like-box-string))))))

(defn youtube-string-gen
  "Given a youtube video url, return embedable string"
  [youtube-video-id]
  (str
    "<iframe id=\"ytplayer\" type=\"text/html\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"
    youtube-video-id
    "?autoplay=0&mute=1&loop=1&playlist="
    youtube-video-id
    "\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" volume=\"0\"></iframe>"))

;Youtube embed
(defmethod widget 14 [{:keys [youtube-video-id] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (dom/div #js {:className "aspect-ratio"
                             :style #js {:textAlign "center"}
                             :dangerouslySetInnerHTML #js {:__html (youtube-string-gen youtube-video-id)}})
               (cc/edit-mode-sense
                 owner
                 (cre/simple-input-cursor! youtube-video-id data :youtube-video-id))))))

(def welcome-widget-style {:fontWeight "900", :textAlign "center", :background "rgba(0,0,0,0.95)",
                           :padding "20px", :border "2px solid white"})

;Welcome widget, the first widget the user will see on their new site. Should have basic instructions
;on what to do next.
(defmethod widget 15 [{:keys [youtube-video-id] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (Card #js {:shadow 0 :style #js {:width "100%" :display "inline-block" :margin "10px"
                                                :textAlign "left" :background "#3E4EB8" :color "white"}}
                     (CardTitle #js {:style #js {:color "white"}}
                                "Welcome to Nangpress! Here's how to get started.")
                     (CardText #js {} "Site description")
                     )

               (Card #js {:shadow 0 :style #js {:width "100%" :display "inline-block" :margin "10px"
                                                :textAlign "left"}}
                     (CardTitle #js {:style #js {:color "#fff"
                                                 :height "176px"
                                                 :background (str
                                                               "url("
                                                               "https://media.giphy.com/media/l0Iy9RHuSPfER4NEs/source.gif"
                                                               ")" " center / cover")}}
                                "Site name")
                     (CardText #js {} "Site description")
                     (CardActions #js {:border true}
                                  (Button #js {:colored true}
                                          "Go to site")
                                  (Button #js {:colored true}
                                          "Delete site")))

               (dom/div #js {:style (clj->js welcome-widget-style)
                             :className "welcome-widget"}

                        (dom/p #js {:style #js {:fontSize "1.5em"}} "Welcome to Nangpress! Here's how to get started.")
                        (dom/p nil "1. Choose a navbar.
                                   This is optional but without it your site won't have any pages other than the homepage.
                                   You can do this by clicking 'Menu' in the admin navbar above and then 'Select a navbar'
                                   from the menu that appears on the left.")
                        (dom/img #js {:src "https://media.giphy.com/media/l0Iy9RHuSPfER4NEs/source.gif"})
                        (dom/p nil "2. Add some routes to your site.
                                   Hit 'Toggle edit mode' at the top. This will make the navbar editable. If you click on
                                   the links on the navbar they will go to the corresponding page.")
                        (dom/img #js {:src "https://media.giphy.com/media/l0Iy7jckAeUOgt5Bu/source.gif"})
                        (dom/p nil "3. Add widgets to a page.
                                   In the side menu click on the 'add a widget' section. Here you will see a selction of
                                   widgets that you can add to the current page you are on by clicking 'Add widget'. You
                                   can play around with the widgets in the side menu as they have been loaded with some
                                   default data.")
                        (dom/img #js {:src "https://media.giphy.com/media/3o7btTKSqMxrMW3G2k/source.gif"})
                        (dom/p nil "4. Edit the widgets you have just added.
                                   Hit 'Toggle edit mode' at the top to edit the widgets you just added.")
                        (dom/p nil "5. Happy site building! Delete this widget when you're finished with it."))


               )
      )))

(defn route-modifier
  ""
  [data parent-cursor routes-map]
  (fn [event element]
    (let [uuid (-> event .-srcElement .-id)]
      (do
        (.log js/console "meidum-init-rt")
        (om/update!
          parent-cursor
          :route-name
          (u/str-uglify (.-innerHTML (gdom/getElement uuid))))
        (rt/nav! (u/str-uglify (.-innerHTML (gdom/getElement uuid))) @routes-map)
        (om/update! data [(.-innerHTML (gdom/getElement uuid))])))))

(defn medium-init-rt
  "Helper for mediumjs components. Initializes a medium instance. Returns a function that can be used to destroy
  instance and related listeners"
  [uuid data link-btn-id link-input-id parent-cursor routes-map]
  (let [medium (js/Medium. #js {:element (.getElementById js/document uuid)
                                :mode js/Medium.richMode
                                :placeholder "Your Text here"
                                :autofocus false
                                :attributes nil
                                :tags nil
                                :pasteAsText false
                                :modifiers #js {:q
                                                (route-modifier data parent-cursor routes-map)
                                                }})

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

(defn rich-text-edit-rt
  "Mediumjs rich text editor for routing. The main difference between this and the ordinary mediumjs widget is the
  way we want the cursor to be updated"
  [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uid (u/uid)
       :advertise? false
       :link-btn-id (u/uid)
       :link-input-id (u/uid)})

    om/IDidMount
    (did-mount [_]
      ;might be why we sometimes can't edit the link
      #_(let [{:keys [uid advertise? link-btn-id link-input-id edit parent-cursor routes-map]} (om/get-state owner)
              edit-mode-obs (first (om/observe owner (mn/edit-mode)))]
          (medium-init-rt uid data link-btn-id link-input-id parent-cursor routes-map)
          (ndom/set-attr-by-id uid "contenteditable" (str (or edit-mode-obs edit)))))

    om/IDidUpdate
    (did-update [_ _ _]
      (let [{:keys [uid advertise? link-btn-id link-input-id edit parent-cursor routes-map]} (om/get-state owner)
            edit-mode-obs (first (mn/edit-mode))
            medium-destroy (medium-init-rt uid data link-btn-id link-input-id parent-cursor routes-map)]
        (medium-destroy)
        (medium-init-rt uid data link-btn-id link-input-id parent-cursor routes-map)
        (ndom/set-attr-by-id uid "contenteditable" (str (or edit-mode-obs edit)))))

    om/IRenderState
    (render-state [_ {:keys [uid advertise? link-btn-id link-input-id]}]
      (let [edit-mode-obs (first (om/observe owner (mn/edit-mode)))]
        (dom/div nil
                 (dom/div #js {:id uid
                               :style #js {:outline (if edit-mode-obs "1px solid blue" "")}
                               :dangerouslySetInnerHTML #js {:__html (first data)}})

                 (dom/div #js {:style #js {:display "none"}}
                          (dom/input #js {:id link-input-id})
                          (dom/button #js{:id link-btn-id} "Link")))))))

;Editing route names requires special treatment as the routing system relies on the route names.
(defmethod widget 16
  [data owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [edit parent-cursor routes-map]}]
      (dom/div nil
               (om/build rich-text-edit-rt (:inner-html data) {:state {:edit false
                                                         :parent-cursor parent-cursor
                                                         :routes-map routes-map}})))))

(defmethod widget 17
  [data owner]
  (reify
    om/IRender
    (render[_]
      (dom/div nil "Hi there"))))

;Edit this site now.
(defmethod widget 18
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [edit-mode-obs (first (om/observe owner (mn/edit-mode)))]
        (dom/div #js {:className "box-paragraph"
                      :style #js {:textAlign "center" :fontSize "1.5em" :fontWeight "900" :padding "0px"}}

                 (dom/p #js {:style #js {:textDecoration "" :margin "-10px" :fontSize "2em" :fontWeight "900"}}
                        "EDIT THIS SITE NOW!")

                 (dom/div #js {:style #js {:marginBottom "1em"}}
                          (dom/button #js {:onClick #(mn/toggle-edit-mode), :className "button-one"}
                                      (if edit-mode-obs "EXIT EDIT MODE" "CLICK HERE!"))))))))

;Box text with youtube vid(s)
(defmethod widget 19 [{:keys [inner-html style vid-id] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "box-paragraph"}
               (build-rich-text data style)
               (om/build widget vid-id)))))

;Text with like box
(defmethod widget 20 [{:keys [inner-html style like-boxes] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "box-paragraph"}
               (build-rich-text data style)
               (apply dom/div #js {:style #js {:marginTop "10px"}}
                      (om/build-all widget like-boxes))))))

