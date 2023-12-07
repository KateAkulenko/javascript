//  const products = [
//     {
//       name: 'toy',
//       amount: 1,
//       buy: true,
//       prise: 250,
//       summ: 250,
//     },
//     {
//       name: 'candy',
//       amount: 2,
//       buy: false,
//       prise: 40,
//       summ: 80,
//     },
//     {
//       name: 'flower',
//       amount: 3,
//       buy: true,
//       prise: 80,
//       summ: 240,
//     },
//     {
//       name: 'candle',
//       amount: 1,
//       buy: false,
//       prise: 120,
//       summ: 120,
//     },
//     {
//       name: 'pen',
//       amount: 5,
//       buy: false,
//       prise: 20,
//       summ: 100,
//     },
//     {
//       name: 'parfume',
//       amount: 1,
//       buy: false,
//       prise: 1200,
//       summ: 1200,
//     },
//   ];

//   function productsUnBou(products) {
//     const unboughtList = products.filter(item => !item.buy);
//     return unboughtList;
//   }

//   function productsBou(products) {
//     const boughtList = products.filter(item => item.buy);
//     return boughtList;
//   }

// console.log(products)
// console.log(productsUnBou(products))
// console.log(productsBou(products))



// function markAsBought(products) {
//   const item = shoppingList.find(item => item.name);
//   if (item) {
//       item.buy = true;
//       console.log(`Товар "${item.name}" відзначено як куплений.`);
//   } else {
//       console.log(`Товар "${item.name}" не знайдено у списку.`);
//   }
// }
// console.log(markAsBought (products));


const products = [
  {
    name: 'toy',
    amount: 1,
    buy: true,
    prise: 250,
    summ: 250,
  },
  {
    name: 'candy',
    amount: 2,
    buy: false,
    prise: 40,
    summ: 80,
  },
  {
    name: 'flower',
    amount: 3,
    buy: true,
    prise: 80,
    summ: 240,
  },
  {
    name: 'candle',
    amount: 1,
    buy: false,
    prise: 120,
    summ: 120,
  },
  {
    name: 'pen',
    amount: 5,
    buy: false,
    prise: 20,
    summ: 100,
  },
  {
    name: 'parfume',
    amount: 1,
    buy: false,
    prise: 1200,
    summ: 1200,
  },
];
 //функція видалення зі списку по ціні фільтр
function dellPriseUpper100(products) {
const newList = products.filter(item => item.prise <= 100);
return newList
}

dellPriseUpper100(products)
console.log (dellPriseUpper100(products))

 //функція видалення зі списку по сумі покупки фільтр
function dellSummUpper100(products) {
  const newList = products.filter(item => item.summ <= 100);
  return newList
  }
  
  dellSummUpper100(products)
  console.log (dellSummUpper100(products))