(ns nnangpress.widgets
  (:require
    [om.core :as om :include-macros true :refer [set-state! update-state!]]
    [om.dom :as dom :include-macros true]
    [cljs.reader :as rdr]
    [nnangpress.utils :as u]
    [nnangpress.monolith :as mn]
    [nnangpress.core :as cre]
    [nnangpress.routing :as rt]
    [goog.dom :as gdom]
    [cljs.spec :as s]
    [clojure.set :as st]))

(declare widget-data-type)

(s/def ::widget-uid int?)
(s/def ::object-id string?)
(s/def ::widget-name string?)
(s/def ::inner-html vector?)
(s/def ::imgs vector?)
(s/def ::text vector?)
(s/def ::img string?)
(s/def ::user-sites vector?)
(s/def ::widget-data (s/multi-spec widget-data-type :widget-uid))

(defmulti widget-data-type :widget-uid)
(defmulti widget-data (fn [x] x))
(defmulti widget (fn [data owner] (:widget-uid data)))

(defmethod widget-data-type 1 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::inner-html]))

(defmethod widget-data 001 [_]
  {:widget-uid 001
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

;Dom Helpers ---
(defn get-node-by-id 
  "Get a dom node by id" 
  [id]
  (js/document.getElementById id))

(defn input-listener 
  "Listen to an input event on a contentEditable element" 
  [id cb]
  (-> 
    (get-node-by-id id)
    (.addEventListener "input" cb)))

;Move to monolith
(defn content-editable-updater 
  "Update cursor given the id of the corresponding contentEditable node" 
  [id data ikey]
  (input-listener 
    id  
    (fn [x] 
      (println "data: " data)
      (println "ikey: " ikey)
      (println "x: " (.-innerText (.-target x))) 
      (om/update! data ikey (-> x .-target .-innerText)))))
;Dom Helpers ---

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

(defmethod widget-data-type 2 [_]
  (s/keys :req-un [::widget-uid ::object-id ::imgs]))

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
        #_(slider-init uid)))

    om/IDidUpdate
    (did-update [_ _ _]
      (let [uid (om/get-state owner :uid)
            slider-init (om/get-state owner :slider-init)]
        #_(slider-init uid)))

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

(defmethod widget-data-type 3 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::inner-html]))

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

(defmethod widget-data-type 6 [_]
  (s/keys :req-un [::widget-uid ::object-id ::widget-name ::img]))

(defmethod widget-data 006 [_]
  {:widget-uid 006
   :object-id (u/uid)
   :widget-name "Standard image widget"
   :img "http://solariarchitects.com/img/leaderboards/group_photo_everyday_zoomed.jpg"})

;Simple Image
(defmethod widget 006 [{:keys [img object-id] :as data} owner]
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
   :widget-name "Sign in widget"})

;Sign in
(defmethod widget 9 [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:advertise? false})

    om/IRender
    (render [_]
      (let [all-data (om/observe owner (mn/all-data))
            uiconfig #js {:callbacks
                          #js {:signInSuccess (fn [user credential redirectUrl]
                                                (println "sucessful sign in")
                                                (.dir js/console user)
                                                (->
                                                  (js/firebase.database)
                                                  (.ref (str "users/" (.-uid user)))
                                                  (.once "value")
                                                  (.then (fn [snapshot]
                                                           (println (js->clj (.-data (.val snapshot)) :keywordize-keys true))
                                                           (om/update! all-data (rdr/read-string (.-data (.val snapshot)))))))
                                                false)}
                          :signInFlow "popup"
                          :signInOptions (array
                                           #js {:provider
                                                js/firebase.auth.EmailAuthProvider.PROVIDER_ID})
                          :tosUrl "https://google.com"
                          :credentialHelper js/firebaseui.auth.CredentialHelper.NONE}]

        (dom/div #js {:style #js {:textAlign "center"}}
                 "hi there"
                 (dom/div #js {:id "#firebase"} "")
                 (dom/button
                   #js {:onClick (fn [_] (.start
                                           (js/firebaseui.auth.AuthUI. (js/firebase.auth))
                                           "#firebase"
                                           uiconfig))}
                   "Sign in"))))))

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

;Your sites
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
                                      #js {:onClick (fn [_] (mn/change-site @data))}
                                      "Go to site")))))})

    om/IWillMount
    (will-mount [_]
      (let [uid-obs (om/observe owner (mn/uid))
            advertise? (om/get-state owner :advertise?)]
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
   :tags [{:tag "Entrepreneurship"} {:tag "Open Source"} {:tag "Collaboration"} {:tag "PHP"}
          {:tag "Javascript"} {:tag "Clojure(script)"} {:edit true}]})

(defmulti tag 
  "Project tags"
  (fn [data owner] (contains? data :tag)))

(defmethod tag true
  [data owner]
  (reify 
    om/IRender 
    (render [_]
      (dom/li #js {:style #js {:float "left" :background "#CE4072" :paddingRight "10px" 
                               :paddingLeft "10px" :margin "0px"}} 
              (:tag data)))))

(defmethod tag false
  [data owner]
  (reify 
    om/IRender 
    (render [_]
      (dom/li #js {:style #js {:float "left" :background "#CE4072" :paddingRight "10px" 
                               :paddingLeft "10px" :marginLeft "10px"}} 
              "Add Tag +"))))

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

;Project widget
(defmethod widget 11 [{:keys [tags visible?] :as data} owner]
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

        (dom/div #js {:style #js {:display (if (tag-intersect? owner tags) "inherit" "none")}} 
                 (apply dom/ul #js {:style #js {:display "inline-block" :margin "0px"}} 
                        (om/build-all tag tags))
                 (dom/div #js {:id (.toString uuid)
                               :style #js {:margin-top "-10px"}
                               :className "box-paragraph"
                               :dangerouslySetInnerHTML #js {:__html (first (:inner-html data))}}))))))

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
      (content-editable-updater (om/get-state owner :uid) data :tagz))

    om/IRenderState
    (render-state [_ {:keys [uid tags] :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (dom/li #js {:onClick (fn [x] 
                                (.dir js/console x)
                                (when (not (first edit-mode-obs))
                                  (om/transact! data :clicked (fn [bool] (not bool)))))
                     :style #js {:float "left" :border "3px solid #CE4072" :position "relative"
                                 :padding "5px" :margin "5px" :cursor "pointer"
                                 :background (if clicked "#CE4072" "inherit")}} 
                (when (first edit-mode-obs)
                  (dom/img #js {:style #js {:width "20px" :right "-10px" :top "-10px" 
                                            :position "absolute"}
                                :src "http://www.stabilita.sk/media/image/cross-icon.png"
                                :onClick (fn [_] 
                                           (om/transact! 
                                             tags 
                                             (fn [xs]
                                               (vec (remove #(= (:tagz %) tagz) xs)))))}))
                (dom/p #js {:id uid :contentEditable (first edit-mode-obs)} tagz))))))

(defmethod select-tag false 
  [{:keys [tagz clicked] :as data} owner]
  (reify 
    om/IRenderState
    (render-state [_ {:keys [tags] :as state}]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))]
        (if 
          (first edit-mode-obs)
          (dom/li #js {:onClick (fn [_] 
                                  (om/transact! 
                                    tags 
                                    (fn [tags] 
                                      (vec (conj (conj (rest tags) default-tag) (first tags))))))
                       :style #js {:float "left" :border "3px solid #CE4072" 
                                   :padding "5px" :margin "5px" :cursor "pointer"
                                   :background (if clicked "#CE4072" "inherit")}} 
                  "Add Tag +") 
          (dom/div nil ""))))))

;Tag Selector
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
                        (om/build-all select-tag tags {:state {:tags tags}}))

                 #_(when (and (first @edit-mode-obs) (not advertise?))
                     (dom/input #js {:value (:img data)
                                     :style #js {:width "100%"}
                                     :onChange (fn [e]
                                                 (om/update! data :img (.. e -target -value)))})))))))

(defn admin-toolbar [data owner]
  (reify
    om/IRender
    (render [_]
      (let [user-email-obs (om/observe owner (mn/user-email))
            site-name-obs (om/observe owner (mn/site-name))]
        (dom/div #js {:className "admin-toolbar"}
                 (dom/b nil "Welcome to Nnangpress alpha | ")
                 (dom/button #js {:onClick (fn [_] (mn/toggle-edit-mode))}
                             "Toggle edit mode")
                 (dom/b nil (str " | Username:  " (first @user-email-obs)))
                 (dom/b nil (str " | Site name:  " (first @site-name-obs) " | " ))
                 (dom/button #js {:onClick (fn [_] (mn/new-site))}
                             "Save new site")
                 (dom/button #js {:onClick (fn [_] (mn/save-site-data))}
                             "Update current site"))))))

(defn select-widget-wrapper [{:keys [widget-name widget-uid] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (let [routes-map-obs (om/observe owner (mn/routes-map))
            current-route-obs (om/observe owner (mn/current-route))
            current-widgets (mn/current-widgets
                              (clojure.string/split (first @current-route-obs) #"/")
                              routes-map-obs)]

        (dom/div #js {:className "selectWidget"}
                 widget-name
                 (dom/button #js {:onClick (fn [_] (om/transact!
                                                     current-widgets
                                                     (fn [x]
                                                       (conj x (widget-data widget-uid)))))}
                             "Add widget")
                 (om/build widget data {:init-state {:advertise? true}}))))))

(defn all-widget-wrapper [{:keys [object-id] :as data} owner]
  (reify
    om/IRender
    (render [_]
      (let [edit-mode-obs (om/observe owner (mn/edit-mode))
            routes-map-obs (om/observe owner (mn/routes-map))
            current-route-obs (om/observe owner (mn/current-route))
            current-widgets (mn/current-widgets
                              (clojure.string/split (first @current-route-obs) #"/")
                              routes-map-obs)]
        (dom/div nil
                 (when (first @edit-mode-obs)
                   (dom/button #js{:onClick (fn [_]
                                              (om/transact!
                                                current-widgets
                                                (fn [x]
                                                  (vec (remove #(= (:object-id %) object-id) x)))))}
                               "Delete"))
                 (om/build widget data))))))

