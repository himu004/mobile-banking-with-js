// Log out BTN
document.getElementById("logout").addEventListener("click", function () {
    window.location.href = "/index.html";
});

// Add Money BTN
document.getElementById("add-money-btn").addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    
});

// Cash Out BTN
document.getElementById("cash-out-btn").addEventListener("click", function () {
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.remove("hidden");
});
