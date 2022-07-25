
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "./firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQh_XrTbujUwEqnm8w5Hl7Mm0du-fuPzg",
  authDomain: "disneyplus-clone-4150a.firebaseapp.com",
  projectId: "disneyplus-clone-4150a",
  storageBucket: "disneyplus-clone-4150a.appspot.com",
  messagingSenderId: "1077740734074",
  appId: "1:1077740734074:web:015f20b2526fad44c11dc3",
  measurementId: "G-KX60RVPRT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


  export { auth, provider, storage, app};
  export default db; 