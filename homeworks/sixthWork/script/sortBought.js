import products from './array.js';

// сортує спочатку false потім true
const sortByBuy = (a, b) => (a.buy < b.buy ? -1 : 1);
const sortList = [...products].sort(sortByBuy);

console.log(sortList);

// залишає в списку тільки false
function productsUnBou(products) {
  const unboughtList = products.filter((item) => !item.buy);
  return unboughtList;
}
console.log(productsUnBou(products));

//залишає в списку тільки true
function productsBou(products) {
  const boughtList = products.filter((item) => item.buy);
  return boughtList;
}
console.log(productsBou(products));
