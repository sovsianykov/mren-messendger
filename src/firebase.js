import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDix2cIIglNjUOJXLtNY2zPKpc3aLTiLyY",
    authDomain: "messenger-mern-18175.firebaseapp.com",
    projectId: "messenger-mern-18175",
    storageBucket: "messenger-mern-18175.appspot.com",
    messagingSenderId: "450883506688",
    appId: "1:450883506688:web:f805632208d36d46e9fee5"
})

const db = firebaseApp.firestore()

export default db
