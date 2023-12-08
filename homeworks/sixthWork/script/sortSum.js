import products from './array.js';
function sortSum(products) {
  return products.sort((a, b) => b.summ - a.summ);
}
console.log(sortSum(products));
