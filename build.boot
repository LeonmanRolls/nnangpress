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
                  [org.clojure/clojurescript "1.9.293"]
                  [org.omcljs/om "0.8.6"]
                  [org.clojure/core.async "0.2.395"]
                  [cljs-ajax "0.5.8"]
                  [replumb "0.2.4"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

(deftask build []
  (comp (speak)

        (cljs)
        ))

(deftask run []
  (comp (serve)
        (watch)
        (cljs-repl)
        (reload)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :none})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none :source-map true}
                 reload {:on-jsload 'nnangpress.app/init})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))


