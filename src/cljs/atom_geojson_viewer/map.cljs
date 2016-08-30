(ns atom-geojson-viewer.map
  (:require [cljs.nodejs :as node]
            [atom-geojson-viewer.helper :refer [export-module html-string->dom]]
            [pylon.classes])
  (:use-macros [pylon.macros :only [defclass]])
  (:require-macros [hiccups.core :as hiccups :refer [html]]))

;; reference to atom shell API
(def ashell (node/require "atom"))

(def mapbox (node/require "mapbox.js"))

(defclass Map
  (defn constructor [title geojson]
    (set! @.title title)
    (when geojson (set! @.geojson geojson))
    (set! @.element
      (html-string->dom
        (html [:div#atom-geojson-viewer.atom-geojson-viewer])))
    (set! (.. js/window -L -mapbox -accessToken) "pk.eyJ1IjoibWFkZWlucWMiLCJhIjoiY2lzZ3JncThtMDAwZzJ0bHMzNXVhc3I3MyJ9.j-3EBlxCyqXlzTNLRY5y6w"))

  (defn getTitle []
    @.title)

  (defn initialise []
    ((.. js/window -L -mapbox -map) "atom-geojson-viewer" "mapbox.dark")))
