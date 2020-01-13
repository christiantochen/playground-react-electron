import * as firebase from 'firebase/app'
import 'firebase/messaging'

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

messaging.usePublicVapidKey(
  'BGYihIUIns3xSuAWD_w45Bo-D0q9h3EW_ERnz9Z0JpTmoljxOj6IBBR9YgJf2JrhMKhAUa7U0RR4eBhVWx-ZTAk'
)

export { messaging }
