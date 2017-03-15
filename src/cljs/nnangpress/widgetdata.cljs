(ns nnangpress.widgetdata
  (:require 
    [om.dom :as dom :include-macros true]
    [cljs.spec :as s]
    [nnangpress.specs :as spcs]
    [nnangpress.utils :as u]))

(s/def ::inner-html (s/or :non-cursor vector? :cursor ::spcs/indexed-cursor))
(s/def ::widget-uid int?)
(s/def ::widget-name string?)
(s/def ::object-id string?)

(s/def ::widget-data-1 (s/keys :req-un [::inner-html ::widget-uid ::widget-name ::object-id]))

(s/def ::widget-data-16 (s/keys :req-un [::inner-html ::widget-uid ::widget-name ::object-id]))

(defmulti widget-data 
  "Data for widget components." 
  (fn [x] x))

(defmethod widget-data :default
  [data owner]
  (dom/div nil "Widget multimethod default"))

(defmethod widget-data 001  
  [_]
  {:widget-uid 001
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p>Change me</p>"]})

(defmethod widget-data 2 [_]
  {:widget-uid 2
   :object-id (u/uid)
   :imgs [{:object-id (u/uid)
           :url "http://placekitten.com/900/600"}
          {:object-id (u/uid)
           :url "http://placekitten.com/900/600"}]})

(defmethod widget-data 003 [_]
  {:widget-uid 003
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

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

(defmethod widget-data 005 [_]
  {:widget-uid 005
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]})

(defmethod widget-data 006 [_]
  {:widget-uid 006
   :object-id (u/uid)
   :widget-name "Standard image widget"
   :img "http://solariarchitects.com/img/leaderboards/group_photo_everyday_zoomed.jpg"
   :style {:width "60%"}})

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

(defmethod widget-data 8 [_]
  {:widget-uid 8
   :object-id (u/uid)
   :widget-name "Right Nav"
   :imgs []})

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

(defmethod widget-data 10 [_]
  {:widget-uid 10
   :object-id (u/uid)
   :widget-name "Show your sites"
   :user-sites [{:name (widget-data 1)
                 :description (widget-data 1)
                 :data {:a "placeholder"}}
                {:name (widget-data 1)
                 :description (widget-data 1)
                 :data {:a "placeholder"}}]})

(defmethod widget-data 11 [_]
  {:widget-uid 11 
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["<p> Hi there </p>"]
   :visible? true
   :tags [{:edit true} {:tag "Entrepreneurship"} {:tag "Open Source"} {:tag "Collaboration"} 
          {:tag "PHP"} {:tag "Javascript"} {:tag "Clojure(script)"} ]})

(defmethod widget-data 12 [_]
  {:widget-uid 12   
   :object-id (u/uid)
   :widget-name "Standard image widget"
   :tags [{:addtag true} {:clicked true :tagz "Entrepreneurship"}
          {:clicked true :tagz "Open Source"} {:clicked true :tagz "Clojurescript"}
          {:clicked true :tagz "Collaboration"} {:clicked true :tagz "PHP"}
          {:clicked true :tagz "Javascript"} {:clicked true :tagz "Clojure(script)"}
          {:clicked true :tagz "Clojure"}]})

(defmethod widget-data 13 [_]
  {:widget-uid 13
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :like-box-string "<div class=\"fb-page\" data-href=\"https://www.facebook.com/U1stGamesOfficial/\"  data-width=\"500\" data-height=\"300\" data-small-header=\"true\" data-adapt-container-width=\"true\" data-show-posts=\"false\" data-hide-cover=\"false\" data-show-facepile=\"false\"><div class=\"fb-xfbml-parse-ignore\"><blockquote cite=\"https://www.facebook.com/U1stGamesOfficial/\"><a href=\"https://www.facebook.com/U1stGamesOfficial/\">U1st Games</a></blockquote></div></div>"})

(defmethod widget-data 14 [_]
  {:widget-uid 14
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :youtube-video-id "S-0MmK73OdY"})

(defmethod widget-data 15 [_]
  {:widget-uid 15
   :object-id (u/uid)
   :widget-name "Standard text widget"})

(defmethod widget-data 16  
  [_]
  {:widget-uid 16
   :object-id (u/uid)
   :widget-name "Standard text widget"
   :inner-html ["Route Name"]})

