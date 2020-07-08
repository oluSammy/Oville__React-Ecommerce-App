import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDGVorq6WlOtUPx8Ew0hm08tYcm8gD_NPI",
    authDomain: "e-commerce-oville.firebaseapp.com",
    databaseURL: "https://e-commerce-oville.firebaseio.com",
    projectId: "e-commerce-oville",
    storageBucket: "e-commerce-oville.appspot.com",
    messagingSenderId: "650465885299",
    appId: "1:650465885299:web:561ce92c8ea44023ad3e06",
    measurementId: "G-1FXMDP5XX7"
};

//initialize App
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();