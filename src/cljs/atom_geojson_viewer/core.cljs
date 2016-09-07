(ns atom-geojson-viewer.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [cljs.nodejs :as node]
            [clojure.string :as str]
            [atom-geojson-viewer.map :refer [Map]]
            [atom-geojson-viewer.helper :refer [html-string->dom]]))

;; reference to atom shell API
(def ashell (node/require "atom"))
;; js/atom is not the same as require 'atom'.
(def commands (.-commands js/atom))
(def workspace (.-workspace js/atom))

(def url (node/require "url"))

;; get atom.CompositeDisposable so we can work with it
(def composite-disposable (.-CompositeDisposable ashell))

;; Atom for holding all disposables objects
(def disposables (atom []))

;; Initialise new composite-disposable so we can add stuff to it later
(def subscriptions (new composite-disposable))
(swap! disposables conj subscriptions)

(defn toggle []
  (let [active-editor (.getActiveTextEditor workspace)
        text (.getSelectedText active-editor)
        full-editor (empty? text)
        text (if full-editor
                (.getText active-editor)
                text)
        geojson (.parse js/JSON text)
        url-hash (if full-editor
                  (str (.-id active-editor))
                  (str (.-id active-editor)
                       "/"
                       (hash (str text (.getPath active-editor)))))
        _ (println "Opening URL: " (str "atom-geojson-viewer://" url-hash))
        promise (.open workspace (str "atom-geojson-viewer://" url-hash)
                  (clj->js {:split "right"
                            :searchAllPanes true}))]
    ; TODO Clean that part and move to map everything that have to do with the state or events
    (.done promise
      (fn [atom-geojson-viewer]
        (.initialise atom-geojson-viewer)
        (when (.full-editor? atom-geojson-viewer)
          (.onDidStopChanging active-editor
            (fn []
              (let [new-text (.getText active-editor)
                    new-geojson (.parse js/JSON new-text)]
                (.load-geojson atom-geojson-viewer new-geojson)))))))
    (.then promise
      (fn [atom-geojson-viewer]
        (.load-geojson atom-geojson-viewer geojson)))))

;; Dispose all disposables
(defn deactivate []
  (.log js/console "Deactivating atom-geojson-viewer...")
  (doseq [disposable @disposables]
    (.dispose disposable)))

(defn serialize []
  nil)

(defn activate [state]
  (.log js/console "Hello World from atom-geojson-viewer")

  (.add subscriptions
    (.addOpener workspace
      (fn [uri]
        (let [parsed-uri (.parse url uri)
              editor-id (.-hostname parsed-uri)
              protocol (.-protocol parsed-uri)
              pathname (.-pathname parsed-uri)
              map-hash (str editor-id
                        (when (not (empty? pathname))
                          "" pathname))
              title (str "GeoJSON Viewer: " map-hash)
              _ (println protocol editor-id pathname)]
          (when (= protocol "atom-geojson-viewer:")
            (Map. uri title map-hash))))))

  (.add subscriptions
    (.add commands "atom-workspace" "atom-geojson-viewer:toggle" toggle)))

;; live-reload
;; calls stop before hotswapping code
;; then start after all code is loaded
;; the return value of stop will be the argument to start
(defn stop []
  (let [state (serialize)]
    (.log js/console "Will stop")
    (deactivate)
    state))

(defn start [state]
  (.log js/console "Will start")
  (activate state))
