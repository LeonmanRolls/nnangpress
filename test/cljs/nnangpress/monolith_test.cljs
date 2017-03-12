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

(comment 

  (:route-widget (mn/new-site-template))

  (mn/nangpress-data->renderable)

  (cljs.pprint/pprint (mn/site-meta->renderable 
                        td/nangpress-data
                        (mn/new-site-template)))

  (s/valid? 
    ::mn/renderable 
    (mn/site-meta->renderable 
      td/nangpress-data
      (mn/new-site-template)))

  (s/explain 
    ::mn/renderable 
    (mn/site-meta->renderable 
      td/nangpress-data
      (:route-widget (mn/new-site-template))))

  (keys 
    (mn/site-meta->renderable 
      td/nangpress-data
      (:route-widget (mn/new-site-template))))

  (:route-widget 
    (mn/site-meta->renderable 
      td/nangpress-data
      (:route-widget (mn/new-site-template)))
    )

  (s/valid? 
    ::mn/renderable 
    (assoc 
      td/nangpress-data 
      :route-widget 
      (:route-widget (mn/new-site-template))))

  (s/explain 
    ::mn/renderable 
    (assoc 
      (mn/nangpress-data->renderable td/nangpress-data)
      :route-widget 
      (:route-widget (mn/new-site-template))))

  )

