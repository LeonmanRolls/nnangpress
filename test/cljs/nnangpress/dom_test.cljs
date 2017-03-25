(ns nnangpress.dom-test
  (:require 
    [cljs.spec.test :as ts :include-macros true]
    [cljs.test :refer-macros [deftest is testing run-tests]]
    [cljs.spec :as s]
    [nnangpress.dom :as ndom]))

(deftest basic-test
  (is (= "<div>hi</div>" (set! js/document.body.innerHTML "<div>hi</div>")))
  (is (= "" (set! js/document.body.innerHTML ""))))

(deftest attach-click-listener-by-id-test
  (let [_ (set! js/document.body.innerHTML "<div id=\"hi-there\">hi</div>")
        cb (ndom/attach-click-listener-by-id "hi-there" (fn [x] true))]
    (is (fn? cb))
    (is (cb))))
