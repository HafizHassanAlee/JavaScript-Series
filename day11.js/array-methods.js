let products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Mouse", price: 1500 },
    { id: 3, name: "Keyboard", price: 3000 }
];

//exercise 1
//Find the product whose ID is 3.
let prod3 = products.find((prod)=>prod.id===3);
console.log(prod3)

//Exercise 3 — map()
//Create a new array containing only product names.
let name = products.map((prodname)=>prodname.name);
console.log(name);



//Exercise 4 — some()
//Check whether at least one product costs less than 2000.
let prodcost = products.some((prod)=>prod.price<2000);
if (prodcost==true)
console.log("Yes there is one product with cost less than 2000");