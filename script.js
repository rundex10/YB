// =====================================
// YouBolt
// Main Script
// =====================================

// Status login
let currentUser = null;

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

    // tombol claim disembunyikan dulu
    claimButton.style.display = "none";

}

// =============================
// Login Success
// (akan dipanggil Firebase nanti)
// =============================

function loginSuccess(user){

    currentUser = user;

    loginButton.style.display = "none";

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
