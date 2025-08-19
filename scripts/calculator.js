let handleInputPrice = document.querySelector("#price_of_oil");
let showValue = document.querySelector("#showValue");
let showFifteenPercent = document.querySelector("#showFifteenPercent");
let showEighteenPercent = document.querySelector("#showEighteenPercent");
let btnCalculate = document.querySelector("#btnCalculator");
let btnReset = document.querySelector("#btnReset");

let boxTotal;
let firstDiscount;
let secondDiscount;

function calculate(oilValue) {
    boxTotal = oilValue * 24;
    firstDiscount = boxTotal / 100 * 85;
    secondDiscount = boxTotal / 100 * 82;
    return
}

btnCalculate.addEventListener("click", () => {
    calculate(handleInputPrice.value);
    showValue.innerHTML = `R$${boxTotal.toFixed(2)}`;
    showFifteenPercent.innerHTML = `R$${firstDiscount.toFixed(2)}`;
    showEighteenPercent.innerHTML = `R$${secondDiscount.toFixed(2)}`;
});

btnReset.addEventListener("click", () => {
    handleInputPrice.value = ``;
    showValue.innerHTML = `R$0`;
    showFifteenPercent.innerHTML = `R$0`;
    showEighteenPercent.innerHTML = `R$0`;
})