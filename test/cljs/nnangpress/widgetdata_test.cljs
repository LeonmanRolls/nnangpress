(ns nnangpress.widgetdata-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [cljs.spec :as s]
            [nnangpress.monolith :as mn]
            [nnangpress.widgetdata :as wd]))

(deftest widget-data-16
  (is (s/valid? ::wd/widget-data-16 (wd/widget-data 16))))

