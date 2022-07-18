import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNHsVbWD2NhTh0zPWkfevqEF24lY_Rllk",
    authDomain: "twitter-clone-9b711.firebaseapp.com",
    projectId: "twitter-clone-9b711",
    storageBucket: "twitter-clone-9b711.appspot.com",
    messagingSenderId: "644305842580",
    appId: "1:644305842580:web:849bb263fdc20964ae5f81",
    measurementId: "G-5WMBLZ39TF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;