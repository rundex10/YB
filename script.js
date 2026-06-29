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
const dropdown=document.getElementById("profileDropdown");

const dropdownPhoto=document.getElementById("dropdownPhoto");

const dropdownName=document.getElementById("dropdownName");

const dropdownEmail=document.getElementById("dropdownEmail");

const logoutButton=document.getElementById("logoutButton");

const loginButton = document.getElementById("loginButton");

const profileBox = document.getElementById("profileBox");

const profilePhoto = document.getElementById("profilePhoto");

const profileName = document.getElementById("profileName");

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

    loginButton.style.display = "none";

    profileBox.style.display = "flex";

    profilePhoto.src = user.photoURL;

    dropdownPhoto.src=user.photoURL;

dropdownName.innerHTML=user.displayName;

dropdownEmail.innerHTML=user.email;

    profileName.innerHTML = user.displayName;

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

profileBox.addEventListener("click",()=>{

    if(dropdown.style.display=="block"){

        dropdown.style.display="none";

    }

    else{

        dropdown.style.display="block";

    }

});

document.addEventListener("click",(e)=>{

    if(

        !profileBox.contains(e.target)

        &&

        !dropdown.contains(e.target)

    ){

        dropdown.style.display="none";

    }

});

logoutButton.addEventListener("click",async()=>{

    await signOut(auth);

    location.reload();

});
