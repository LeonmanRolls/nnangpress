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

(deftest site-meta->renderable []
  (is (s/valid? ::mn/renderable (mn/site-meta->renderable td/nangpress-data (mn/new-site-template) 1))))

;Ensure that the site-id-vec gets updated with correct id coming from the site meta data.
(deftest site-meta->renderable-site-id-vec
  (let [new-site (mn/new-site-template)
        cache (mn/site-meta->renderable td/nangpress-data new-site 1)]
    (is (= (first (:site-id-vec cache)) (:site-id new-site)))))

(deftest nangpress-data->renderable []
  (is (s/valid? ::mn/renderable (mn/nangpress-data->renderable td/nangpress-data nil))))

(deftest new-site-template
   (is (s/valid? ::mn/site-with-meta (mn/new-site-template))))

(deftest new-route-widget []
  (is (s/valid? ::mn/route-widget (mn/new-route-widget))))

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

