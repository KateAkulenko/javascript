import products from './array.js';

function sumAllProducts(products) {
  let totalCost = 0;

  products.forEach((i) => {
    totalCost += i.summ;
  });
  return totalCost;
}

console.log(sumAllProducts(products));
