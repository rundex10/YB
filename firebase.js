import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyANm02Y1K4vzMRSYoohfNJbFJH9X4Z7Ua0",

    authDomain: "you-bolt.firebaseapp.com",

    projectId: "you-bolt",

    storageBucket: "you-bolt.firebasestorage.app",

    messagingSenderId: "640107402804",

    appId: "1:640107402804:web:6b3284e1bb67b6b32adc61"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

window.auth = auth;
window.provider = provider;
window.signInWithPopup = signInWithPopup;
window.onAuthStateChanged = onAuthStateChanged;
window.signOut = signOut;
