// login button event handler
const loginBtn = document.getElementById("logIn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block ";
});

// deposit button event handler

const depositBtn = document.getElementById("btn-deposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);

  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  const totalDeposit = depositNumber + currentDepositNumber;
  document.getElementById("currentDeposit").innerText = totalDeposit;
  document.getElementById("depositAmount").value = "";

  // balance part

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  document.getElementById("currentBalance").innerText = totalBalance;
});

// withdraw  event handler

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawAmountNumber = parseFloat(withdrawAmount);

  const currentWithdrawAmount = document.getElementById(
    "currentWithdrawAmount"
  ).innerText;
  const currentWithdrawAmountNumber = parseFloat(currentWithdrawAmount);

  const totalWithdrawAmount =
    withdrawAmountNumber + currentWithdrawAmountNumber;

  document.getElementById("currentWithdrawAmount").innerText =
    totalWithdrawAmount;
  document.getElementById("withdrawAmount").value = "";

  // balance part

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = currentBalanceNumber - withdrawAmountNumber;
  document.getElementById("currentBalance").innerText = totalBalance;
});
