'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_3.part.js": "ef8ba4a41e2a385bea999e8d59a6c139",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-maskable-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-maskable-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"main.dart.js_20.part.js": "ac8bfeac6c45c3103c93a87fbb0f607f",
"main.dart.js_1.part.js": "daf303d48f5398abfb07411a01a58735",
"manifest.json": "1e04e819df5e7720a7659fb598692f21",
"main.dart.js_13.part.js": "03429d24d2b84196c430ec0723ce82db",
"main.dart.js_14.part.js": "a060ca367d61994cf35f3d8c644834c1",
"main.dart.js_19.part.js": "ceed3de4d2299a7f1ea3436583ceb3b4",
"main.dart.js_11.part.js": "2f92aafbd674423e39fd67e043ce12e9",
"index.html": "d35491eb5c55aa207c01d0a5f3fc4be2",
"/": "d35491eb5c55aa207c01d0a5f3fc4be2",
"main.dart.js_18.part.js": "9a259fd8b0f77476dcc8a50d0d61dcf0",
"main.dart.js_10.part.js": "d3ba3fa3a78afada3631150f05a7fa17",
"main.dart.js_2.part.js": "8c311037b01e8e2c4503474ad37e918d",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "9155a9c4f78a9a8a8da05bc06ff09ac1",
"assets/fonts/segoeuithibd.ttf": "b960e47327852361f29588c64e0a4119",
"assets/fonts/segoeuithisz.ttf": "b4e517a2ade11773a7a81607ba08b7d4",
"assets/fonts/MaterialIcons-Regular.otf": "9d27c28fd7ca9687140c2797181006e2",
"assets/fonts/segoeuithis.ttf": "19efebbad6fdf0140cf23e4491f2ecd6",
"assets/fonts/segoeuithisi.ttf": "3023e50911fdccc30576d9b042626040",
"assets/NOTICES": "b8935a712b369c91f40cda50995825cc",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/fonts/SegoeIcons.ttf": "5c053a34db297a1a533e62815a9b8827",
"assets/FontManifest.json": "75dbaa0d72480311a1c56f6318c2e33e",
"assets/AssetManifest.bin": "35c177fc848ce436acff2dee119ae74d",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "aa55c22e0c7bce9da0110b3035be5332",
"main.dart.js_5.part.js": "ea7294778a036494645cb6e15d3c1b06",
"main.dart.js_16.part.js": "b85e68d676fbb5bd9ad463abfc142dcf",
"main.dart.js_7.part.js": "31948d4ed9f571e8d59766177f052631",
"main.dart.js_23.part.js": "d4a97252a1755e19446f7eabf06569d1",
"main.dart.js_8.part.js": "52b1c2d294314178ce24cddced65352e",
"main.dart.js_21.part.js": "99a79a45ace94ee2d67cf50a87e33302",
"main.dart.js_22.part.js": "c2be893b92c0a52d5b378aaa4d1795cf",
"main.dart.js_4.part.js": "4be5fc86183fd8ffb4b3eaa7cbbc4f00",
"main.dart.js_25.part.js": "a88a10cfa7437c7844ce809680ce0a7a",
"main.dart.js_24.part.js": "869a8869c69699c957ff69a24a83dc01",
"main.dart.js_12.part.js": "54a6b811f3114ffb19bf59b3464105ba",
"flutter_bootstrap.js": "52a6a20032a306623398632d794a0788",
"main.dart.js_15.part.js": "0f572e366d10cc4dffeab6e5584ce83e",
"main.dart.js_9.part.js": "40bd5f059399dc8fc00c295d8b535d56",
"main.dart.js_26.part.js": "6bd8191b8054e3f58a88bc9b349551f2",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"main.dart.js": "f21f6dcb87cff115bdda250ec9667efd",
"main.dart.js_6.part.js": "702cff93f621e3bfbdbd24426ee325fc",
"main.dart.js_17.part.js": "55beb850cab4538559b0d72b2bddf994"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
