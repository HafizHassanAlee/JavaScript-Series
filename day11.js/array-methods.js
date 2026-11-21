let products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Mouse", price: 1500 },
    { id: 3, name: "Keyboard", price: 3000 }
];

//exercise 1
//Find the product whose ID is 3.
let prod3 = products.find((prod)=>prod.id===3);
console.log(prod3)