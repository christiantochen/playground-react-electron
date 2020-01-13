/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js')

const initializedFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCzH92CEPyv6tk-UZ8hgDzPApTjnjF6cBs',
  authDomain: 'green-device-199910.firebaseapp.com',
  databaseURL: 'https://green-device-199910.firebaseio.com',
  projectId: 'green-device-199910',
  storageBucket: 'green-device-199910.appspot.com',
  messagingSenderId: '507865714797',
  appId: '1:507865714797:web:c7e9b758175283d3f96f64',
})

const messaging = initializedFirebaseApp.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('firebase-messaging-sw:payload', payload)
  const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i]
        windowClient.postMessage(payload)
      }
    })
    .then(() => {
      return registration.showNotification('my notification title')
    })
  return promiseChain
})
self.addEventListener('notificationclick', function(event) {
  console.log('firebase-messaging-sw:notificationclick', event)
})
