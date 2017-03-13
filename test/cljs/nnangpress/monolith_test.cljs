(ns nnangpress.monolith-test
  (:require 
    [cljs.spec.test :as ts :include-macros true]
    [cljs.test :refer-macros [deftest is testing run-tests]]
    [cljs.spec :as s]
    [nnangpress.testdata :as td]
    [nnangpress.monolith :as mn]
    [nnangpress.widgets :as wgt]))

(deftest site-meta->renderable []
  (is (s/valid? ::mn/renderable (mn/site-meta->renderable td/nangpress-data (mn/new-site-template) 1))))

(deftest nangpress-data->renderable []
  (is (s/valid? ::mn/renderable (mn/nangpress-data->renderable td/nangpress-data nil))))

(deftest new-site-template
   (is (s/valid? ::mn/site-with-meta (mn/new-site-template))))

(deftest new-route-widget []
  (is (s/valid? ::mn/route-widget (mn/new-route-widget))))

