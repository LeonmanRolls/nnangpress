(ns nnangpress.monolith-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [cljs.spec.test :as ts :include-macros true]
    [cljs.test :refer-macros [deftest is testing run-tests async]]
    [cljs.spec :as s]
    [cljs.core.async :refer [put! chan <!]]
    [nnangpress.testdata :as td]
    [nnangpress.monolith :as mn]
    [nnangpress.widgets :as wgt]))

(deftest new-site-template
   (is (s/valid? ::mn/site-with-meta (mn/new-site-template))))

(deftest new-route-widget []
  (is (s/valid? ::mn/route-widget (mn/new-route-widget))))

;For correct functioning of logo-text editability.
(deftest new-route-widget-logo-widget []
  (is (= 1 (-> (mn/new-route-widget) :logo-data :logo-text :widget-uid))))

(deftest get-user-sites []
  (async done
         (go 
           (let [c (chan)]
             (mn/get-user-sites "test" c)
             (is (s/valid? (s/coll-of ::mn/site-with-meta) (<! c)))))
         (done)))

(deftest user-site-index []
  (async done
         (go 
           (let [c (chan)]
             (is (= 0 (<! (mn/user-site-index "test" "91e87144-cdb9-417a-9074-b7b048771f08"))))))
         (done)))

