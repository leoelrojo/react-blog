import * as firebase from 'firebase';

const FIREBASE_API_KEY='AIzaSyDww9aqYwwhHiOdB_1lhHquSDLADy8UStY'
const FIREBASE_AUTH_DOMAIN='blog-64cad.firebaseapp.com'
const FIREBASE_DATABASE_URL='https://blog-64cad.firebaseio.com'
const FIREBASE_PROJECT_ID='blog-64cad'
const FIREBASE_STORAGE_BUCKET='blog-64cad.appspot.com'
const FIREBASE_MESSAGING_SENDER_ID='651042967804'
const FIREBASE_APP_ID='1:651042967804:web:2a8c4b01d86e9433054779'

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
};

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID
// };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };