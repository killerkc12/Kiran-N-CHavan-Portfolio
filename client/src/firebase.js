import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5tB12qeUuDfGQGCUTorL5eAJJcerwBgE",
    authDomain: "wt-web-318819.firebaseapp.com",
    projectId: "wt-web-318819",
    storageBucket: "wt-web-318819.appspot.com",
    messagingSenderId: "294220602994",
    appId: "1:294220602994:web:b68634f27e0dc7c4a8eceb",
    measurementId: "G-RTEZLJT73L"
})

const db = firebaseApp.firestore()

export {db}