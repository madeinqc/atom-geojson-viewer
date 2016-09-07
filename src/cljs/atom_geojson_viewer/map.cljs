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
  (defn constructor [uri title map-hash geojson]
    (set! @.uri uri)
    (set! @.title title)
    (set! @.map-hash map-hash)
    (set! @.full-editor (= (.indexOf map-hash "\\") -1))
    (when geojson (set! @.geojson geojson))
    (set! @.element
      (html-string->dom
        (str "<div id='" map-hash "' class='atom-geojson-viewer'></div>")))
    (set! (.. js/window -L -mapbox -accessToken) "pk.eyJ1IjoibWFkZWlucWMiLCJhIjoiY2lzZ3JncThtMDAwZzJ0bHMzNXVhc3I3MyJ9.j-3EBlxCyqXlzTNLRY5y6w"))

  (defn getTitle []
    @.title)

  (defn getURI []
    @.uri)

  (defn full-editor? []
    @.full-editor)

  (defn initialise []
    (set! @.map ((.. js/window -L -mapbox -map) @.map-hash "mapbox.dark")))

  (defn load-geojson [data]
    (.setGeoJSON (.. @.map -featureLayer) data)))
