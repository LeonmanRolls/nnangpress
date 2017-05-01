(set-env!
  :source-paths    #{"src/cljs"}
  :resource-paths  #{"resources"}
  :dependencies '[[org.clojure/test.check "0.9.0"]
                  [adzerk/boot-cljs          "1.7.228-2"  :scope "test"]
                  [adzerk/boot-cljs-repl     "0.3.3"      :scope "test"]
                  [adzerk/boot-reload        "0.4.13"      :scope "test"]
                  [pandeiro/boot-http        "0.7.6"      :scope "test"]
                  [com.cemerick/piggieback   "0.2.1"      :scope "test"]
                  [org.clojure/tools.nrepl   "0.2.12"     :scope "test"]
                  [weasel                    "0.7.0"      :scope "test"]
                  [it.frbracch/boot-marginalia "0.1.3-1" :scope "test"]
                  [crisptrutski/boot-cljs-test "0.3.0" :scope "test"]
                  [org.clojure/clojurescript "1.9.521"]
                  [org.omcljs/om "0.8.6"]
                  [org.clojure/core.async "0.2.395"]
                  [cljs-ajax "0.5.8"]
                  [replumb "0.2.4"]
                  [com.cemerick/url "0.1.1"]
                  [cljsjs/firebase "3.5.3-1"]
                  [cljsjs/jquery "1.12.4-0"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[pandeiro.boot-http    :refer [serve]]
  '[crisptrutski.boot-cljs-test :refer [test-cljs]]
  '[it.frbracch.boot-marginalia :refer [marginalia]])

(deftask testing [] (merge-env! :source-paths #{"test/cljs"}) identity)

;boot test-reload test-cljs

(deftask build []
  (comp (speak)
        (cljs)))

(deftask run []
  (comp 
    (serve)
    (watch)
    (cljs-repl)
    (reload)
    (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced
                       :compiler-options 
                       {:infer-externs true
                        :foreign-libs [{:file "resources/js/firebaseui.js"
                                        :provides ["firebase.ui"]}
                                       {:file "resources/js/html2canvas.js"
                                        :provides ["html.to.canvas"]}
                                       {:file "resources/js/accordion.js"
                                        :provides ["accordi.on"]}
                                       {:file "resources/js/rangy-core.js"
                                        :provides ["rangy.core"]}
                                       {:file "resources/js/rangy-classapplier.js"
                                        :provides ["rangy.classapplier"]
                                        :requires ["rangy.core"]}
                                       {:file "resources/js/undo.js"
                                        :provides ["un.do"]}
                                       {:file "resources/js/medium.js"
                                        :provides ["med.ium"]}
                                       {:file "resources/js/TweenLite.js"
                                        :provides ["tween.lite"]}
                                       {:file "resources/plugins/megafolio/source/jquery.themepunch.plugins.min.js"
                                        :provides ["megafolio.plugins"]
                                        :requires ["cljsjs.jquery"]}
                                       {:file "resources/plugins/megafolio/source/jquery.themepunch.megafoliopro.js"
                                        :provides ["megafolio.pro"]
                                        :requires ["cljsjs.jquery"]}
                                       {:file "resources/js/jquery.royalslider.min.js"
                                        :provides ["royal.slider"]
                                        :requires ["cljsjs.jquery"]}]}})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :advanced 
                       :source-map false 
                       :compiler-options 
                       {:infer-externs true
                      ;  :externs ["resources/externs.js"]
                        :foreign-libs [{:file "resources/js/firebaseui.js"
                                        :provides ["firebase.ui"]}
                                       {:file "resources/js/html2canvas.js"
                                        :provides ["html.to.canvas"]}
                                       {:file "resources/js/accordion.js"
                                        :provides ["accordi.on"]}
                                       {:file "resources/js/rangy-core.js"
                                        :provides ["rangy.core"]}
                                       {:file "resources/js/rangy-classapplier.js"
                                        :provides ["rangy.classapplier"]
                                        :requires ["rangy.core"]}
                                       {:file "resources/js/undo.js"
                                        :provides ["un.do"]}
                                       {:file "resources/js/medium.js"
                                        :provides ["med.ium"]}
                                       {:file "resources/js/TweenLite.js"
                                        :provides ["tween.lite"]}
                                       {:file "resources/plugins/megafolio/source/jquery.themepunch.plugins.min.js"
                                        :provides ["megafolio.plugins"]
                                        :requires ["cljsjs.jquery"]}
                                       {:file "resources/plugins/megafolio/source/jquery.themepunch.megafoliopro.js"
                                        :provides ["megafolio.pro"]
                                        :requires ["cljsjs.jquery"]}
                                       {:file "resources/js/jquery.royalslider.min.js"
                                        :provides ["royal.slider"]
                                        :requires ["cljsjs.jquery"]}
                                       ]}}
                 reload {:on-jsload 'nnangpress.app/init})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))

(deftask testing []
  (set-env! :source-paths #(conj % "test/cljs"))
  identity)

(ns-unmap 'boot.user 'test)

(deftask test [] 
  (comp (testing)
        (test-cljs :js-env :phantom
                   :exit? true)))

(deftask auto-test []
  (comp (testing)
        (watch)
        (test-cljs :js-env :phantom)))

