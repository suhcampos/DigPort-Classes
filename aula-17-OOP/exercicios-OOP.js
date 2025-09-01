// --------------------------
// 1. Discount Function
// --------------------------
// Create a function `discount10(price)` that receives a price
// and returns the price after applying a 10% discount.
let preço = 25

function discount10(price) {
  return price * 0.9
}

console.log("O valor final é R$", discount10(preço));

// --------------------------
// 2. Introduction to Classes
// --------------------------
// Create a class Product with:
// - properties: name, price
// - method: describe() returning a string like "Product: Rice, Price: $12"
// Test by creating a few products (e.g., Rice, Beans, Milk)

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

const product1 = new Product("Rice", 5);
const product2 = new Product("Beans", 6);
const product3 = new Product("Milk", 4);

console.log(product1.describe());
console.log(product2.describe());
console.log(product3.describe());

// --------------------------
// 3. Cart Class + Methods
// --------------------------
// Create a class Cart with:
// - property: products (array)
// - method: add(product) to add a Product
// - method: total() to return the sum of all product prices
// - method: showProducts() to return a string listing all products
// - method: applyDiscount() that applies the `discount10` function
//   to all products' prices using the function you created above

class Cart {
  constructor() {
    this.products = [];
  }

  add(product) {
    this.products.push(product);
  }

  total() {
    return this.products.reduce((sum, product) => sum + product.price, 0)
  }

  showProducts() {
    return this.products.map(product => product.describe()).join('\n');
  }

  applyDiscount() {
    this.products.forEach(product => {
      product.price = discount10(product.price);
  })
}
}

const cart = new Cart();

cart.add(product1);
cart.add(product2);
cart.add(product3);

console.log("Produtos no carrinho:");
console.log(cart.showProducts());

console.log("Total: " + cart.total());

cart.applyDiscount();

console.log("Produtos com desconto:");
console.log(cart.showProducts());

console.log("Total com desconto: " + cart.total());

// --------------------------
// 4. Mini-Project Integration
// --------------------------
// Open index.html and, using ctrl+shift+P, type "Open with Live Server" to preview your shopping cart.
// You can also change the background color or alter the product list in the HTML file.
// Feel free to experiment with different styles and layouts, and also create new functions, buttons, or features!
