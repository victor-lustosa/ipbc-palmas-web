'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1b187f039331e0b0afe5583499527b08",
"version.json": "e7c6df5c89f61273a714358a4a9b1998",
"index.html": "d60917df2ac63da8e7353fa1b589544d",
"/": "d60917df2ac63da8e7353fa1b589544d",
"main.dart.js": "a5d9454b03fa5470fcd4235e32065ed4",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5bcc05f001a44208db25448828f44d84",
"icons/Icon-192.png": "173808ac9928ced159ea55116007bb9c",
"icons/Icon-maskable-192.png": "173808ac9928ced159ea55116007bb9c",
"icons/Icon-maskable-512.png": "ca050c053de95c71d77a7a8551ea1119",
"icons/Icon-512.png": "ca050c053de95c71d77a7a8551ea1119",
"manifest.json": "b1ff4e549842ead33a749bd025eedbf6",
"assets/NOTICES": "654a4313a6fa19b1a91781373a951f3c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e2e16eac8eba050a2d46af88a7fe9863",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e4c20f6dc4e1e28e9ac734fbcf3cb0da",
"assets/packages/core_module/assets/mocks/services_list_mock.json": "d2b0af24a43b6bb0d174cdd6d4f33244",
"assets/packages/core_module/assets/mocks/sunday-morning-services_mock.json": "ffc7bc2237924273babf4e7f008b3a58",
"assets/packages/core_module/assets/mocks/lyrics_mock.json": "cfcc62165efdae23098e0727c4aff986",
"assets/packages/core_module/assets/mocks/saturday-services_mock.json": "d0fbc498948358510a2bf56e835692c3",
"assets/packages/core_module/assets/mocks/sunday-evening-services_mock.json": "87fe29feb4e18c95df4867ed3a5dd62c",
"assets/packages/core_module/assets/images/hero.png": "1972a42dc37e1afe605ae717cd886a03",
"assets/packages/core_module/assets/images/family_day.jpeg": "06842acaf56917b9e631ef796c37c2f6",
"assets/packages/core_module/assets/images/lock.png": "a1ab57fc113369d09f38f2d344201426",
"assets/packages/core_module/assets/images/auth/logo_ipbc_login.png": "172add84f4421a12f3cb2cec12f9f816",
"assets/packages/core_module/assets/images/perm_scan_wifi.png": "a71e5f041bf140d346fd4ca21c7bff52",
"assets/packages/core_module/assets/images/footer_logo.png": "07ba9d070becbbfbc1bbcc2cd569ec46",
"assets/packages/core_module/assets/images/sunday_evening.png": "ea887b0dfcfcbc3159a5ae26ac85759a",
"assets/packages/core_module/assets/images/email_verification.png": "58c13d93ae872ae5500e06d9ac627cde",
"assets/packages/core_module/assets/images/church_location.png": "4db956b8e1c1de2d448145c6782d63b4",
"assets/packages/core_module/assets/images/logo.png": "168784649621403049275d15c6aa9b80",
"assets/packages/core_module/assets/images/saturday_evening.png": "3ecc59a56f4b4eeaa8b2b9f7c09adf35",
"assets/packages/core_module/assets/images/sunday_morning.jpg": "00b4dac933a3ec891c56c004a1b6b781",
"assets/packages/core_module/assets/images/default_cover_1.png": "c68b9831156207119c7f365f8937c7bc",
"assets/packages/core_module/assets/images/vagalume_image.png": "03f3fc016082e248e85cb5e9122e0bc7",
"assets/packages/core_module/assets/images/wifi_icon.png": "71ff325aeb190eba76a1c64d0f8fdf4e",
"assets/packages/core_module/assets/images/default_cover_2.png": "76e7ed7cf847901894211e7aedafe9f6",
"assets/packages/core_module/assets/images/banner_store.png": "3a653747a0d0f6ef4deafaa96fc767d9",
"assets/packages/core_module/assets/images/default_cover_3.png": "4b17b907e786b7e9be29c2c9d5f1e385",
"assets/packages/core_module/assets/images/default_cover_4.png": "17a9c6fd5902f20dbe48cb7ae245e820",
"assets/packages/core_module/assets/icons/info.png": "6a49cae897585bc0a31a0eff75e2c680",
"assets/packages/core_module/assets/icons/play_circle.svg": "74d4f353f7c5a9a95caeeffdfe1fc0b8",
"assets/packages/core_module/assets/icons/watch.png": "8f746a966271ddbd46fc153ec4673803",
"assets/packages/core_module/assets/icons/warning.png": "19a83538cfdfedbf2f64db6e96095d28",
"assets/packages/core_module/assets/icons/lyrics.svg": "49a93bfcd663074ef2a24b347d6c1949",
"assets/packages/core_module/assets/icons/lote.png": "1388d98bd89e5b7f39e326967d3eff92",
"assets/packages/core_module/assets/icons/email-success.png": "57916aa66c6c44707678ad37e53ae0af",
"assets/packages/core_module/assets/icons/face-icon.png": "2b594313ee76865bd7d27a49378b109e",
"assets/packages/core_module/assets/icons/book.png": "b409b4fb5ecb9674ca09c1c50850f447",
"assets/packages/core_module/assets/icons/home.svg": "f25720af3a33a694ba263f7cdc0efb5a",
"assets/packages/core_module/assets/icons/logout.svg": "73b14118b11e8acaf0cd4b5994b509a0",
"assets/packages/core_module/assets/icons/church_location_icon.png": "ab09147b2804a05297135f08c7985e05",
"assets/packages/core_module/assets/icons/event-location.png": "b4376103668acf15c52260cfe08dc826",
"assets/packages/core_module/assets/icons/arrow_back.svg": "82d7e20ce8fe7319926981156c3b97c6",
"assets/packages/core_module/assets/icons/icone_dizimo.png": "a8ee0c313f15461a171e6a093aa0510c",
"assets/packages/core_module/assets/icons/arrow_icon_highlight_green.png": "e81b7b5509c2aadd2ace171e2e873ae1",
"assets/packages/core_module/assets/icons/announce.png": "3bb0c19e1d5b83f81152a34796606536",
"assets/packages/core_module/assets/icons/auth/no_profile.png": "b780f5024e086cc54ac0a5d10d3b4add",
"assets/packages/core_module/assets/icons/missao.png": "7a9e2aa2839c9aa6d2bf6783beed54b8",
"assets/packages/core_module/assets/icons/group.svg": "eede5875b5e18c8799720b7ff7c32138",
"assets/packages/core_module/assets/icons/arrow_back.png": "76334eb1a894bdadce538c17bcec1fea",
"assets/packages/core_module/assets/icons/book.svg": "f18f2f2ce02c1a2c39d022e9f02463f9",
"assets/packages/core_module/assets/icons/event.svg": "ea4346f19552b63ff2d007e3bd49a3e3",
"assets/packages/core_module/assets/icons/account_circle.svg": "97eb2333175a1e27149d8d5d747cc596",
"assets/packages/core_module/assets/icons/contact_icon_dark_green.png": "f6e69d71e27dd0bb042323e91cb7e4de",
"assets/packages/core_module/assets/icons/privacy_tip.svg": "c7ff16ad649d949e4bda757ed1a2bc04",
"assets/packages/core_module/assets/icons/popover.svg": "0507af58e2fb522bd6bb66b86e3ca8b0",
"assets/packages/core_module/assets/icons/link-icon.png": "17a33c0700c7df67c1ea4fc298aa24d6",
"assets/packages/core_module/assets/icons/contact_icon.png": "16690be8f61681b916c9e575e478eb48",
"assets/packages/core_module/assets/icons/add_notes.png": "28628a7281040cf4774a014c5f59f1d9",
"assets/packages/core_module/assets/icons/volunteer_activism.png": "3a438558bff2acb09a700fc0648b91a4",
"assets/packages/core_module/assets/icons/play_icon.png": "c1b6ccbccbf3be09e54ed886694422bc",
"assets/packages/core_module/assets/icons/location_on.png": "7a5070284ecf5d5501cb003d634c3ae0",
"assets/packages/core_module/assets/icons/whatsapp_icon.svg": "f9919b2034968b6d8f8e66995f69da6a",
"assets/packages/core_module/assets/icons/arrow_forward.png": "cc6afba84b5ff928caf6665cc3d9b739",
"assets/packages/core_module/assets/icons/ofertas.png": "701cec46a84f7a691b90507b52cac7cd",
"assets/packages/core_module/assets/icons/apple_icon.png": "aeab5abcaab4339212999ea3e1cc4064",
"assets/packages/core_module/assets/icons/ios_share.png": "ccac52a9256f6249c4f60ef12a20fc9b",
"assets/packages/core_module/assets/icons/google-icon.png": "3e4fa77c4af7d950217faf29ed693214",
"assets/packages/core_module/assets/icons/delete.png": "3809b633fa5621aa52bccfe247d4bb17",
"assets/packages/core_module/assets/icons/visibility_on.png": "aabe70ffcc159250999ba31596d12e02",
"assets/packages/core_module/assets/icons/edit_square.png": "bbe08308441543b8b68741eea6754f6e",
"assets/packages/core_module/assets/icons/edit.png": "da7bae4d57c749184933f5dabfd74a22",
"assets/packages/core_module/assets/icons/visibility_off.png": "2192003646f97a6ea482aa3bebfb3111",
"assets/packages/core_module/assets/icons/logo.svg": "288d1bde0a40cd2add6c6f73aec42239",
"assets/packages/core_module/assets/icons/arrow_forward.svg": "fb86efd793ad1cd63549c847e2d65c12",
"assets/packages/core_module/assets/icons/arrow_icon_dark_green.png": "b2a7d3250da435e2710ee111fcf616f1",
"assets/packages/core_module/assets/icons/drive_folder_upload.png": "3a08a68bb0e0f86b7b23ff0db8f840a7",
"assets/packages/core_module/assets/icons/content_copy.png": "8ece2ef5dce2b3a40e6ffaef3272d0ae",
"assets/packages/core_module/assets/icons/arrow_back_ios_new.svg": "fb86efd793ad1cd63549c847e2d65c12",
"assets/packages/core_module/assets/icons/volunteer_activism.svg": "10d84c8fe023cfd7e889af5c4ecd6dda",
"assets/packages/core_module/assets/icons/email-not-valid.png": "694685af6552d80d74969c170c2a8eeb",
"assets/packages/core_module/assets/icons/close.png": "082591e7be53d64801bf637eb373bcf3",
"assets/packages/core_module/assets/icons/add_notes.svg": "8b4a0befc3c427740df745ada44cd85c",
"assets/packages/core_module/assets/data/unknown-lyrics/vivifica-me.json": "3ad3a413a994ed01e6d0d1c91a98fbb0",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-320.json": "8f49f5cf75f0095a7de0f979be9a5c85",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-27.json": "7fbafa5afa201b121092c730be198825",
"assets/packages/core_module/assets/data/unknown-lyrics/salmo-27.json": "f9fba4f18cdf47322631d3090968675c",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-395.json": "1ae8defa432ca09b56c60779e8eeeb27",
"assets/packages/core_module/assets/data/unknown-lyrics/lyrics_mock.json": "455fe37aa25cf26f8ca508a0c3e68eba",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-371.json": "f58b65ba4d29cd6a23057fe3edc78c1b",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-351.json": "239b836364d6be3ce32c08236ed9f7ac",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-254.json": "a891adb09a5c896af113073e64be0558",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-4.json": "61a1e84d237bad4328376ab88297c1dd",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-14.json": "3b496abfa2d56f5a3e7ea6cfb7f7575b",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-97.json": "0a856943efac6db169d1de34b040c52e",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-201.json": "049aef726d77712b1860640b0b2d2fe7",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-108.json": "98031c63b804ceeb1c57fa683bb3d6ed",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-28.json": "6590aac4390b3d41241c5921bc4e9668",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-04.json": "610329e631d665f9c88d3da8734956d4",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-103.json": "216523fbebfcd184993b2f8b43b83fd9",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-33.json": "ddac42f0dec24c28dd714484fab20515",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-64.json": "3aa32a56ab80fe65b462a8529342ecdf",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-13.json": "f0d2fa87650eaa693f3b7d2f009af25c",
"assets/packages/core_module/assets/data/saturday-services/saturday-service-29-04-23.json": "7934555ea24f93d9404cd47ed847f2ff",
"assets/packages/core_module/assets/data/saturday-services/saturday-service.json": "662f280571e6878fe7f172b2cdaeb1c7",
"assets/packages/core_module/assets/data/saturday-services/saturday-service-06-05-23.json": "71aa6999eca1dbac4110912101090d21",
"assets/packages/core_module/assets/data/saturday-services/saturday-service-03-06-23.json": "32a3c5ff3ce88733f622f697879e3c44",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service.json": "2aee670ed8460538cbc0fcc981c4e1b6",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-28-05-23.json": "32f54e80d11d0734fd1a6c5cedb4c8fb",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-04-06-23.json": "3626aa610a588523aa9deffbf656e2d5",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-14-05-23.json": "0755863af2577e97c312fc0a3305866c",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-07-05-23.json": "62744cb047804da371143e52717127ee",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-21-05-23.json": "e986beca0de35d37856cd4163ca2dc43",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-30-04-23.json": "df12ce70a5a16bc2dc538bd33838fd9c",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-11-06-23.json": "c0b21c75c3538ac4bbde77daef7e044b",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-07-05-23.json": "2b66532cd269dc1b75a2df0063529678",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-21-05-23.json": "7c68dda009a80a63da47f78b55a5d96a",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-30-04-23.json": "153f7589617be968011e4ce1a8c06c52",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-14-05-23.json": "a180676cb09e5cf31b2b442ec68f5118",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-28-05-23.json": "3ea3872127b2fb190f9b484f15391527",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-04-06-23.json": "3994cfc10450770f8e38caaca5ece392",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-18-06-23.json": "7712ea26006c65d7e8da32436827937a",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service.json": "b1ad632f6b575d72c8069bdf1e8f8956",
"assets/packages/core_module/assets/data/events/events-mock.json": "ff6c56cbf7d9feba019976650c6d8589",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "dad8cb0c33c7bef3c93de8440464eb6f",
"assets/fonts/MaterialIcons-Regular.otf": "ed102098739e75a708e846f9027accc8",
"favicon-32x32.png": "a65680c1245f9676fe375b66782df8f6",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
