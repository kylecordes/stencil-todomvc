importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/app.js",
    "revision": "d371b265b3e42e25fee3d89e7585ee45"
  },
  {
    "url": "build/app/5e3mm8py.js",
    "revision": "d8783a51d88a5fe606e0bd94a40261be"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "905896db4c96c2ffe4285cd63c098ca5"
  },
  {
    "url": "build/app/app.hyykteyc.js",
    "revision": "491ea638ec574bd546bed4428db40672"
  },
  {
    "url": "build/app/app.l9sq98xw.js",
    "revision": "f26e4648447988dc6b18096e02ac197c"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "7aeb7f28d191e22c44b550f8c64190d4"
  },
  {
    "url": "build/app/cv7cbtbi.js",
    "revision": "b425d7fba0b1c25730cf13a34af6b556"
  },
  {
    "url": "build/app/n90yxkmc.js",
    "revision": "4344796cdb8371debe6db0776a69d7f0"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "b54a03b3f737c70787067949d2c91027"
  },
  {
    "url": "todomvc-app-css/index.css",
    "revision": "f29c4945c1d5c1750aaa1b0a47b372e2"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
