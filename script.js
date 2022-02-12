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
  const depositNumber = getInputNumber("depositAmount");

  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depositNumber + currentDepositNumber;
  // document.getElementById("currentDeposit").innerText = totalDeposit;

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});

// balance part
function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}

// withdraw  event handler

const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");

  updateSpanText("currentWithdraw", withdrawNumber);
  document.getElementById("withdrawAmount").value = "";
  updateSpanText("currentBalance", -1 * withdrawNumber);
});

function getInputNumber(id) {
  const Amount = document.getElementById(id).value;
  const AmountNumber = parseFloat(Amount);
  return AmountNumber;
}
