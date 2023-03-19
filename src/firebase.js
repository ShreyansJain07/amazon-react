import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdNRMW9w9mH3YGUHJnT7X_LBQrg95t86o",
  authDomain: "react-8b0dd.firebaseapp.com",
  projectId: "react-8b0dd",
  storageBucket: "react-8b0dd.appspot.com",
  messagingSenderId: "382665115690",
  appId: "1:382665115690:web:f619c3475bd61a3b005b53",
  measurementId: "G-W5FFQV6WYV"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export { db, auth };
