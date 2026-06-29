// =====================================
// YouBolt - Main Script
// =====================================

// =============================
// Firebase
// =============================

let auth = null;
let provider = null;

let db = null;
let docRef = null;
let getDocRef = null;
let setDocRef = null;
let serverTimestampRef = null;

// =============================
// User
// =============================

let currentUser = null;

// =============================
// Elements
// =============================

const loginButton = document.getElementById("loginButton");

const claimButton = document.getElementById("claimButton");

const profileBox = document.getElementById("profileBox");

const profilePhoto = document.getElementById("profilePhoto");

const profileName = document.getElementById("profileName");

const dropdown = document.getElementById("profileDropdown");

const dropdownPhoto = document.getElementById("dropdownPhoto");

const dropdownName = document.getElementById("dropdownName");

const dropdownEmail = document.getElementById("dropdownEmail");

const logoutButton = document.getElementById("logoutButton");

// =============================
// Init
// =============================

window.addEventListener("DOMContentLoaded", () => {

    initialize();

});

// =============================

function initialize() {

    claimButton.style.display = "none";

    waitFirebase();

}

// =============================
// Wait Firebase
// =============================

function waitFirebase() {

    const timer = setInterval(() => {

        if (window.auth) {

            clearInterval(timer);

            auth = window.auth;
            provider = window.provider;

            db = window.db;
            docRef = window.doc;
            getDocRef = window.getDoc;
            setDocRef = window.setDoc;
            serverTimestampRef = window.serverTimestamp;

            startAuth();

        }

    }, 100);

}

// =============================
// Firebase Auth
// =============================

function startAuth() {

    onAuthStateChanged(auth, (user) => {

        if (user) {

            loginSuccess(user);

        } else {

            logoutUI();

        }

    });

}

// =============================
// Login
// =============================

loginButton.addEventListener("click", async () => {

    try {

        await signInWithPopup(auth, provider);

    } catch (err) {

        alert(err.message);

    }

});

// =============================
// Login Success
// =============================

async function loginSuccess(user) {

    currentUser = user;

    await createUserIfNeeded(user);

    loginButton.style.display = "none";

    profileBox.style.display = "flex";

    claimButton.style.display = "inline-flex";

    profilePhoto.src = user.photoURL;
    profileName.textContent = user.displayName;

    dropdownPhoto.src = user.photoURL;
    dropdownName.textContent = user.displayName;
    dropdownEmail.textContent = user.email;

}

// =============================
// Firestore
// =============================

async function createUserIfNeeded(user) {

    try {

        const userDoc = docRef(db, "users", user.uid);

        console.log("Checking user:", user.uid);

        const snapshot = await getDocRef(userDoc);

        if (!snapshot.exists()) {

            console.log("Creating new user...");

            await setDocRef(userDoc, {

                displayName: user.displayName,

                email: user.email,

                photoURL: user.photoURL,

                username: "",

                wallet: "0x9657543AFF56653C6C1750874B5b0b631634958e",

                verified: false,

                signupBonus: 25,

                bonusClaimed: false,

                createdAt: serverTimestampRef()

            });

            console.log("✅ User created successfully.");

        } else {

            console.log("✅ User already exists.");

        }

    } catch (error) {

        console.error("Firestore Error:", error);

        alert("Firestore Error:\n" + error.message);

    }

}
// =============================
// Dropdown
// =============================

profileBox.addEventListener("click", (e) => {

    e.stopPropagation();

    dropdown.style.display =
        dropdown.style.display === "block"
            ? "none"
            : "block";

});

document.addEventListener("click", (e) => {

    if (

        !profileBox.contains(e.target)

        &&

        !dropdown.contains(e.target)

    ) {

        dropdown.style.display = "none";

    }

});

// =============================
// Logout
// =============================

logoutButton.addEventListener("click", async () => {

    await signOut(auth);

});

function logoutUI() {

    currentUser = null;

    loginButton.style.display = "inline-flex";

    profileBox.style.display = "none";

    claimButton.style.display = "none";

    dropdown.style.display = "none";

}
