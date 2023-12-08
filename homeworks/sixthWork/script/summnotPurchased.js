import products from './array.js';
function notPurchased(products) {
  return products
    .filter((item) => !item.buy)
    .map((item) => item.summ)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(notPurchased(products));
