let products = [
    { id: 1, name: "Laptop", price: 80000, stock: 5 },
    { id: 2, name: "Mouse", price: 1500, stock: 0 },
    { id: 3, name: "Keyboard", price: 3000, stock: 8 },
    { id: 4, name: "Monitor", price: 25000, stock: 3 },
    { id: 5, name: "Headphones", price: 5000, stock: 0 }
];

// 1. Find a product using its ID -> find()
let productById = products.find(p => p.id === 3);
console.log(productById);

// 2. Display products with stock greater than 0 -> filter()
let inStockProducts = products.filter(p => p.stock > 0);
console.log(inStockProducts);
