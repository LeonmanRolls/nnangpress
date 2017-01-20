(ns nnangpress.app
  (:import [goog.history Html5History EventType])
  (:require-macros [cljs.core.async.macros :refer  [go go-loop]])
  (:require [om.core :as om :include-macros true :refer [set-state! update-state!]]
            [om.dom :as dom :include-macros true]
            [clojure.spec :as s]
            [cljs.core.async :as cas :refer [>! <! put! chan pub sub close!]]
            [cljs.reader :as rdr]
            [goog.events :as ev]
            [goog.dom :as gdom]
            [ajax.core :refer [GET POST]]
            [replumb.core :as replumb]))

(enable-console-print!)

(declare edit-mode widget active-route)

;Utils Start -----
(defn tree-seq-path [branch? children root & [node-fn]]
  (let [node-fn (or node-fn identity)
        walk (fn walk  [path node]
               (let [new-path (conj path (node-fn node))]
                 (lazy-seq
                   (cons new-path
                         (when (branch? node)
                           (mapcat (partial walk new-path) (children node)))))))]
    (walk [] root)))

(defn string-contains? [x y]
  (not= -1 (.indexOf x y)))

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec  (concat  (subvec coll 0 pos)  (subvec coll  (inc pos)))))

(defn uid []
  (.toString (random-uuid)))
;Utils End -----

;Core Start -----
(defn basic-route [] {:route-name (str "/parent" (subs (uid) 0 3))
                      :bg-img "from_uss.jpg"
                      :grey-bg? true
                      :nav-hint ["nav hint"]
                      :nav-hint-style {:color "white"}
                      :widgets [{:widget-uid 001
                                 :object-id (uid) 
                                 :widget-name "Standard text widget"
                                 :inner-html ["<p> Hi there </p>"]}]
                      :children [{:route-name (str "/child" (subs (uid) 0 3))
                                  :bg-img "from_uss.jpg"
                                  :grey-bg? true
                                  :nav-hint ["nav hint"]
                                  :nav-hint-style {:color "white"}
                                  :widgets [{:widget-uid 001
                                             :object-id (uid) 
                                             :widget-name "Standard text widget"
                                             :inner-html ["<p> Hi there </p>"]}]
                                  :children []}]})

(defn remove-element
  "Requires label to be passed in as state"
  [data owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [label] :as state}]
      (let [ref-id (uid)]
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
                                                          (vec-remove x widget-pos)))))}
                   "Submit"))))))

(defn simple-input-cursor [value cursor korks]
  (dom/input #js {:value value
                  :style #js {:width "100%"}
                  :onChange (fn [e]
                              (om/update! cursor korks (.. e -target -value)))}))

(defn admin-toolbar [data owner]
  (reify 
    om/IRender
    (render [_]
      (let []
        (dom/div #js{:className "admin-toolbar"} 
                 (dom/b nil "Welcome to Nnangpress alpha ")
                 (dom/button #js {:onClick (fn [_] 
                                             (println "clicked")
                                             (om/transact! 
                                               (edit-mode) 
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
      (let [edit-mode-obs (om/observe owner (edit-mode))]
        (dom/div nil 
                 (when (first @edit-mode-obs)
                   (dom/button #js{:onClick (fn [_] 
                                              (om/transact! 
                                                current-widgets 
                                                (fn [x]
                                                  (vec
                                                    (remove #(= (:object-id %) object-id) x)))))} 
                               "Delete"))
                 (om/build widget data))))))

(def monolith (atom {}))

(defn monolith-watcher-init [monolith]
  (add-watch monolith :watcher
             (fn  [key atom old-state new-state]
               (let [uid "SGXvf26OEpeVDQ79XIH2V71fVnT2"
                     user-data-ref (->
                                     (js/firebase.database)
                                     (.ref (str "users/" uid)))]
                 (prn "-- Atom Changed --")
                 (->
                   user-data-ref
                   (.set #js {:username "wellwell"
                              :email "leon.talbert@gmail.com"
                              :data  (pr-str @monolith)}))))))
;Core End -----
(defn ref-cursor-init [monolith]
  (defn edit-mode []
    (om/ref-cursor (:edit-mode (om/root-cursor monolith))))

  (defn all-widgets-data []
    (om/ref-cursor (:all-widgets-data (om/root-cursor monolith))))

  (defn routes-map []
    (om/ref-cursor (:routes-map (om/root-cursor monolith))))

  (defn current-route []
    (om/ref-cursor (:current-route (om/root-cursor monolith))))

  (defn logo-text []
    (om/ref-cursor (:logo-text (om/root-cursor monolith))))

  (defn logo-hint []
    (om/ref-cursor (-> (om/root-cursor monolith) :routes-map :nav-hint)))

  (defn active-route []
    (om/ref-cursor (-> (om/root-cursor monolith) :active-route))))

;Routing
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
  (let [paths (tree-seq-path
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
      (om/update! (current-route) [new-path]))
    (.setToken history new-path)))

(defn js-link [routes-map route-name e]
  (do
    (.preventDefault e)
    (nav! route-name routes-map)))

(defn nav-hint [data owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [:nav-hint :nav-hint-style]} (om/observe owner (active-route))]
        (dom/div #js {:className "nav-hint-outer"}
                 (dom/div #js {:className "nav-hint-inner"
                               :style (clj->js nav-hint-style)}
                          (first nav-hint)))))))

(defn nav-menu-logo
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [logo-text-obs (om/observe owner (logo-text))
            routes-map-obs (om/observe owner (routes-map))]
        (dom/h1 #js {:className "logo"
                     :onClick (partial js-link @routes-map-obs "/")}
                (first logo-text-obs))))))

(defn nav-menu
  [{:keys [:route-name :background :widgets :children] :as all} owner]

  (reify
    om/IInitState
    (init-state  [_]
      {:depth 0
       :max-depth 3
       :str-beautify (fn [s]
                       (->
                         (subs s 1)
                         (clojure.string/replace #"-" " ")))})

    om/IRenderState
    (render-state [_ {:keys [depth max-depth str-beautify] :as state}]
      (let [curr-route (first (om/observe owner (current-route)))
            active? (string-contains? curr-route route-name)
            routes-map-obs (om/observe owner (routes-map))]

        (cond
          (> depth max-depth) nil

          (= "/" route-name)
          (apply dom/ul #js {}
                 (concat 
                   (om/build-all nav-menu children {:state {:depth (inc depth)}})
                   [(dom/button #js {:onClick (fn [_]   
                                                (om/transact! 
                                                  children 
                                                  (fn [children]
                                                    (conj children (basic-route)))))} "Add route")
                    (om/build remove-element children 
                              {:state {:label "remove nth route"}})]))

          (and (not (empty? children)) (> depth 1))
          (dom/div #js {:style #js {:position "relative"}}

                   (dom/li #js {:className (str "sub-nav-li ")
                                :onClick (partial js-link @routes-map-obs route-name)}

                           (dom/div #js {:className (str (when active? "active-text"))}
                                    (str-beautify route-name))))

          (not (empty? children))
          (dom/div #js {:style #js {:position "relative"}}

                   (dom/li #js {:className (str "nav-li " (when active? "active-li"))
                                :onClick (partial js-link @routes-map-obs route-name)}

                           (dom/div #js {:className (str (when active? "active-text"))}
                                    (str-beautify route-name)))

                   (when active?
                     (apply dom/ul #js {:className "nav-ul"}
                            (om/build-all nav-menu children {:state {:depth (inc depth)}}))))

          :else
          (dom/li #js {:className (str "sub-nav-li " (when active? "active-text"))
                       :onClick (partial js-link @routes-map-obs route-name)}

                  (str-beautify route-name)))))))

(defn main-nav-view [{:keys [:routes-map] :as data} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "the-nav" :className "main-nav"}

               (dom/div #js {:className "nav-aux"}
                        (om/build nav-hint {}))

               (dom/div #js {:className "nav-menu"}
                        (om/build nav-menu-logo {})
                        (om/build nav-menu routes-map))))))

(defmulti widget-data (fn [x] x))

(defmulti widget (fn [data owner] (:widget-uid data)))

(defmethod widget-data 001 [_]
  {:widget-uid 001
   :object-id (uid)
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
            edit-mode-obs (om/observe owner (edit-mode))]

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
            edit-mode-obs (om/observe owner (edit-mode))]

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
      (let [edit-mode-obs (om/observe owner (edit-mode))]

        (dom/div #js {:id (.toString uuid)
                      :style #js {:color "black"}
                      :dangerouslySetInnerHTML #js {:__html (first (:inner-html data))}})))))

(defmethod widget-data 2 [_]
  {:widget-uid 2
   :object-id (uid)
   :imgs [{:object-id (uid) 
           :url "http://placekitten.com/900/600"} 
          {:object-id (uid)
           :url "http://placekitten.com/900/600"}]})

(defmethod widget 002 [{:keys [imgs] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:uid (uid)
       :advertise? false
       :img-partial (fn [{:keys [url] :as data}] 
                      (str "<img class=\"rsImg\" src=\"" url "\"/>"))
       :default-img (fn []  
                      {:object-id (uid)
                       :url "http://placekitten.com/900/600"})
       :slider-init (fn [uid]
                      (println "slider-init: " uid)
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
      (let [edit-mode-obs (om/observe owner (edit-mode))]
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
                                                    (simple-input-cursor (:url data) data :url)     
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
   :object-id (uid)
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
            edit-mode-obs (om/observe owner (edit-mode))]

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
            edit-mode-obs (om/observe owner (edit-mode))]

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
      (let [edit-mode-obs (om/observe owner (edit-mode))]

        (dom/div #js {:id (.toString uuid)
                      :className "box-paragraph"
                      :dangerouslySetInnerHTML #js {:__html (first (:inner-html data))}})))))

(defmethod widget-data 004 [_]
  {:widget-uid 004
   :object-id (uid)
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
            edit-mode-obs (om/observe owner (edit-mode))]
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
                            (om/build remove-element text 
                                      {:state {:label "remove accordion section"}}))))))))

(defmethod widget-data 005 [_]
  {:widget-uid 005
   :object-id (uid)
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
            edit-mode-obs (om/observe owner (edit-mode))]

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
            edit-mode-obs (om/observe owner (edit-mode))]

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
   :object-id (uid)
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
            edit-mode-obs (om/observe owner (edit-mode))]

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
   :object-id (uid)
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
                                                 (simple-input-cursor (:title data) data :title)
                                                 (simple-input-cursor (:text data) data :text))
                                        (simple-input-cursor (:data-src data) data :data-src)))))}))

    om/IDidUpdate
    (did-update  [this prev-props prev-state]
      (->
        (js/$ ".megafolio-container")
        (.megafoliopro #js {})))

    om/IDidMount
    (did-mount [_]
      (let [uuid (om/get-state owner :uuid)
            routes-map-obs (om/observe owner (routes-map))]
        (->
          (js/$ ".megafolio-container")
          (.click (fn [event]
                    (js-link
                      @routes-map-obs
                      (first (clojure.string/split (-> event .-target .-id) #"--"))
                      event))))
        (->
          (js/$ ".megafolio-container")
          (.megafoliopro #js {}))))

    om/IRenderState
    (render-state [_ {:keys [edit-fn widget-img widget-text text-or-img default-img default-text advertise?]
                      :as state}]
      (let [edit-mode-obs (om/observe owner (edit-mode))]
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

                            (om/build remove-element imgs 
                                      {:state {:label "remove nth element"}}))))))))

(defmethod widget-data 8 [_]
  {:widget-uid 8
   :object-id (uid)
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
                              :onClick (partial js-link routes-map route) }
                         (dom/div #js {:className (when active? "active-text")}
                                  label)))))})

    om/IRenderState
    (render-state [_ {:keys [uuid li] :as state}]
      (let [routes-map-obs (om/observe owner (routes-map))]
        (apply dom/ul #js {:className "right-nav"}
               (om/build-all li lis {:state {:routes-map routes-map-obs}}))))))

(defn main-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:add-widget (fn [cursor]
                     (let [widget-id (js/parseInt
                                       (.-value
                                         (om/get-node owner "add-widget")))]
                       (om/transact! cursor (fn [x]
                                              (conj x (widget-data widget-id))))))
       :remove-widget (fn [cursor]
                        (let [widget-pos (js/parseInt
                                           (.-value
                                             (om/get-node owner "remove-widget")))]
                          (om/transact! cursor (fn [x]
                                                 (vec-remove x widget-pos)))))})

    om/IRenderState
    (render-state [_ {:keys [add-widget remove-widget] :as state}]
      (let [all-widgets-data-obs (om/observe owner (all-widgets-data))
            edit-mode-obs (om/observe owner (edit-mode))]
        (dom/div #js {:className "main-view"}

                 (apply dom/div nil
                        (om/build-all all-widget-wrapper data
                                      {:state {:current-widgets data}}))

                 (when (first @edit-mode-obs)
                   (dom/div #js {:className "edit"}

                            (apply dom/div nil 
                                   (om/build-all select-widget-wrapper all-widgets-data-obs
                                                 {:state {:cursor data}})))))))))

(defn master [{:keys [:routes-map :current-route :active-route] :as data} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [splitter (fn [x] (last (clojure.string/split x #"/")))]
        {:flatten-routes (fn [routes-map]
                           (tree-seq
                             #(contains? % :children)
                             #(:children %)
                             routes-map))

         :set-bg-img (fn [bg-img]
                       (cond
                         (string-contains? bg-img "#")
                         (do
                           (set! (-> js/document .-body .-background) "")
                           (set!
                             (-> js/document .-body .-style .-backgroundColor)
                             bg-img))
                         (string-contains? bg-img "linear")
                         (set! (-> js/document .-body .-background) bg-img)
                         :file
                         (set!
                           (-> js/document .-body .-background)
                           (str "/img/backgrounds/" bg-img))))

         :get-active-route (fn [flat-routes current-route]
                             (->>
                               flat-routes
                               (filter
                                 #(=
                                    (splitter (first current-route))
                                    (splitter (:route-name %))))
                               first))}))

    om/IRenderState
    (render-state [_ {:keys [flatten-routes set-bg-img get-active-route] :as state}]
      (let [{:keys [:bg-img :widgets] :as fresh-active-route} (get-active-route
                                                                (flatten-routes routes-map)
                                                                current-route)]

        (om/update! active-route @fresh-active-route)
        (set-bg-img bg-img)
        (if
          (:grey-bg? fresh-active-route)
          (-> (js/$ "body" ) (.addClass "grey-out"))
          (-> (js/$ "body" ) (.removeClass "grey-out")))
        (dom/div nil
                 (om/build admin-toolbar {})                                   
                 (om/build main-view widgets)
                 (om/build main-nav-view data))))))

(defn init []
  (let [uid "SGXvf26OEpeVDQ79XIH2V71fVnT2"
        uiconfig #js {:callbacks #js {:signInSuccess (fn [user credential redirectUrl]
                                                       (println "sucessful sign in")
                                                       (.dir js/console user)
                                                       false)}
                      :signInFlow "popup"
                      :signInOptions (array #js {:provider js/firebase.auth.EmailAuthProvider.PROVIDER_ID})
                      :tosUrl "https://google.com"
                      :credentialHelper js/firebaseui.auth.CredentialHelper.NONE}
        ui (js/firebaseui.auth.AuthUI. (js/firebase.auth))
        user-data-ref (->
                        (js/firebase.database)
                        (.ref (str "users/" uid)))]

    (ref-cursor-init monolith)

    #_(->
        (js/firebase.database)
        (.ref (str "users/" uid))
        (.once "value")
        (.then (fn [snapshot]
                 (reset! monolith (rdr/read-string (.-data (.val snapshot))))
                 (om/root master monolith
                          {:target (. js/document (getElementById "super-container"))}))))

    (GET "/edn/defaultdata.edn"
           {:handler (fn [resp]
                       (reset! monolith (rdr/read-string resp))
                       (om/root master monolith
                                {:target (. js/document
                                            (getElementById "super-container"))}))})))

(comment

  (defmethod widget 000 [data owner]
    (reify
      om/IInitState
      (init-state [_]
        {:uuid (random-uuid)})

      om/IRenderState
      (render-state [_ {:keys [uuid] :as state}]
        (dom/div nil "Skeleton Widget"))))

  )

