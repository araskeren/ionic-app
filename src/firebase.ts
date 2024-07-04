// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpoNC7da6yEGR9UobkZGZ37J5DXT3R75w",
  authDomain: "test-ionic-383b5.firebaseapp.com",
  projectId: "test-ionic-383b5",
  storageBucket: "test-ionic-383b5.appspot.com",
  messagingSenderId: "693903942198",
  appId: "1:693903942198:web:a05b3bab01decf315b6e97",
  measurementId: "G-9ZNSRX3XCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, analytics,auth };