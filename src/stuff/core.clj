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
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
    "<svg height=\"1px\" viewbox=\"0 0 1 1\" version=\"1.1\" width=\"1px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">"
      children
    "</svg>"))

(defn -main
  [& args]
  (spit "texture.svg" (Svg {:children (apply str (map Ellipse dark-ellipses))})))
