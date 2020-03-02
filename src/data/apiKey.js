import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBN9syk1468-wGEMHYK99pdbhwr6bAzNiw",
    authDomain: "carpoolcl-b2a85.firebaseapp.com",
    databaseURL: "https://carpoolcl-b2a85.firebaseio.com",
    projectId: "carpoolcl-b2a85",
    storageBucket: "carpoolcl-b2a85.appspot.com",
    messagingSenderId: "65656779122",
    appId: "1:65656779122:web:0189917e5e941a4d3c2deb",
    measurementId: "G-ZEGTY1TMM4"
});

let db = firebase.firestore();
export default db;
