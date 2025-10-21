import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuLGOxRXcnwk5rCsJN85BsAlBwFLGdHcc",
  authDomain: "react-app-cursos-afa15.firebaseapp.com",
  projectId: "react-app-cursos-afa15",
  storageBucket: "react-app-cursos-afa15.firebasestorage.app",
  messagingSenderId: "1068573045733",
  appId: "1:1068573045733:web:0b36bf1a4295079d8ab50c",
  measurementId: "G-2G7LRTKHQ5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}