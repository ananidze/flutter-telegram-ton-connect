'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "509d18cd6073bcbf5483f57087799785",
"version.json": "f58c6827e3222c0371c1eb46b56bb688",
"index.html": "79c88359d4017367a30b3fa9bad6f5a8",
"/": "79c88359d4017367a30b3fa9bad6f5a8",
"main.dart.js": "9a98544021a81156183a923c911b441d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e36e850644348b01428261c5a4d4e7e2",
".git/config": "973c77fd850653c063e3afdace308759",
".git/objects/0d/e1d5fc248ab1f287bbd4618337adce9586dcb4": "7aac674bc6567f3dd0ec95bdb9696beb",
".git/objects/59/e0c5b9ce82a04f296bd235bec4af8ac9cac8b5": "10f786ae76d99edf971de04b2ba077fb",
".git/objects/0c/89aa2acecddcca6c02bf3e83cc24c6eeee2346": "e30585c35bcca889b07dfc8c4e51d9ec",
".git/objects/69/0bfc61a081f8dbfc8da384a2879a2a041dabdd": "0432dc73ac54db4c356eaa01b777b296",
".git/objects/51/f5d1ee48f50d67312f56d7e800df5ce615f69f": "e6ab07009e8aec79d79d2ee756c603e8",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "c9afe800e603c7935de25bc40ffd8226",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "a5139be2d64fbf291c1118a06e2877ae",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "8a68cf9111e34dab3527830024de996f",
".git/objects/5a/3bdc29cd1e72971852056388eb514fc2e1cd47": "b52be3e08e1c6d891192e74128884d36",
".git/objects/02/ff6fcb733b688d0991b97373aa0b0d954195c9": "be773cc65dc250778d7334d7af330bac",
".git/objects/d7/9193bfb0dfa5aae744d3f838df20949f05774c": "a048199f8fa6b9d945274402b9f8b03a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "acffaef415384586af017e5ae7f0d1fd",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "2d21dcb62774f28dd83eb4b98859b3f3",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "5f32ac9757f448a77d70bf96052de5dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ab/7604614015b5c656283495aaed0b5c7aa1cee3": "aea34655dd73f12c676247628f3ba6f4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "5fa10c835c8e287b1fb7beb9ce0f5bbd",
".git/objects/c9/d52db15762e1f09c28e804afb22105d936fab0": "53b6ed8b8653605a0bb6e01676ca7086",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "54a4b021eebfec777d6a7400e640d810",
".git/objects/cf/0db7c60d4c9bc1420872c1bbfd247278ad6c74": "be1358456f5cf19f7d78cab408f779c5",
".git/objects/ed/42467f6d0a5b0607d5d2f644832517e3140db7": "457d49d86bfa548ef70faa53e808ade7",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "d7947f223c44c0e877fdc0eddaa85181",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "f6c569ef70469cd83a4ab33010f83d45",
".git/objects/45/f5241cb96434acb9e3e8952b9e6d0ac8fa755e": "82af5db77cf87a1bf13142f40ea59c86",
".git/objects/1f/964a4ad4d8acd1ffee1f678261f24ff35f3cff": "82dd8beeadf294804d1682b45d0ec508",
".git/objects/1f/c48ce2948f384272a5e006a8eaa1f2e7403ffa": "a6b395b85c74e377b5f8ad0f385979b8",
".git/objects/8f/2dc3df266f0549981dbd537c7c42bfa0758a46": "8324e00b7e7e2fdda40165a3d30e11ec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/86/5dbcc7ff58e6d25e9d7c36974a38f86e847d03": "e8f97acdaeaff7893212938dba713cb6",
".git/objects/43/dad046a221dd318207bc2ea091f83cf117b0c3": "578aec8f363502e7f732c6af9e5ea478",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/d4ac9cbec774b78765ea8c056e1e4aec797207": "a44281eafeae275a69d22561834b19c4",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "7f7b221c21a4daf44b542e74c57fd2e8",
".git/objects/31/d3a7d3c33a1c3e48863c6814cec050c1368d70": "676902befc0ae2ce994c1f2be78a6279",
".git/objects/3a/c46ac71728c2204fc76b04c5ae287633b0665a": "dd10e23f7a33c9e9e2ff279c16fc93da",
".git/objects/54/a8ac90502ceb9161ee96eb8a80f9d7f824c750": "9277119502b5e6f545aa1c91bd4163c4",
".git/objects/54/2bc984dfc66e660351c3020eebaf40ff21c20e": "3c1281f72b9010c180c72101019dc1ac",
".git/objects/30/65af99135a72322dc2b6d09144b368a557aff2": "eaa8963f276e456c6a7758b4fd30d85c",
".git/objects/6c/782b8afa1aefe4d87322d5de6bf12d1233e431": "6fe589e7288117e8e30fbac44dd27898",
".git/objects/0a/05d17369fe34bb13f8a5fb61df3284a4cfb7e2": "48e23b2cfb22eebdd3b1fcb4472e7849",
".git/objects/d3/b6bd1875ce5a3fa5c24dcdcc95e953d689ce4c": "c66b0b8436840499a251b3d1ecb86a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/ba/fb985680a833ed993f65a12ab63b4572e5fa27": "1d8530c3bd5bf63a100e238ea519ea98",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/de/4f0b92bc1e2848018367bf45966804e3ccdeb8": "d12cac2f24000a2b7c82f91e9d698cf2",
".git/objects/b9/c0cba1e62ac53bcedad65d4ba8dc04bffc751a": "eeec3fa4f49a5a30a979523f2eef868e",
".git/objects/f0/daa0c761847a9f57a7926152eca26d4ac454c9": "8514bb9eccb830935fc75fb2b8c9f117",
".git/objects/f1/29fe6ccd81bf6da811389c5b42922546b96dca": "bbe5f3be106e582eb21be3dca061dcbe",
".git/objects/f8/521d3f18cab605b5da67f1533f73d90a2e026d": "9000fb6fc2596dfc26b978f16664ceb2",
".git/objects/f8/2524337bc42ef6a0b03740faa1db44b2e8219c": "935c13c2d5e585e0ec218fcbd3e72245",
".git/objects/e0/c36d2ad462ce7c25119690c8d69d5a5ab0e95e": "ac615a941507a17974931a7f9a045a9e",
".git/objects/46/ff0aac9e54ea5e2eb45e16963fddda47f6fe92": "cc765cd7f6de39f1f600a725d9b56484",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "271b74eab22f61bcc049eb90bcaf410c",
".git/objects/4f/88dc135ee37a49a41129eada30dcbc6f2e3e37": "c2cd627c494e3befe8810a2433cecba3",
".git/objects/12/dc2633cf918059a9ee8c0e23a1adaec4c069c7": "818f3d972d7b1fcbac65ea78e5f9b4e3",
".git/objects/8c/ad7b2e1993944d84ddd23317194f7719278d46": "c1622ac5557a4fd21ad08cd08b9c787c",
".git/objects/1d/6630f93ba9da8b4c672f0adf54faaca079cc4d": "3558e5311dd65bf14f2aea6c2e9e4406",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "7825fa2a8de4953cac3eb1b68e02600a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "81ef0ed892ac844ebc65145150ca7534",
".git/objects/47/5e5969ff043cee7d2b641bef44dd806a8c97e2": "6208530b186c7e00cc51ba5107c6e33f",
".git/objects/13/08088723c20db3d675f0c1fed6a043dc7b36dd": "e4a0cbccc42c005caf50ce3aab73050a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c39b7a79371f88e3eddf05733fa2fbf8",
".git/logs/refs/heads/master": "c39b7a79371f88e3eddf05733fa2fbf8",
".git/logs/refs/remotes/origin/master": "a4084c326573400016b8a20f78d63b19",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "7fc92989ebaf039b9e373b38fda8e9d6",
".git/refs/remotes/origin/master": "7fc92989ebaf039b9e373b38fda8e9d6",
".git/index": "740b3b329f061db344841808012ddd5d",
".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
"assets/AssetManifest.json": "4635e8add7cf5805921785e2280ce81a",
"assets/NOTICES": "26c80c7f6b0924040d1edbe8cee62144",
"assets/FontManifest.json": "f1de134ad41d22a74c26ae0b55ce2209",
"assets/AssetManifest.bin.json": "1e08f2185d9063fe308a05e3445c6eb2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/font/SF-Pro.ttf": "b00758ffdb3216ea93c6fc6957aa2cfa",
"assets/AssetManifest.bin": "40e170da31938354fec3b26b81f34e14",
"assets/fonts/MaterialIcons-Regular.otf": "8f24eee83a86475b90308686fbc01be6",
"assets/assets/icons/video_edit.svg": "c74a1255e5090475c6935743c2f14417",
"assets/assets/icons/seo.svg": "0c710ded4279c5fc981fdc097c798e24",
"assets/assets/icons/project_management.svg": "9d6d0c6d7f35a2e6c8b23585e2b3b88a",
"assets/assets/icons/web_dev.svg": "23479a1147344ed45f29f8622d3986ef",
"assets/assets/icons/ui_ux.svg": "94d8f42629fff2b93902eadde6621640",
"assets/assets/icons/content_writing.svg": "2168572225c77a97c5a02c12859bfd49",
"assets/assets/icons/translation.svg": "b961e00beae35c14df75de0eceb0c296",
"assets/assets/icons/social_media.svg": "d89a6585cdb41e97d725e442005ee2b5",
"assets/assets/icons/graphic_design.svg": "a584b55a4ef5955ddb35176b460cf494",
"assets/assets/icons/mobile_dev.svg": "6c5e7366044871e63d93adf17d475b32",
"assets/assets/icons/data.svg": "821f01af5b6a5d4e8a60678495df20eb",
"assets/assets/icons/digital_marketing.svg": "acc62cb453ff54baa737873c933d481d",
"assets/assets/icons/qa.svg": "26cc9cab12902bf451d0e8bee69a67f7",
"assets/assets/mytonwallet.png": "d3512595df727feced2241bec13d9c7a",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
