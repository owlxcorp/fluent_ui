'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_30.part.js": "5d1b4651cc3e7c6fc5ea6eaa84b383f7",
"main.dart.js_17.part.js": "a91f79c8b25a4ec3b471eed0c02ff717",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"manifest.json": "1e04e819df5e7720a7659fb598692f21",
"main.dart.js_7.part.js": "0b297fd4ab0153e2a7e7e4874e38791e",
"main.dart.js_3.part.js": "925daba834aa6c156f08d6c8c84b4c90",
"main.dart.js_20.part.js": "19ee31d6fa2cf03d39698c8abdf52644",
"main.dart.js_13.part.js": "1211a8c1389a1b531594547c88bf0981",
"main.dart.js_4.part.js": "cc811259fec3896fe12fc3807843a06d",
"main.dart.js_16.part.js": "a068cc9e61ec0fbedc452984188015ea",
"main.dart.js_19.part.js": "52e6d967f60dfa2d8a863057be918dd4",
"main.dart.js_25.part.js": "1bd2d99a1a820024f5ca6039c3761064",
"main.dart.js": "079f8e39e2b6f0146506fed051158faf",
"main.dart.js_10.part.js": "1f96f083124e078d00b38e4ff2d3c2ca",
"main.dart.js_11.part.js": "e3cdea8ddeaa93dadeac0f8f043db356",
"main.dart.js_1.part.js": "3ae5468ca65fec96be4e363d9831350c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_21.part.js": "32561091607b6d5da09510f31baff54c",
"index.html": "5a13f6246e5e3822f4924592c657cd75",
"/": "5a13f6246e5e3822f4924592c657cd75",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/AssetManifest.bin.json": "ddd3257fb805b264e2dadba5b806e0f3",
"assets/AssetManifest.bin": "b6563f51aab4da1919b1718cb313cc3b",
"assets/NOTICES": "aca87da215f434ce9045925e8f483eeb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"assets/fonts/MaterialIcons-Regular.otf": "bda2b48a6329d4ccfc68b2287bca28e6",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"main.dart.js_29.part.js": "3a6304222e2b9440aad549dc42fe2cbb",
"main.dart.js_23.part.js": "2e5a02aaf4f9fcc8152deb305f187079",
"favicon.png": "aa55c22e0c7bce9da0110b3035be5332",
"main.dart.js_28.part.js": "5c82d945242fae699648aa59c8f0ea27",
"icons/Icon-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-maskable-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-maskable-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"main.dart.js_5.part.js": "0e91df770d96ae6e7174f81e40518e26",
"main.dart.js_6.part.js": "7623127bfee49dfe29646579e6fc5a08",
"flutter_bootstrap.js": "0f76eeea35aa15c08c6b093ee99e38ef",
"main.dart.js_2.part.js": "4745cb783ac35dba12bb4e017b1fabd9",
"main.dart.js_27.part.js": "fbfb4d5076d503fa05638c941d3688a7",
"main.dart.js_26.part.js": "8ace172ace0f88de588805d3dd2663e4",
"main.dart.js_24.part.js": "e59b1783e54ccaffc80aa924104db674",
"main.dart.js_18.part.js": "fa9c0386ae8518933f3a6fae0726a075",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"main.dart.js_8.part.js": "804f20f7bebb434b0104efd10ac6a266",
"main.dart.js_9.part.js": "64cfba2f709fa84c74391e28675882a6",
"main.dart.js_14.part.js": "ace9b74d13274b5d11590d2a9d39dc81"};
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
