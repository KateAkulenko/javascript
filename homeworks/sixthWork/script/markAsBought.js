import products from './array.js';

function markProductAsBought(productName) {
  const productToUpdate = products.find(product => product.name === productName);
  if (productToUpdate) {
    // Found the product, update buy to true
    productToUpdate.buy = true;
    console.log(`Marked ${productName} as bought.`);
  } else {
    console.log(`${productName} not found in the list of products.`);
  }
}
console.log(products)
console.log(markProductAsBought('parfume'))