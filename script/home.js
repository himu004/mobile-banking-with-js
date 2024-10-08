// Log out BTN
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "/index.html";
});

let balance = document.getElementById("balance").innerText;
let balanceInt = parseInt(balance);

// Add Money BTN
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
  });

document.getElementById("btn-add").addEventListener("click", function (event) {
  event.preventDefault();

  const addMoneyAmount = document.getElementById("add-money-amount").value;
  const addMoneyInt = parseInt(addMoneyAmount);
  const addMoneyPin = document.getElementById("add-money-pin").value;
  

  if (addMoneyPin === "1234") {
    const newBalance = addMoneyInt + balanceInt;
    console.log(newBalance);
    document.getElementById("balance").innerText = newBalance;
  } else {
    alert("Wrong Pin");
  }

  document.getElementsByTagName("form")[0].reset();
});

// Cash Out BTN
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.remove("hidden");
});

document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutAmount = document.getElementById("cash-out-amount").value;
  const cashInt = parseInt(cashOutAmount);
  const cashOutPin = document.getElementById("cash-out-pin").value;
  console.log(cashInt, cashOutPin);

  if (cashOutPin === "1234") {
    const newBalance = balanceInt - cashInt;
    console.log(newBalance);
    document.getElementById("balance").innerText = newBalance;
  } else {
    alert("Wrong Pin");
  }

  document.getElementsByTagName("form")[1].reset();

  });
