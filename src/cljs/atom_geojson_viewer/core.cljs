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
  (let [promise (.open workspace "atom-geojson-viewer://test"
                    (clj->js {:split "right"
                              :searchAllPanes true}))]
    (.done promise
      (fn [atom-geojson-viewer]
        (.initialise atom-geojson-viewer)))))

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
              pathname (.-pathname parsed-uri)
              protocol (.-protocol parsed-uri)
              pathname (when pathname (js/decodeURI pathname))]
          (when (= protocol "atom-geojson-viewer:")
            (Map. (str protocol "//" pathname) "Marc"))))))

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
