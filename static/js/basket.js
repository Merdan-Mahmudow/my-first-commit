// (function basketCalc() {
//   const basket = document.querySelectorAll(`button.basket__default`);
//   basket.forEach(item => {
//     let quantity = 1;
//     const basketMain = item.closest(`.snacks`);
//     const basketCenter = basketMain.querySelector(`.basket__default`)
//     const minus = basketMain.querySelector(`.minus`);
//     const plus = basketMain.querySelector(`.plus`);
//     const price = basketMain.querySelector(`.snacks__price`);
//     const snacksQuantity = basketMain.querySelector(`.snacks-quantity`);

//     item.addEventListener(`click`, () => {
//       priceNew = price.textContent;
//       price.classList.add(`_active`);
//       basketCenter.style.display = `none`;
//       minus.style.display = `block`;
//       plus.style.display = `block`;
//       snacksQuantity.style.display = `inline-block`;
//       snacksQuantity.classList.add(`_active`);
//       snacksQuantity.textContent = quantity;

//     });
//     plus.addEventListener(`click`, () => {
//       ++quantity;
//       snacksQuantity.textContent = quantity;
//       price.textContent = priceNew * quantity;
//     });

//     minus.addEventListener(`click`, () => {
//       if (quantity > 1) {
//         --quantity;
//         snacksQuantity.textContent = quantity;
//         price.textContent = priceNew * quantity;
//       }
//       else if (quantity <= 1) {
//         price.classList.remove(`_active`);
//         basketCenter.style.display = `inline-flex`;
//         minus.style.display = `none`;
//         plus.style.display = `none`;
//         snacksQuantity.style.display = `none`;
//         snacksQuantity.classList.remove(`_active`);
//       }
//     });
//   });
// })();





// const basketCenter = product.querySelector(`.basket__default`)
// const minus = product.querySelector(`.minus`);
// const plus = product.querySelector(`.plus`);
// const price = product.querySelector(`.snacks__price`);
// const snacksQuantity = product.querySelector(`.snacks-quantity`);


// plus.addEventListener(`click`, () => {

// });

// minus.addEventListener(`click`, () => {

// });