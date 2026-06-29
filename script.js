// =====================================
// YouBolt
// Main Script
// =====================================

// Status login
let currentUser = null;

// Firebase
let auth = null;
let provider = null;

// =============================
// Element
// =============================

const loginButton = document.getElementById("loginButton");
const claimButton = document.getElementById("claimButton");

// =============================
// Init
// =============================

window.addEventListener("DOMContentLoaded", () => {

    initialize();

});

// =============================
// Initialize
// =============================

function initialize(){

    claimButton.style.display = "none";

    waitFirebase();

}

// =============================
// Login Success
// (akan dipanggil Firebase nanti)
// =============================

function loginSuccess(user){

    currentUser = user;

    loginButton.innerHTML = user.displayName;

    claimButton.style.display = "inline-flex";

}

// =============================
// Logout
// =============================

function logoutUser(){

    currentUser = null;

    loginButton.style.display = "inline-flex";

    claimButton.style.display = "none";

}

function waitFirebase(){

    const timer = setInterval(()=>{

        if(window.auth){

            clearInterval(timer);

            auth = window.auth;
            provider = window.provider;

            startAuth();

        }

    },100);

}

function startAuth(){

    onAuthStateChanged(auth,(user)=>{

        if(user){

            loginSuccess(user);

        }

    });

}

loginButton.addEventListener("click",async()=>{

    try{

        await signInWithPopup(auth,provider);

    }

    catch(err){

        alert(err.message);

    }

});
