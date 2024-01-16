"strict";

let backdrop = document.querySelector(".bg-modal");
let btnOrderNow = document.querySelector(".btn-cta");
let btnMinus = document.querySelector(".btn-minus");
let btnAdd = document.querySelector(".btn-add");
let body = document.querySelector("#body");
let btnConfirm = document.querySelector("#confirmButton");
let productTitle = "Cheesy Bacon Hamburger";
let qty = document.querySelector(".quantity");
let price = 2.49;
let prodTitle = document.querySelector("#prod-title");
let prodQty = document.querySelector("#prod-qty");
let totalPrice = document.querySelector("#total-price");
let soloMeal = document.querySelector("#solo");
let valueMeal = document.querySelector("#value-meal");
let orderMenu = document.querySelector('#order-type');
let orderClass = "Solo"
let orderType = false;
let error = document.querySelector("#error-message");

body.addEventListener("load", () => {
  qty.value = 0;
  error.classList.add("hide-error");
});
soloMeal.addEventListener("click", () => {
    orderClass = "Solo"
    orderType = false;
  valueMeal.classList.remove("selected");
});

valueMeal.addEventListener("click", () => {
  orderType = true;
  orderClass = "Value Meal";
  valueMeal.classList.add("selected");
  console.log(orderType);
});

btnOrderNow.addEventListener("click", () => {
  if (qty.value === "0") {
    return error.classList.remove("hide-error");
  }
  error.classList.add("hide-error");
  backdrop.classList.remove("hide");
  orderMenu.textContent = orderClass;
  prodTitle.textContent = productTitle;
  prodQty.textContent = `Quantity : ${qty.value}`;
  const finalCost = computeTotalCost(qty.value);
  totalPrice.textContent = `Total cost : $ ${finalCost}`;
  console.log(finalCost);
});

btnConfirm.addEventListener("click", () => {
  backdrop.classList.add("hide");
});

const computeTotalCost = (qty) => {
  if (orderType) {
    return qty * price + 5;
  } else {
    return qty * price;
  }
};
const addQty = () => {
  if (qty.value === "0" || qty.value > 0) {
    let value = +qty.value + 1;
    qty.value = value;
  }
};
const reduceQty = () => {
  if (qty.value > 0) {
    let value = +qty.value - 1;
    qty.value = value;
  }
};
btnAdd.addEventListener("click", addQty);
btnMinus.addEventListener("click", reduceQty);
