// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {createUserWithEmailAndPassword  , signInWithEmailAndPassword  , getAuth } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRyYlH_LX1frOaILL-_UKwpJ6AjE7fBnM",
  authDomain: "thrive-114cd.firebaseapp.com",
  projectId: "thrive-114cd",
  storageBucket: "thrive-114cd.appspot.com",
  messagingSenderId: "281152583657",
  appId: "1:281152583657:web:e09e4d20a8c9f263977d78",
  measurementId: "G-R2GD6TSWTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {createUserWithEmailAndPassword , signInWithEmailAndPassword ,auth};

/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  */