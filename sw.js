importScripts('workbox-sw.prod.v2.1.2.js');

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
    "revision": "c797349edc5d0556666ed9cfbcaa54c7"
  },
  {
    "url": "build/app/app.9reafjny.js",
    "revision": "4542e3dc54fc51939a0b2608bdc9e186"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "48bf709aad33b0f1e2b6f3f55316fa1f"
  },
  {
    "url": "build/app/app.gq0itnbj.js",
    "revision": "7dd14b7342e449d4f4bff725431db828"
  },
  {
    "url": "build/app/app.oymxxdod.js",
    "revision": "3d6d7f7e251802f6a59326ec54a0aada"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "79696a2ac50e493f974d68e15dc97818"
  },
  {
    "url": "build/app/butkeid7.js",
    "revision": "90e4e7a2576543bd6bded1bc83d78aa4"
  },
  {
    "url": "build/app/cv7cbtbi.js",
    "revision": "b425d7fba0b1c25730cf13a34af6b556"
  },
  {
    "url": "build/app/orsdhirh.js",
    "revision": "7438a81d2db06c201be7ba516d9071ca"
  },
  {
    "url": "build/app/pbssls7g.js",
    "revision": "bceea4fa858c798bb6fa201033865b51"
  },
  {
    "url": "build/app/xyfissap.js",
    "revision": "25d03519f99399851b14fdc57d211da6"
  },
  {
    "url": "build/app/zfdsb0ru.js",
    "revision": "0bebc52c2d730015319a43b17f521ffc"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "d9234d27d45db5cca57cc84208ead718"
  },
  {
    "url": "todomvc-app-css/index.css",
    "revision": "f29c4945c1d5c1750aaa1b0a47b372e2"
  },
  {
    "url": "workbox-sw.prod.v2.1.1.js",
    "revision": "2a5638f9e33d09efc487b96804a0aa11"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
