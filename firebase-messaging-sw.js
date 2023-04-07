//importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
//importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyBSwuO3ZND84EL2wlTeRTmI3lMprrRPRD0",
    authDomain: "healthassure-consumer-health.firebaseapp.com",
    projectId: "healthassure-consumer-health",
    storageBucket: "healthassure-consumer-health.appspot.com",
    messagingSenderId: "551527352942",
    appId: "1:551527352942:web:9d380c9f781c16a9f4b47f",
    measurementId: "G-6ZRN1R5HF9"
});
//const messaging = firebase.messaging();
//messaging.setBackgroundMessageHandler(function (payload) {
//    const promiseChain = clients
//        .matchAll({
//            type: "window",
//            includeUncontrolled: true
//        })
//        .then(windowClients => {
//            for (let i = 0; i < windowClients.length; i++) {
//                const windowClient = windowClients[i];
//                windowClient.postMessage(payload);
//            }
//        })
//        .then(() => {
//            return registration.showNotification("New Message");
//        });
//    return promiseChain;
//});
//self.addEventListener('notificationclick', function (event) {
//    console.log('notification received: ', event)
//});