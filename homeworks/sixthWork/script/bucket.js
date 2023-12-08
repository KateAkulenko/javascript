import shoppingList from './products.js';

const bucket = {
  products: [],
  addProduct(product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index === -1) {
      return this.products.push({ ...product, count: 1 });
    }
    this.products[index].count += 1;
  },
};

shoppingList[0];

bucket.addProduct(shoppingList[0]);
bucket.addProduct(shoppingList[4]);

console.log(bucket);
