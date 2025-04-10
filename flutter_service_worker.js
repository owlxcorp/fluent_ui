'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"main.dart.js_9.part.js": "b956934f56d0cd86805a7fb4b688c252",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"main.dart.js_30.part.js": "d3075680e7040cb3d4038a37bbb6418c",
"index.html": "3540f58f248674d1a052bdefb0d763a4",
"/": "3540f58f248674d1a052bdefb0d763a4",
"main.dart.js_29.part.js": "295343279c29930e7ffb079efb00e064",
"main.dart.js_12.part.js": "2bc09464c2182efef2c11ba74ee676c3",
"main.dart.js_6.part.js": "4f01e72792a327b7cccab16661624cc2",
"assets/NOTICES": "c0c993dc83fd5a2d3b442d3a138986ab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b6563f51aab4da1919b1718cb313cc3b",
"assets/fonts/MaterialIcons-Regular.otf": "bda2b48a6329d4ccfc68b2287bca28e6",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/AssetManifest.bin.json": "ddd3257fb805b264e2dadba5b806e0f3",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"main.dart.js_21.part.js": "c211b36780e1afc87968c8979a028ecf",
"main.dart.js_20.part.js": "53d1c5733a78a2dfe348ce9d8aa93e5b",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"main.dart.js_14.part.js": "b9a0a2dec0c95b6edd41847222fcc85a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "ee0a70ca6073c8c293c6bab80d5fa871",
"main.dart.js_2.part.js": "f36e8a27929368d6a8ce28a75688d252",
"main.dart.js_24.part.js": "47bd2860ffed01013b9c6cbd44663c40",
"main.dart.js_25.part.js": "e11985258bcd27008b583e330b2a3458",
"main.dart.js_17.part.js": "29b91daf9b8963ee60ef986a3ef43b2f",
"main.dart.js_4.part.js": "55f0d47289861c7bd8c9175955babcda",
"main.dart.js_3.part.js": "d7517ec20920ee47eb90c4d50ce50f33",
"main.dart.js_5.part.js": "1e940d564ee371af2cbfdd62e2f4eda1",
"icons/Icon-maskable-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-maskable-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"main.dart.js_28.part.js": "065d1e9607e61ac982611674a97c9d66",
"manifest.json": "1e04e819df5e7720a7659fb598692f21",
"main.dart.js_13.part.js": "6cda01b8d42e1a47e662c52689c90cb5",
"main.dart.js_8.part.js": "6eaf2185813ad56cdf65d5fa42ba28a5",
"main.dart.js_22.part.js": "23d359794e692304590ed7bb21f3c8d9",
"favicon.png": "aa55c22e0c7bce9da0110b3035be5332",
"main.dart.js_11.part.js": "f5e95956b8e79b7f36d9237f6541eb06",
"main.dart.js_7.part.js": "471bd156b575f1b4180491f986d2d00d",
"main.dart.js_27.part.js": "bf8d9ad63270217f3b401be307ff3cb0",
"main.dart.js_18.part.js": "a37efec4aabafc65d4420b6287c029f1",
"main.dart.js_26.part.js": "5de4ba4d7ae803f4360034663520c871",
"main.dart.js_10.part.js": "26b18c5a74fbf3a6c7ac01ee3c2aea03",
"main.dart.js_31.part.js": "65c6923dacc2af657176336905483c9e",
"main.dart.js_19.part.js": "ecb7505fc3c67e670993b5a98ae5b2af",
"main.dart.js_1.part.js": "7517004013b6e4148c5458acea1ec8ab",
"flutter_bootstrap.js": "65696a5a6ff173de4a0e1646c8097d84",
"main.dart.js_15.part.js": "8baa68b6c2218cc9afe9f3e77a0a5896"};
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
