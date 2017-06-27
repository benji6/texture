(defproject texture "0.1.0-SNAPSHOT"
  :description ""
  :url "https://github.com/benji6/texture#readme"
  :dependencies [[org.clojure/clojure "1.8.0"]]
  :main ^:skip-aot stuff.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
