(ns stuff.core
  (:gen-class))

(def circles-count 256)

(def dark-ellipses
  (repeatedly
    (Math/round (/ circles-count 3.))
    (fn []
      (def cy (Math/pow (rand) 2))
      (def rx (+ (* cy 0.1) 0.01))
      {:cx (rand) :cy cy :fill "#111" :rx rx :ry (/ rx 2)})))

(defn Ellipse [{cx :cx cy :cy fill :fill rx :rx ry :ry}]
  (str "<ellipse cx=\"" cx "\" cy=\"" cy "\" fill=\"" fill "\" rx=\"" rx "\" ry=\"" ry "\"/>"))

(defn Svg [{children :children}]
  (str
    "<svg height=\"100vmin\" viewbox=\"0 0 1 1\" width=\"100vmin\">"
      children
    "</svg>"))

(defn -main
  [& args]
  (println (Svg {:children (apply str (map Ellipse dark-ellipses))})))
