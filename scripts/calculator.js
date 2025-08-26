const handleInputPrice = document.querySelector("#price_of_oil");
const showValue = document.querySelector("#showValue");
const showFifteenPercent = document.querySelector("#showFifteenPercent");
const showEighteenPercent = document.querySelector("#showEighteenPercent");
const btnCalculate = document.querySelector("#btnCalculator");
const btnReset = document.querySelector("#btnReset");
const literPromo15 = document.querySelector("#literPromo15");
const literPromo18 = document.querySelector("#literPromo18");
const boxQuantity = document.querySelector("#box_quantity");
const modalAlert = document.querySelector("#modal-alert");
const closeModal = document.querySelector("#close_modal");

let boxTotal;
let firstDiscount;
let secondDiscount;
let firstDiscountPromo;
let secondDiscountPromo;
let selectValue = boxQuantity.value;

function calculate(oilValue, un) {
    boxTotal = oilValue * un;
    firstDiscount = boxTotal / 100 * 85;
    secondDiscount = boxTotal / 100 * 82;
    return
}
function calculatePromo(unPromo) {
    firstDiscountPromo = firstDiscount / unPromo;
    secondDiscountPromo = secondDiscount / unPromo;
}

boxQuantity.addEventListener("change", (e) => {
    selectValue = e.target.value;
})

btnCalculate.addEventListener("click", () => {
    if (handleInputPrice.value == '') {
        modalAlert.style.display = 'flex';
    } else if (selectValue == 24) {
        calculate(handleInputPrice.value, selectValue);
        calculatePromo(selectValue);
        showValue.innerHTML = `R$${boxTotal.toFixed(2)}`;
        showFifteenPercent.innerHTML = `R$${firstDiscount.toFixed(2)}`;
        literPromo15.innerHTML = `Litro à R$${firstDiscountPromo.toFixed(2)}`;
        showEighteenPercent.innerHTML = `R$${secondDiscount.toFixed(2)}`;
        literPromo18.innerHTML = `Litro à R$${secondDiscountPromo.toFixed(2)}`;
    } else if (selectValue == 12) {
        calculate(handleInputPrice.value, selectValue);
        calculatePromo(selectValue);
        showValue.innerHTML = `R$${boxTotal.toFixed(2)}`;
        showFifteenPercent.innerHTML = `R$${firstDiscount.toFixed(2)}`;
        literPromo15.innerHTML = `Litro à R$${firstDiscountPromo.toFixed(2)}`;
        showEighteenPercent.innerHTML = `R$${secondDiscount.toFixed(2)}`;
        literPromo18.innerHTML = `Litro à R$${secondDiscountPromo.toFixed(2)}`;
    }
});

btnReset.addEventListener("click", () => {
    handleInputPrice.value = ``;
    showValue.innerHTML = `R$0`;
    showFifteenPercent.innerHTML = `R$0`;
    showEighteenPercent.innerHTML = `R$0`;
    literPromo15.innerHTML = ``;
    literPromo18.innerHTML = ``;
})

closeModal.addEventListener("click", () => {
    modalAlert.style.display = 'none';
})