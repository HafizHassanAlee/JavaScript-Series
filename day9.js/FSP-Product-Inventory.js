let products = [
    { name: "Laptop", price: 80000, stock: 5 },
    { name: "Mouse", price: 1500, stock: 20 },
    { name: "Keyboard", price: 3000, stock: 0 },
    { name: "Monitor", price: 25000, stock: 8 },
    { name: "Headphones", price: 5000, stock: 3 }
];

function selectChoice(){

let running=true;
while (running==true){
    console.log("================================");
    console.log("    PRODUCT INVENTORY SYSTEM");
    console.log("================================");
    console.log("");
    console.log("1. Display All Products");
    console.log("2. Display Available Products");
    console.log("3. Search Product");
    console.log("4. Display Expensive Products");
    console.log("5. Display Product Names");
    console.log("6. Calculate Inventory Value");
    console.log("7. Add New Product");
    console.log("8. Update Product Stock");
    console.log("9. Exit");
    console.log("");

    
    let choice = 0;
    choice = Number(prompt("Enter Your Choice: "));

    console.log("");

    if (choice === 1) {
      displayAllProducts();
    } else if (choice === 2) {
      displayAvailableProducts();
    } else if (choice === 3) {
      searchProduct("Laptop");
    } else if (choice === 4) {
      displayExpensiveProducts();
    } else if (choice === 5) {
      displayProductNames();
    } else if (choice === 6) {
      calculateInventoryValue();
    } else if (choice === 7) {
      addNewProduct("Headphones", 150, 10);
    } else if (choice === 8) {
      updateProductStock("Mouse", 20);
    } else if (choice === 9) {
      console.log("Exiting System ...");
      running=false;
    } else {
      console.log("Invalid Choice! Please enter a number from 1 to 9.");
    }

}
}

selectChoice()

