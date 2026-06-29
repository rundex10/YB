const totalBalance = document.getElementById("totalBalance");

const usdtBalance = document.getElementById("usdtBalance");

const sendButton = document.getElementById("sendButton");

const topupButton = document.getElementById("topupButton");

// Simulasi awal
let usdt = 0;

totalBalance.innerHTML = "$0.00";

usdtBalance.innerHTML = "0.0000";

sendButton.addEventListener("click",()=>{

    alert(
`Profile Activation Required

To unlock transfers,
please activate your profile.

Minimum Top Up:
$5`
    );

});

topupButton.addEventListener("click",()=>{

    alert("Top Up feature coming soon.");

});
