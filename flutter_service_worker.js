'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "57a34e34317e14185b196cf1a33dc659",
"version.json": "25dd0453f622f0ac1e86c539a7d2f300",
"index.html": "e773f9535bdfbd6af18261018b2b8ebe",
"/": "e773f9535bdfbd6af18261018b2b8ebe",
"firebase-messaging-sw.js": "4d63ce5b758557257bc518d733bf8e78",
"main.dart.js": "fa5654356c53c8adad1905633e114273",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "ed2a33350bc186b4588fb5f8dcdbe25b",
"icons/launcher_icon.png": "ed2a33350bc186b4588fb5f8dcdbe25b",
"manifest.json": "4a8e711088d2371ffcb2cfbfe71902bd",
"app.html": "21250c04faf2eb70039d98c25731a9a2",
"assets/AssetManifest.json": "1da1ec024fd4bbdb90111c9f3b8bf98e",
"assets/NOTICES": "95d932ad240b268691353c6eb41bab4f",
"assets/FontManifest.json": "cabb81aed75b224a2effe2fc76485bb0",
"assets/AssetManifest.bin.json": "dcbecf22d4a9dccf5da1dc94e8571d44",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9074a95e4bff672673d8538ebbaaa54b",
"assets/fonts/MaterialIcons-Regular.otf": "42b3ab471b402dd80f8f449a08bd2cc1",
"assets/assets/images/img_ellipse_2.png": "3e89b74817ceb08d94bee5dab9dbea10",
"assets/assets/images/view_doctor.png": "dfa0686391c1b6d82bbc99fc302855a4",
"assets/assets/images/email.png": "90bbe632fec4e01cd88604144e17fe46",
"assets/assets/images/down_arrow.png": "03e3ae196e177a839cd2f81bac609531",
"assets/assets/images/all_icon.png": "7cbbeb3e0f61f6d307f6fb58961af06d",
"assets/assets/images/review_icon.png": "3b41e3b04f17f5931d05089b6aadbd8e",
"assets/assets/images/user_profile.png": "6433253d2ae0469e0280581813e7db9b",
"assets/assets/images/wifi.png": "c2e2df52b105c9d7516fa1e815eb9667",
"assets/assets/images/my_appointment.png": "d15fd4c1e50dc1c2332683a6a3c12049",
"assets/assets/images/warning.png": "0cfca399512e4554a2b0e969ec3a33dd",
"assets/assets/images/plan_card.png": "32bdb472aebae7768c979035308fe03b",
"assets/assets/images/filtter.png": "01cc2d73b5e29ccfae71f5de73de3d72",
"assets/assets/images/ehr_icon.jpg": "7e36c58fb878e5314c67df0b7cdbff95",
"assets/assets/images/ambulance_icon.png": "60cfd4587e01a5f2fa174150e8531b2c",
"assets/assets/images/correct.png": "2fdd50cab3a92b3510aeb85db369f5fc",
"assets/assets/images/Cube.png": "568a4175e50b546936809e7a6dc96240",
"assets/assets/images/health_coach_header.png": "18420aee6a654d1b20cb7978da5550f5",
"assets/assets/images/customer_icon.png": "5b32e034fec4ffe0998bef10ae2637b9",
"assets/assets/images/family_header.png": "bd74d77be871c4f52d7d5d7dcde2701c",
"assets/assets/images/img_rectangle10.svg": "d30fcee801224120a4e0ba0c60e289c7",
"assets/assets/images/upload_document.png": "22ffe798ad186248ca0c1628f85f1053",
"assets/assets/images/super_speciality.png": "d7312d66cb0e0a1793f83d1ec5527e99",
"assets/assets/images/family_phsician.svg": "19c256174034ff83960354131cbd0176",
"assets/assets/images/plan_icon.png": "b619af25046d5a079b75d576abb6e441",
"assets/assets/images/service_description.png": "b30a5c0f65163b5fd05e9b4bcbebca0b",
"assets/assets/images/cio_icon.png": "8dd31f3bc6b2d5a594a3329ad4195b5d",
"assets/assets/images/healthcoach.png": "d807c084310acf9caec6b7a96f5ed529",
"assets/assets/images/bell.png": "b9112479bfc565b45f9ae23ee7733f92",
"assets/assets/images/wallet.png": "d959dbfdb0656ddbbb829d8821ff42f2",
"assets/assets/images/img_stethoscope.svg": "65b10a33960c3c7f7671ae1b2885e597",
"assets/assets/images/provider_location.png": "8ff8ca2c59d74529b2d80f0f237d3204",
"assets/assets/images/img_iconsax_linear_message.svg": "201847a180ceee19adad57f65e737dd5",
"assets/assets/images/expand.png": "dcc2c2ef971d881bedf5b8192d27151d",
"assets/assets/images/experience.png": "440eef565db5345513716d6a09d50613",
"assets/assets/images/check_icon.png": "214ca6322cec4c9906a1a44c22f8029c",
"assets/assets/images/up_arrow_icon.png": "d3dc5b8a38fc0fe03425ac54ad7f21c7",
"assets/assets/images/near_by.png": "37f347ce0c9f1ae10ee8d6f55b961d6a",
"assets/assets/images/lab.png": "602873e0dcd0561b40b7fb6382d7c570",
"assets/assets/images/clock_with_time.png": "a2920e9f1f8bb46be3432f49c2008c80",
"assets/assets/images/caret-down-outline.png": "4ae811b4dc7b100dc0aa72ec3fb60d59",
"assets/assets/images/message_call.png": "a6bdb80edcda63643c170c83e4f08735",
"assets/assets/images/liver.svg": "22164bd963584eb5157d5dad070d2ea7",
"assets/assets/images/Group.png": "917cf6baba220b4e74caa9f8a084946b",
"assets/assets/images/star_icon.png": "e946fa846587c401fe7668d9db420a83",
"assets/assets/images/doc_icon.png": "0242120c8a6707853e5dbfc5c1777af2",
"assets/assets/images/eye_icon.png": "2f6c3b6bbd281314a6ba04e1bab93437",
"assets/assets/images/appointment.png": "4f9a6baea7de4ad2053d8c1d83399f34",
"assets/assets/images/miles.png": "f31d57e64f3ee96140c67b1e7bde2e32",
"assets/assets/images/scan_icon.png": "493452a140fc6bdf969c0e8ecfcc3c85",
"assets/assets/images/banner.png": "20b2e7bd404adba456bf3166e072601b",
"assets/assets/images/package_icon.png": "1038b80a1c5bf4c96c34ce7eb61c01e5",
"assets/assets/images/review.png": "d8d850f5a156c35d2174c5ac22d7071b",
"assets/assets/images/delete_icon.png": "c21ee5c9f61f997eea92182e7f74927a",
"assets/assets/images/prescription_icon.png": "3fc3e7bdd862475e14e7dd496bb496fc",
"assets/assets/images/myorder.png": "d4946f86124f6251742afbcf91ff7ca1",
"assets/assets/images/connect_now.png": "e5dd3d2ca4a9b8df291a8b0967696a94",
"assets/assets/images/paid_member.png": "ae8973a4fd629db43049190034f2e2dc",
"assets/assets/images/fortis.png": "0074b26879033a5dbcef03bd08678531",
"assets/assets/images/address_icon.png": "3e490a9c4066ce543d5c3aa12f0331c7",
"assets/assets/images/chat_icon.png": "685e87f2fdb151d53a4d4f40f332a1e7",
"assets/assets/images/tele_consultation.png": "0078ce0323dddb5376d6eb95387d20af",
"assets/assets/images/trending_icon.png": "06aaa55a40f813da1659b480ef38f191",
"assets/assets/images/slider1.png": "6e1be86bab493c9b5968466898942567",
"assets/assets/images/slider3.png": "351bb97c85864c8730171eb97d8158a0",
"assets/assets/images/vector.png": "afc73e5355d1749e072944a81eb5d268",
"assets/assets/images/liver.png": "6dabe90476ab834ca0f55806a0352b42",
"assets/assets/images/img_folder.svg": "a29a2c2fdc36f12da4e5b3fd47076181",
"assets/assets/images/filter_Icons.png": "4aa3b9ab050898a525b91ab2a7f3771c",
"assets/assets/images/logout.png": "303b5e38154d5135d955b36864cbccd7",
"assets/assets/images/provider_home.png": "38114228bd29b0af1f66242d61c205b3",
"assets/assets/images/photo_icon.png": "4564c4191fb0a04b8eb8d0dc14900bcf",
"assets/assets/images/img_512x512png101.png": "a39c82ab3f2c816f0947e87725b3897f",
"assets/assets/images/upload_icon.png": "acaa4c8af22dfabcc50494e50c47e00b",
"assets/assets/images/family.png": "12ee5b55c9919be1ce838f8bd329edfc",
"assets/assets/images/call_black.png": "cbbc82386e62a37fac6c960e45f7ffde",
"assets/assets/images/slider2.png": "8858b953be48665002559d918baa476d",
"assets/assets/images/pan_india_icon.png": "f786d27671f04b31b007ded2c48267df",
"assets/assets/images/calendor_icon.png": "05fa12a083af7cf67b5fa90f03ee4c62",
"assets/assets/images/cbc.png": "8f46d288eb64ad03dc11f5f2bb4e553f",
"assets/assets/images/nominee_icon.png": "568309802690ef5a6b0e1d65b25fa553",
"assets/assets/images/home.png": "6075d80a1bb93f32eb2517f8c138c5c5",
"assets/assets/images/family_phsician.png": "1952f4baf7bf9d541575b5cb2db944c1",
"assets/assets/images/general_physician.png": "691cbf6cf3b5d952dbacd89fda76cffc",
"assets/assets/images/app_update.png": "aa6f618267a66c2238f8719f38ba5215",
"assets/assets/images/slider5.png": "047b56f79d64f11536ff80141c938180",
"assets/assets/images/img_insurance.png": "2e8c5840f69341c3430ed7b2388c5591",
"assets/assets/images/covid19.png": "e1d26111b400c3b7d0c13e94fc3c86c7",
"assets/assets/images/health_risk.png": "d8292667cf8e7159560bee3e04e0ece5",
"assets/assets/images/img_005.png": "6dfd2368bd83d240108b20c8950a1b59",
"assets/assets/images/prescription.jpg": "0036c7b9610cdf595d23213b452bc8d7",
"assets/assets/images/wellness_coach.png": "072844ee6f9f51213fefe5b1b2b98a59",
"assets/assets/images/check_btn.png": "422ec32c10234dbf8fcc2ffb58574f2d",
"assets/assets/images/hand_icon.png": "16ce109a0f6acb0e3f7f3c35e700b825",
"assets/assets/images/doctor_icon.png": "5119ac9111ef5738f692c672a594977e",
"assets/assets/images/chose_file_icon.png": "f3dc8fbb54c98d5570ad41dd3dcd6271",
"assets/assets/images/slider4.png": "09153c968ecf86b0378fcc10f200b661",
"assets/assets/images/search.png": "58eb8a5d8b8109b2ddc63f633449a7e6",
"assets/assets/images/customer_recommended_icon.png": "51f1a43e3241ab70cdcb52f68a5ac4ff",
"assets/assets/images/message_icon.png": "8bc74e235959f0ac4f6b2afa3870bca1",
"assets/assets/images/img_group18265.svg": "832a294862991b7bcccbb14382422712",
"assets/assets/images/cart-outline.png": "a87a3a4aeee8fbe3dfe3b08faab2e33e",
"assets/assets/images/loader.gif": "e1f370b8e8babc69a474a5b397a2d981",
"assets/assets/images/subtest_icon.png": "f1d5ac2a35f3f8beb286f033af4b7e37",
"assets/assets/images/poly_arrow.svg": "7def820c12a4113e37b048c7f423a65b",
"assets/assets/images/card3.png": "3b3873febd7fef32dac4be6828c5822f",
"assets/assets/images/add_member_icon.png": "3a25350957f1c9693949648fcc7237dc",
"assets/assets/images/srl_icon.jpg": "694b5d68ec8932fdbcb56dc87f9ffc5e",
"assets/assets/images/ambulance_header.png": "86f6c2097d961019b2140b7552510396",
"assets/assets/images/raise.png": "6284597a9b07a24f4463b89e14ffc02f",
"assets/assets/images/uncheck_btn.png": "b08756e0fb684c69a38bbb6184d650e9",
"assets/assets/images/card2.png": "c3f649e675dcba245dc10e7daaae8e00",
"assets/assets/images/img_deliveryman.png": "b02e440605af1fa74ed16d7492265bc1",
"assets/assets/images/provider_appointments_icon.png": "f324417488bcfb01f602aaf4cd366c9b",
"assets/assets/images/menu.png": "53dd0b4ce20567ce28b8219d3008ad18",
"assets/assets/images/planImage.png": "eefed3d6e53d52bb684d662435fcadca",
"assets/assets/images/my_family.png": "a67012db01914597467f712110c0df3c",
"assets/assets/images/yoga_test.PNG": "33c780f5086933325cd70eaf40af9a7e",
"assets/assets/images/img_group18260_60x60.png": "a097848068495a7b171fed130d2c4928",
"assets/assets/images/card1.png": "ca96c7829f95a3a8c056c4d94cce5f8f",
"assets/assets/images/paid_member_label.svg": "37d8c4af35cf2482fcb577c1b74b6224",
"assets/assets/images/spalash_screen.png": "ed2a33350bc186b4588fb5f8dcdbe25b",
"assets/assets/images/img_rectangle_234.png": "0ede02affc19b752ce6c8cf01b74eec2",
"assets/assets/images/error.png": "0c84b1536567f0e87eb40fe0ac9566fd",
"assets/assets/images/test_icon.png": "277c9bcc0239dfdfd1802d866cc82a54",
"assets/assets/images/logo.png": "64df00c4baa150971e858cad7b82e7a9",
"assets/assets/images/stress_count.png": "bcb607d757cf82ce3edf3e707b5f0808",
"assets/assets/images/img_youngdelivery.png": "6cd16a19cca2e15a3a41e359c198e06c",
"assets/assets/images/fitness_score.jpg": "c905ab1e510d2066f4a92c56dc733679",
"assets/assets/images/appoinment.png": "d1d1519631146a7b486f45b4df3ff60e",
"assets/assets/images/bottom_curve.png": "ffb9315b3f3ffedf95a69b6718f04d8e",
"assets/assets/images/logo_white.png": "d28d86aca3e736268ed41c6a32c620bd",
"assets/assets/images/cross.png": "21f8fe2d5e7e8e29b876f968916b52b2",
"assets/assets/images/paid_member_booking.png": "4c05be449266a39726b4d61e0d85f981",
"assets/assets/images/apollo.png": "66d0d92596736adc0ddb719ec20cff98",
"assets/assets/images/filter_icon_black.png": "c79e45405e1b1830e79f9bbedd7d0d6e",
"assets/assets/images/filter.png": "513e95db16a6e3ef2161c660234d2aaf",
"assets/assets/images/card4.png": "21941d6a380ae827ed7e0e7d2e13f562",
"assets/assets/images/female_icon.png": "c02d7d91d8de4ff1f371da7164e6bf33",
"assets/assets/images/user_icon.png": "e1f3d8460a49a56fca087e76c7166170",
"assets/assets/images/spr.png": "1064b094d1e79ad391406ff6c7bbcc37",
"assets/assets/images/location_icon.png": "b6c6dd5c15ba892f4ea62a968c19b9b8",
"assets/assets/images/img_group18262.svg": "5c217ad93b7591e7c5a91aeab22bf0be",
"assets/assets/images/user_plus.png": "ba4ad30a1d96c04e4aa617d34c59f98b",
"assets/assets/images/profile.png": "467f4c4e72760d345eba76972feea56e",
"assets/assets/images/calories.png": "a558e31dc7461f18e717835c9e6408d9",
"assets/assets/images/suburban.png": "f4245145796951c5b51d9ef2866fc0c1",
"assets/assets/images/doctor_doc.jpg": "bcf225ebd4b6a1a5a1ad17d0b373a22b",
"assets/assets/images/location.png": "d48f5803dc83cfe45b51b7290176ce9f",
"assets/assets/images/doctor-rounded_icon.jpg": "def9107bdb5f7a6546c8542c6cc7252b",
"assets/assets/images/change_password.png": "91cf9bd2900a762dda99132332ab5543",
"assets/assets/images/feedback_success.png": "d308a0c295910fc28ec176d2ade23b0b",
"assets/assets/images/call.png": "494b790166b4e097450cbde7ac4f8505",
"assets/assets/images/language.png": "203a1a42547ec2eee0a043707cda4f1f",
"assets/assets/images/img_scooter.png": "d3c2b36c3906301d3134bb19cf845e37",
"assets/assets/images/img_image_296.png": "c220856a28d11db03ccbd14995de6705",
"assets/assets/images/delete.png": "d2de6f8b03e2bebdec8d730f8e7dc496",
"assets/assets/images/Frame.png": "c8513368069640299958606aa149da2b",
"assets/assets/images/appointment_blue.png": "8dd3bc98d17ee3de7156cf997414a4a3",
"assets/assets/images/lab_icon.jpg": "efd3fdc14dcea6c475d560fc725ec7de",
"assets/assets/images/img_g10.svg": "a015dcdf3a0b33e286585caf8eb0f1d9",
"assets/assets/images/img_discountbadge.png": "b339d9985f2645d7f43a7cc367886139",
"assets/assets/images/minutes.png": "94bf33ae79511f6f6061585bf9ba5c89",
"assets/assets/images/health_tracker.png": "b268a271575e258ef9458723708b9881",
"assets/assets/images/pharmacy.png": "71d5d0555e09d36412f3b7b0edf67903",
"assets/assets/images/up_arrow.png": "cbbc9a32c487a822792378902109df5c",
"assets/assets/images/male_icon.png": "6f4825cd4b55188ae11df595a4341c47",
"assets/assets/images/upload_again.png": "5000f77095880520db7261a831eaae67",
"assets/assets/images/img_star_four_points.svg": "f8eec7f529d03808b63df115b1615ebd",
"assets/assets/images/lab-test.png": "9ef72c1014430eca17b59d8bab4c5a40",
"assets/assets/images/img_group18274.png": "b73f0c38a07aca8305f5b801789bb41e",
"assets/assets/images/img_group18260.png": "0a5f36e33bf6d90a21b718183fe86bcf",
"assets/assets/images/launcher_icon.jpg": "292f29b67e6d3afc02517f0756196047",
"assets/assets/images/dropdown_icon.png": "ea63a118ff16d3cb62d2a5562db2998c",
"assets/assets/images/calendar1.png": "f85982c47e61d6a147f8469180d1967e",
"assets/assets/images/img_rectangle241.png": "42acac6e184ddaea09a2c63b2cdf73e2",
"assets/assets/images/img_chronometer.png": "2e9012f211467479dd2d19814693925f",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/discount_icon.png": "aee54684fb2de40b635361605c2ee3db",
"assets/assets/images/img_arrowright.svg": "3e2e95cd2cedb180ce86d85163e5a1c0",
"assets/assets/images/appoiment_booked.png": "81fe750c6bdc5849227c1f5c38329505",
"assets/assets/images/Warning_blue.png": "378451eb935eecd5a0ebf478c47345aa",
"assets/assets/images/chat_image.png": "e009f55af97c3b0704d4165d352ccf04",
"assets/assets/images/user_black.png": "fd1bfc57a9817e6566e2ef6da1d0a0ee",
"assets/assets/images/plus_icon.png": "7252b86c45b9f3deaa3836a59d9edfc4",
"assets/assets/images/health_tracker_blue.png": "54b41e6243db7fcdae8ddf80fa4bd940",
"assets/assets/images/faq_icon.png": "89e38d6ffcd797bdfc4d58a36bb76220",
"assets/assets/images/blood_oxygen.png": "e7efdad50f0c7a95d547bfcbe5208499",
"assets/assets/images/g8.svg": "8c9b89d7c3d840c77dc82451f2314aa2",
"assets/assets/images/fitness_icon.jpg": "8ee786651c4ba20ef6e7473c7d3671a0",
"assets/assets/images/fitness_icon.png": "be845aa98bc998439d371418d7a5feeb",
"assets/assets/images/doctor_test.png": "67b984804b663c698c93cf6f67d5c7a5",
"assets/assets/images/healthians_icon.png": "439bb83dd5cb7c7e3730761aeb96022b",
"assets/assets/images/pg_image.jpg": "2018ed31dbc8db398d2ec5c4b06c239c",
"assets/assets/images/img_group18273.png": "6053eca907e14001066132b58f60b440",
"assets/assets/images/wallet_popup_image.PNG": "e60d508d39df230bd83677a9980b1538",
"assets/assets/images/booking_icon.png": "6f2bffcaeb64aa1331403db4029ac01d",
"assets/assets/images/logout_popup.png": "24b7e21d86a331d75b340ddb2fbc08a9",
"assets/assets/images/img_group_20419.svg": "834564aa3df7896ebe1fa57429d4a83e",
"assets/assets/images/no_internet.png": "2cc1682a3f11aeca8f24a1f00fdff631",
"assets/assets/images/healthspiring.png": "a96d6ffb23c15f79f69cb92d1b04f96e",
"assets/assets/images/homecare_icon.png": "94d2dbc6b928c5dc94fd768d1b393835",
"assets/assets/images/unselect_icon.png": "ad1f672ae43cf8f9af8cded8caaa6c37",
"assets/assets/images/plan.png": "c9f052741868073b81ebeea0a7a5ae24",
"assets/assets/images/floating_button.png": "9f8268350ad1480a1535d526c75ed916",
"assets/assets/images/img_microsoftteamsimage.png": "7c0f98d9a639f640986a29da7f9940e2",
"assets/assets/images/tooltip_image.png": "4f57b6b394cc171a90b6a110faeb49fc",
"assets/assets/images/img_group18272.png": "a6740d972a5a8e94b7df15fd917dad48",
"assets/assets/images/doctor_img.jpg": "28e24551b40ccd90d3ee1cc9d84ca1d4",
"assets/assets/images/img_group13.png": "4932a468b0a9e73494da5bb173ce868d",
"assets/assets/images/offer1.jpg": "ac03610c084005bd32f149cc42d26ceb",
"assets/assets/images/img_status_bar_iphone.png": "e3a5e7798303fc940e0dbea98169767d",
"assets/assets/images/esr.png": "df7a00137f5aab27a4f21bc2cbef6f33",
"assets/assets/images/img_arrowdown.svg": "677c12197f7385cc4e3868a769a08950",
"assets/assets/images/thumb.png": "f2b7c39afbb89a42ba869450035d84be",
"assets/assets/images/img_sandclock.png": "9608624b1182953f1f6b36a2840d8efd",
"assets/assets/images/img_carbonuseravatarfilledalt.svg": "e88a415380a8d1825e26565750fcb357",
"assets/assets/images/ocr_dowmload_icon.png": "a6a4a310d93e3afbc06a5d2b982497dc",
"assets/assets/images/img_group18271.png": "a77cc6ed920098e5903d433957733f52",
"assets/assets/images/banner_test.png": "d766fccbe74cf42b432552c218d4a8ff",
"assets/assets/images/close.png": "11ea2ce557157479c0d6f2a341610f7d",
"assets/assets/images/Rximage.jpg": "365144681288456021387085e949c31b",
"assets/assets/images/offer2.jpg": "d8e1c45b69cea95d69344a5c64553e76",
"assets/assets/logo/old_logo2.png": "ca1c1bdabfffb34116f17e6d78ecf4a0",
"assets/assets/logo/back_ground_logo.png": "5efb1912c3e4be5ea42dc5b39cd692db",
"assets/assets/logo/launcher_icon.png": "ed2a33350bc186b4588fb5f8dcdbe25b",
"assets/assets/logo/old_logo.png": "4c2f0d9263dec0be1bbb7c1add253aa7",
"assets/assets/lottie/loader.json": "e173054693f048b8542c442cbbc6c82d",
"assets/assets/fonts/Lato-Bold.ttf": "eb9532033c2adf99b1314611b5e9cd0e",
"assets/assets/fonts/PlayfairDisplay-SemiBold.ttf": "f542d2274f16f5e03c74b245908c3055",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lato-Semibold.ttf": "3c6cfb1aebd888a0eb4c8fba94140fa6",
"assets/assets/fonts/Lato-Medium.ttf": "863b7dcd5ec2c3923122af25ce0f7e4c",
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
