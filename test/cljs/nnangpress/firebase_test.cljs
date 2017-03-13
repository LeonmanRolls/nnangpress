(ns nnangpress.firebase-test
  (:require 
    [cljs.spec.test :as ts :include-macros true]
    [cljs.test :refer-macros [deftest is testing run-tests]]
    [cljs.spec :as s]
    [nnangpress.testdata :as td]
    [nnangpress.firebase :as fb]))

(deftest firebase-empty->clj-empty
  (let [rslt (fb/firebase-empty->clj-empty 
               td/firebase->clojure-empty-test)]
    (is (empty? (get-in rslt [:children 0 :children])))
    (is (empty? (get-in rslt [:children 1 :children 0 :children])))
    (is (empty? (get-in rslt [:children 1 :children 1 :children])))))

(deftest clj-empty->firebase-empty
  (let [rslt (fb/clj-empty->firebase-empty 
               td/clojure->firebase-empty-test)]
    (is (= ["empty"] (get-in rslt [:children 0 :children])))
    (is (= ["empty"] (get-in rslt [:children 1 :children 0 :children])))
    (is (= ["empty"] (get-in rslt [:children 1 :children 1 :children])))))

