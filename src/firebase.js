import firebase from "firebase";

 
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAbfdtmn1g2eCFsRuZwbs-28j0bz8FiNhc",
    authDomain: "challenge-fed46.firebaseapp.com",
    projectId: "challenge-fed46",
    storageBucket: "challenge-fed46.appspot.com",
    messagingSenderId: "410157120715",
    appId: "1:410157120715:web:6c11af9107a4cb25c66f4e",
    measurementId: "G-E84EDS0VWK"
  };
  // Initialize Firebase
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };