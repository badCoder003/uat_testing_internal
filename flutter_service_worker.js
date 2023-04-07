'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "25dd0453f622f0ac1e86c539a7d2f300",
"index.html": "a2cf9e02b7a65cecfc2b39d168588c77",
"/": "a2cf9e02b7a65cecfc2b39d168588c77",
"firebase-messaging-sw.js": "4d63ce5b758557257bc518d733bf8e78",
"main.dart.js": "247864261c4359799c9b00c056d24665",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "ed2a33350bc186b4588fb5f8dcdbe25b",
"icons/launcher_icon.png": "ed2a33350bc186b4588fb5f8dcdbe25b",
"manifest.json": "4a8e711088d2371ffcb2cfbfe71902bd",
"app.html": "21250c04faf2eb70039d98c25731a9a2",
"assets/AssetManifest.json": "13b003a2ba95596c98743abba1b4bc8c",
"assets/NOTICES": "044e5603087d287f127e3b8b240c0579",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/view_doctor.png": "dfa0686391c1b6d82bbc99fc302855a4",
"assets/assets/images/email.png": "90bbe632fec4e01cd88604144e17fe46",
"assets/assets/images/review_icon.png": "3b41e3b04f17f5931d05089b6aadbd8e",
"assets/assets/images/user_profile.png": "857631b99c7dab065cb8b06dfd46a6e0",
"assets/assets/images/wifi.png": "c2e2df52b105c9d7516fa1e815eb9667",
"assets/assets/images/warning.png": "0cfca399512e4554a2b0e969ec3a33dd",
"assets/assets/images/plan_card.png": "32bdb472aebae7768c979035308fe03b",
"assets/assets/images/filtter.png": "01cc2d73b5e29ccfae71f5de73de3d72",
"assets/assets/images/ehr_icon.jpg": "7e36c58fb878e5314c67df0b7cdbff95",
"assets/assets/images/ambulance_icon.png": "60cfd4587e01a5f2fa174150e8531b2c",
"assets/assets/images/correct.png": "6a7bbaff6eddd84a2df74fafe689a401",
"assets/assets/images/customer_icon.png": "5b32e034fec4ffe0998bef10ae2637b9",
"assets/assets/images/upload_document.png": "c2c0c58f8c548ac7a8405df41bfb5078",
"assets/assets/images/super_speciality.png": "d7312d66cb0e0a1793f83d1ec5527e99",
"assets/assets/images/cio_icon.png": "8dd31f3bc6b2d5a594a3329ad4195b5d",
"assets/assets/images/healthcoach.png": "d807c084310acf9caec6b7a96f5ed529",
"assets/assets/images/bell.png": "b9112479bfc565b45f9ae23ee7733f92",
"assets/assets/images/wallet.png": "d959dbfdb0656ddbbb829d8821ff42f2",
"assets/assets/images/provider_location.png": "8ff8ca2c59d74529b2d80f0f237d3204",
"assets/assets/images/expand.png": "dcc2c2ef971d881bedf5b8192d27151d",
"assets/assets/images/experience.png": "440eef565db5345513716d6a09d50613",
"assets/assets/images/near_by.png": "e276399a23843a7ea99bd992d5570522",
"assets/assets/images/lab.png": "07032d50e9945db5250648c85926f952",
"assets/assets/images/clock_with_time.png": "a2920e9f1f8bb46be3432f49c2008c80",
"assets/assets/images/Group.png": "917cf6baba220b4e74caa9f8a084946b",
"assets/assets/images/star_icon.png": "e946fa846587c401fe7668d9db420a83",
"assets/assets/images/appointment.png": "4f9a6baea7de4ad2053d8c1d83399f34",
"assets/assets/images/miles.png": "f31d57e64f3ee96140c67b1e7bde2e32",
"assets/assets/images/banner.png": "20b2e7bd404adba456bf3166e072601b",
"assets/assets/images/review.png": "25a065b650122dddddea7901b4752721",
"assets/assets/images/delete_icon.png": "c21ee5c9f61f997eea92182e7f74927a",
"assets/assets/images/prescription_icon.png": "3fc3e7bdd862475e14e7dd496bb496fc",
"assets/assets/images/myorder.png": "d45d1cc404103f4e2dc1f5af3fb5393b",
"assets/assets/images/paid_member.png": "5ccc55911c55bf05f349b2a494a65830",
"assets/assets/images/fortis.png": "0074b26879033a5dbcef03bd08678531",
"assets/assets/images/address_icon.png": "f43a4ad88f558db5e16e336e35134ae0",
"assets/assets/images/chat_icon.png": "685e87f2fdb151d53a4d4f40f332a1e7",
"assets/assets/images/tele_consultation.png": "0078ce0323dddb5376d6eb95387d20af",
"assets/assets/images/trending_icon.png": "06aaa55a40f813da1659b480ef38f191",
"assets/assets/images/slider1.png": "6e1be86bab493c9b5968466898942567",
"assets/assets/images/slider3.png": "351bb97c85864c8730171eb97d8158a0",
"assets/assets/images/vector.png": "afc73e5355d1749e072944a81eb5d268",
"assets/assets/images/logout.png": "303b5e38154d5135d955b36864cbccd7",
"assets/assets/images/provider_home.png": "38114228bd29b0af1f66242d61c205b3",
"assets/assets/images/photo_icon.png": "4564c4191fb0a04b8eb8d0dc14900bcf",
"assets/assets/images/family.png": "12ee5b55c9919be1ce838f8bd329edfc",
"assets/assets/images/slider2.png": "8858b953be48665002559d918baa476d",
"assets/assets/images/pan_india_icon.png": "f786d27671f04b31b007ded2c48267df",
"assets/assets/images/calendor_icon.png": "05fa12a083af7cf67b5fa90f03ee4c62",
"assets/assets/images/nominee_icon.png": "568309802690ef5a6b0e1d65b25fa553",
"assets/assets/images/home.png": "1de1ae59b19340146a04bfeb025e991e",
"assets/assets/images/general_physician.png": "691cbf6cf3b5d952dbacd89fda76cffc",
"assets/assets/images/app_update.png": "aa6f618267a66c2238f8719f38ba5215",
"assets/assets/images/slider5.png": "047b56f79d64f11536ff80141c938180",
"assets/assets/images/covid19.png": "e1d26111b400c3b7d0c13e94fc3c86c7",
"assets/assets/images/health_risk.png": "d8292667cf8e7159560bee3e04e0ece5",
"assets/assets/images/prescription.jpg": "0036c7b9610cdf595d23213b452bc8d7",
"assets/assets/images/wellness_coach.png": "072844ee6f9f51213fefe5b1b2b98a59",
"assets/assets/images/check_btn.png": "422ec32c10234dbf8fcc2ffb58574f2d",
"assets/assets/images/doctor_icon.png": "5119ac9111ef5738f692c672a594977e",
"assets/assets/images/slider4.png": "09153c968ecf86b0378fcc10f200b661",
"assets/assets/images/customer_recommended_icon.png": "51f1a43e3241ab70cdcb52f68a5ac4ff",
"assets/assets/images/loader.gif": "e1f370b8e8babc69a474a5b397a2d981",
"assets/assets/images/add_member_icon.png": "3a25350957f1c9693949648fcc7237dc",
"assets/assets/images/srl_icon.jpg": "694b5d68ec8932fdbcb56dc87f9ffc5e",
"assets/assets/images/raise.png": "6284597a9b07a24f4463b89e14ffc02f",
"assets/assets/images/uncheck_btn.png": "b08756e0fb684c69a38bbb6184d650e9",
"assets/assets/images/provider_appointments_icon.png": "f324417488bcfb01f602aaf4cd366c9b",
"assets/assets/images/menu.png": "53dd0b4ce20567ce28b8219d3008ad18",
"assets/assets/images/planImage.png": "eefed3d6e53d52bb684d662435fcadca",
"assets/assets/images/my_family.png": "a67012db01914597467f712110c0df3c",
"assets/assets/images/yoga_test.PNG": "33c780f5086933325cd70eaf40af9a7e",
"assets/assets/images/paid_member_label.svg": "e677b55da4c75dad35e92df1c2412f8f",
"assets/assets/images/spalash_screen.png": "ed2a33350bc186b4588fb5f8dcdbe25b",
"assets/assets/images/error.png": "0c84b1536567f0e87eb40fe0ac9566fd",
"assets/assets/images/logo.png": "64df00c4baa150971e858cad7b82e7a9",
"assets/assets/images/stress_count.png": "bcb607d757cf82ce3edf3e707b5f0808",
"assets/assets/images/fitness_score.jpg": "c905ab1e510d2066f4a92c56dc733679",
"assets/assets/images/bottom_curve.png": "ffb9315b3f3ffedf95a69b6718f04d8e",
"assets/assets/images/logo_white.png": "d28d86aca3e736268ed41c6a32c620bd",
"assets/assets/images/paid_member_booking.png": "4c05be449266a39726b4d61e0d85f981",
"assets/assets/images/apollo.png": "66d0d92596736adc0ddb719ec20cff98",
"assets/assets/images/filter.png": "513e95db16a6e3ef2161c660234d2aaf",
"assets/assets/images/user_icon.png": "e1f3d8460a49a56fca087e76c7166170",
"assets/assets/images/location_icon.png": "b6c6dd5c15ba892f4ea62a968c19b9b8",
"assets/assets/images/profile.png": "467f4c4e72760d345eba76972feea56e",
"assets/assets/images/calories.png": "a558e31dc7461f18e717835c9e6408d9",
"assets/assets/images/suburban.png": "f4245145796951c5b51d9ef2866fc0c1",
"assets/assets/images/doctor_doc.jpg": "bcf225ebd4b6a1a5a1ad17d0b373a22b",
"assets/assets/images/location.png": "d48f5803dc83cfe45b51b7290176ce9f",
"assets/assets/images/doctor-rounded_icon.jpg": "def9107bdb5f7a6546c8542c6cc7252b",
"assets/assets/images/change_password.png": "91cf9bd2900a762dda99132332ab5543",
"assets/assets/images/feedback_success.png": "d308a0c295910fc28ec176d2ade23b0b",
"assets/assets/images/call.png": "494b790166b4e097450cbde7ac4f8505",
"assets/assets/images/language.png": "1394b29d0d16c1bc6737db61d391ea1a",
"assets/assets/images/delete.png": "d2de6f8b03e2bebdec8d730f8e7dc496",
"assets/assets/images/Frame.png": "c8513368069640299958606aa149da2b",
"assets/assets/images/appointment_blue.png": "8dd3bc98d17ee3de7156cf997414a4a3",
"assets/assets/images/lab_icon.jpg": "efd3fdc14dcea6c475d560fc725ec7de",
"assets/assets/images/minutes.png": "94bf33ae79511f6f6061585bf9ba5c89",
"assets/assets/images/health_tracker.png": "07e0ab70f4e42c061ef9f42429997745",
"assets/assets/images/pharmacy.png": "71d5d0555e09d36412f3b7b0edf67903",
"assets/assets/images/upload_again.png": "5000f77095880520db7261a831eaae67",
"assets/assets/images/launcher_icon.jpg": "292f29b67e6d3afc02517f0756196047",
"assets/assets/images/appoiment_booked.png": "13bcab04fd42ecce91e257ac726b70ba",
"assets/assets/images/chat_image.png": "e009f55af97c3b0704d4165d352ccf04",
"assets/assets/images/plus_icon.png": "7252b86c45b9f3deaa3836a59d9edfc4",
"assets/assets/images/health_tracker_blue.png": "54b41e6243db7fcdae8ddf80fa4bd940",
"assets/assets/images/faq_icon.png": "89e38d6ffcd797bdfc4d58a36bb76220",
"assets/assets/images/blood_oxygen.png": "e7efdad50f0c7a95d547bfcbe5208499",
"assets/assets/images/fitness_icon.jpg": "8ee786651c4ba20ef6e7473c7d3671a0",
"assets/assets/images/fitness_icon.png": "be845aa98bc998439d371418d7a5feeb",
"assets/assets/images/healthians_icon.png": "439bb83dd5cb7c7e3730761aeb96022b",
"assets/assets/images/pg_image.jpg": "2018ed31dbc8db398d2ec5c4b06c239c",
"assets/assets/images/wallet_popup_image.PNG": "e60d508d39df230bd83677a9980b1538",
"assets/assets/images/booking_icon.png": "6f2bffcaeb64aa1331403db4029ac01d",
"assets/assets/images/logout_popup.png": "24b7e21d86a331d75b340ddb2fbc08a9",
"assets/assets/images/no_internet.png": "2cc1682a3f11aeca8f24a1f00fdff631",
"assets/assets/images/healthspiring.png": "a96d6ffb23c15f79f69cb92d1b04f96e",
"assets/assets/images/homecare_icon.png": "94d2dbc6b928c5dc94fd768d1b393835",
"assets/assets/images/plan.png": "c9f052741868073b81ebeea0a7a5ae24",
"assets/assets/images/floating_button.png": "9f8268350ad1480a1535d526c75ed916",
"assets/assets/images/tooltip_image.png": "4f57b6b394cc171a90b6a110faeb49fc",
"assets/assets/images/offer1.jpg": "ac03610c084005bd32f149cc42d26ceb",
"assets/assets/images/thumb.png": "f2b7c39afbb89a42ba869450035d84be",
"assets/assets/images/close.png": "11ea2ce557157479c0d6f2a341610f7d",
"assets/assets/images/Rximage.jpg": "365144681288456021387085e949c31b",
"assets/assets/images/offer2.jpg": "d8e1c45b69cea95d69344a5c64553e76",
"assets/assets/logo/old_logo2.png": "ca1c1bdabfffb34116f17e6d78ecf4a0",
"assets/assets/logo/back_ground_logo.png": "5efb1912c3e4be5ea42dc5b39cd692db",
"assets/assets/logo/launcher_icon.png": "ed2a33350bc186b4588fb5f8dcdbe25b",
"assets/assets/logo/old_logo.png": "4c2f0d9263dec0be1bbb7c1add253aa7",
"assets/assets/lottie/loader.json": "e173054693f048b8542c442cbbc6c82d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
