(ns atom-geojson-viewer.helper)

(defn html-string->dom
  [html]
  (let [template (.createElement js/document "template")]
    (set! (.-innerHTML template) html)
    (.. template -content -firstChild)))

(defn export-module
  [module]
  (set! (.-exports js/module) module))
