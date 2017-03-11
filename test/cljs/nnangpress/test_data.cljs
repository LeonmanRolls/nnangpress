(ns nnangpress.test-data
  (:require 
    [nnangpress.navbars :as nvs]
    [nnangpress.widgetdata :as wd]))

(def admin-route-widgets {:homepage ""
                          :userhome ""})

(def all-navs-data [(map nvs/navbar-data (range 0 2))])

(def all-widgets-data [(map wd/widget-data (range 1 17))])

(def current-route ["/"])

(def edit-mode [false])

(def sidebar-data {:sidebar-page "base-menu"
                   :sidebar-visible false})

(def site-name ["Userhome"])

(def site-state "splash")

(def uid [""])

(def nangpess-data {:admin-route-widgets admin-route-widgets
                    :all-navs-data all-navs-data
                    :all-widgets-data all-widgets-data
                    :current-route current-route
                    :edit-mode edit-mode
                    :sidebar-data sidebar-data
                    :site-name site-name 
                    :site-state site-state 
                    :uid uid})

