import products from './array.js';

//delete products by price
function dellPriseUpper100(products) {
  const newList = products.filter((item) => item.prise <= 100);
  return newList;
}

dellPriseUpper100(products);
console.log(dellPriseUpper100(products));

//delete products by amount
function dellSummUpper100(products) {
  const newList = products.filter((item) => item.summ <= 100);
  return newList;
}

dellSummUpper100(products);
console.log(dellSummUpper100(products));

//delete products by name

function dellName(productName) {
  const newList = products.filter((item) => item.name !== productName);
  return newList;
}

console.log(dellName('parfume'));
