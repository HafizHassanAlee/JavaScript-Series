let products = [
  { id: 1, name: "Laptop", price: 80000, stock: 5 },
  { id: 2, name: "Mouse", price: 1500, stock: 0 },
  { id: 3, name: "Keyboard", price: 3000, stock: 8 },
  { id: 4, name: "Monitor", price: 25000, stock: 3 },
  { id: 5, name: "Headphones", price: 5000, stock: 0 }
];

let result = products.filter((prod) => prod.price>=2);

console.log(result);

let expensiveProduct = products.find(function(product) {
    return product.price > 20000;
});

let discountedProducts = products.map(function(product) {
    return {
        name: product.name,
        discountedPrice: product.price * 0.9
    };
});

console.log(discountedProducts);

