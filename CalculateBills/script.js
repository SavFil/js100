const billValue = document.getElementById("billValue");
const previousAmount = document.getElementById("previousAmount");
const budget = document.getElementById("budget");
const btn = document.getElementById("btn");
const balance = document.getElementById("balance");
let preAmount;

btn.addEventListener("click", () => {
    preAmount = parseFloat(previousAmount.value) ? previousAmount.value : "0";
    balance.textContent = parseFloat(budget.value)  - (parseFloat(billValue.value) + parseFloat(preAmount));

});







