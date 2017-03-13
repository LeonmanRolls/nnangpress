(ns nnangpress.testdata
  "Data primarily for testing. Causes less problems if placed here instead of test namespace."
  (:require 
    [nnangpress.navbars :as nvs]
    [nnangpress.monolith :as mn]
    [nnangpress.widgetdata :as wd]))

(def admin-route-widgets {:homepage (mn/new-route-widget) 
                          :userhome (mn/new-route-widget)})

(def all-navs-data [(map nvs/navbar-data (range 0 2))])

(def all-widgets-data [(map wd/widget-data (range 1 17))])

(def current-route ["/"])

(def edit-mode [false])

(def sidebar-data {:sidebar-page "base-menu"
                   :sidebar-visible false})

(def site-name ["Userhome"])

(def site-state "splash")

(def uid [""])

(def nangpress-data {:admin-route-widgets admin-route-widgets
                     :all-navs-data all-navs-data
                     :all-widgets-data all-widgets-data
                     :current-route current-route
                     :edit-mode edit-mode
                     :sidebar-data sidebar-data
                     :site-name site-name 
                     :site-state site-state 
                     :uid uid})

(def firebase->clojure-empty-test
  {:data "hi"
   :another "there"
   :children [{:data "hi"
               :another "there"
               :children ["empty"]}
              {:data "hi"
               :another "there"
               :children [{:data "hi"
                           :another "there"
                           :children ["empty"]}
                          {:data "hi"
                           :another "there"
                           :children ["empty"]}]}]})

(def clojure->firebase-empty-test
  {:data "hi"
   :another "there"
   :children [{:data "hi"
               :another "there"
               :children []}
              {:data "hi"
               :another "there"
               :children [{:data "hi"
                           :another "there"
                           :children []}
                          {:data "hi"
                           :another "there"
                           :children []}]}]})

