// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANm02Y1K4vzMRSYoohfNJbFJH9X4Z7Ua0",
  authDomain: "you-bolt.firebaseapp.com",
  projectId: "you-bolt",
  storageBucket: "you-bolt.firebasestorage.app",
  messagingSenderId: "640107402804",
  appId: "1:640107402804:web:6b3284e1bb67b6b32adc61",
  measurementId: "G-YZGEZS275C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
