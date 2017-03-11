(ns nnangpress.widgets-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [cljs.spec :as s]
            [nnangpress.monolith :as mn]
            [nnangpress.widgets :as wgt]))

(deftest new-site-template []
  (is (s/valid? ::mn/site-with-meta (wgt/new-site-template))))

