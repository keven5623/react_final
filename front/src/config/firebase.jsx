// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider  } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnE1KnTVYvH2NrmOFVhpCjknWwzyqB_WQ",
  authDomain: "react-auth-6b840.firebaseapp.com",
  projectId: "react-auth-6b840",
  storageBucket: "react-auth-6b840.appspot.com",
  messagingSenderId: "1075284786957",
  appId: "1:1075284786957:web:f2e86bf63170579b91fa44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provide = new GoogleAuthProvider();
export const providerFb = new FacebookAuthProvider();