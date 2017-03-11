(ns nnangpress.specs
  "For specs that cause circular dependencies, seems to cause the compiler some problems."
  (:require
    [cljs.spec :as s]))

(s/def ::widget-uid int?)
(s/def ::object-id string?)
(s/def ::widget-name string?)
(s/def ::inner-html vector?)

(s/def ::basic-mediumjs-wgt (s/keys :req-un [::widget-uid ::object-id ::widget-name ::inner-html]))

