const prompt = require("prompt-sync")({ sigint: true });

// Initial Product Data
let products = [
    { name: "Laptop", price: 80000, stock: 5 },
    { name: "Mouse", price: 1500, stock: 20 },
    { name: "Keyboard", price: 3000, stock: 0 },
    { name: "Monitor", price: 25000, stock: 8 },
    { name: "Headphones", price: 5000, stock: 3 }
];

// Helper function to format table rows cleanly
function printProductRow(product) {
    const nameCol = product.name.padEnd(14, " ");
    const priceCol = `Rs. ${product.price}`.padEnd(14, " ");
    console.log(`${nameCol}${priceCol}Stock: ${product.stock}`);
}

// 1. Display All Products (forEach)
function displayAllProducts() {
    console.log("\nALL PRODUCTS\n");
    if (products.length === 0) {
        console.log("Inventory is empty.");
        return;
    }
    products.forEach((product) => {
        printProductRow(product);
    });
}

// 2. Display Available Products (filter)
function displayAvailableProducts() {
    console.log("\nAVAILABLE PRODUCTS\n");
    const available = products.filter((product) => product.stock > 0);

    if (available.length === 0) {
        console.log("No products currently in stock.");
        return;
    }
    available.forEach((product) => {
        printProductRow(product);
    });
}

// 3. Search Product (find)
function searchProduct() {
    const searchName = prompt("Enter product name to search: ").trim();
    const foundProduct = products.find(
        (product) => product.name.toLowerCase() === searchName.toLowerCase()
    );

    console.log("\nSEARCH RESULT\n");
    if (foundProduct) {
        printProductRow(foundProduct);
    } else {
        console.log(`Product "${searchName}" not found in inventory.`);
    }
}

// 4. Display Expensive Products (filter)
function displayExpensiveProducts() {
    console.log("\nEXPENSIVE PRODUCTS (> Rs. 5,000)\n");
    const expensive = products.filter((product) => product.price > 5000);

    if (expensive.length === 0) {
        console.log("No products cost more than Rs. 5,000.");
        return;
    }
    expensive.forEach((product) => {
        printProductRow(product);
    });
}

// 5. Extract Product Names (map)
function displayProductNames() {
    const productNames = products.map((product) => product.name);
    console.log("\nPRODUCT NAMES ARRAY\n");
    console.log(productNames);
}

// 6. Calculate Total Inventory Value (Loop & Accumulation)
function calculateInventoryValue() {
    let totalValue = 0;

    for (let i = 0; i < products.length; i++) {
        totalValue += products[i].price * products[i].stock;
    }

    console.log("\nTOTAL INVENTORY VALUE\n");
    console.log(`Rs. ${totalValue.toLocaleString()}`);
}

// 7. Add New Product (push)
function addNewProduct() {
    console.log("\nADD NEW PRODUCT\n");
    const name = prompt("Enter product name: ").trim();
    if (!name) {
        console.log("Product name cannot be empty.");
        return;
    }

    const price = Number(prompt("Enter product price (Rs.): "));
    const stock = Number(prompt("Enter stock quantity: "));

    if (isNaN(price) || price < 0 || isNaN(stock) || stock < 0) {
        console.log("Invalid price or stock. Please enter valid positive numbers.");
        return;
    }

    const newProduct = {
        name: name,
        price: price,
        stock: stock
    };

    products.push(newProduct);
    console.log(`\n"${name}" has been added to the inventory!`);
}

// 8. Update Product Stock (find & property update)
function updateProductStock() {
    console.log("\nUPDATE PRODUCT STOCK\n");
    const searchName = prompt("Enter product name to update: ").trim();
    const product = products.find(
        (p) => p.name.toLowerCase() === searchName.toLowerCase()
    );

    if (!product) {
        console.log(`Product "${searchName}" not found.`);
        return;
    }

    console.log(`Current stock for ${product.name}: ${product.stock}`);
    const newStock = Number(prompt("Enter new stock quantity: "));

    if (isNaN(newStock) || newStock < 0) {
        console.log("Invalid stock quantity. Update cancelled.");
        return;
    }

    product.stock = newStock;
    console.log(`Stock updated! ${product.name} now has ${product.stock} units.`);
}

// Main Menu Loop
let isRunning = true;

while (isRunning) {
    console.log("\n================================");
    console.log("    PRODUCT INVENTORY SYSTEM");
    console.log("================================\n");
    console.log("1. Display All Products");
    console.log("2. Display Available Products");
    console.log("3. Search Product");
    console.log("4. Display Expensive Products");
    console.log("5. Display Product Names");
    console.log("6. Calculate Inventory Value");
    console.log("7. Add New Product");
    console.log("8. Update Product Stock");
    console.log("9. Exit\n");

    const choice = prompt("Enter Your Choice: ").trim();

    switch (choice) {
        case "1":
            displayAllProducts();
            break;
        case "2":
            displayAvailableProducts();
            break;
        case "3":
            searchProduct();
            break;
        case "4":
            displayExpensiveProducts();
            break;
        case "5":
            displayProductNames();
            break;
        case "6":
            calculateInventoryValue();
            break;
        case "7":
            addNewProduct();
            break;
        case "8":
            updateProductStock();
            break;
        case "9":
            console.log("\nExiting Product Inventory System. Goodbye!");
            isRunning = false;
            break;
        default:
            console.log("\nInvalid choice! Please enter a number between 1 and 9.");
    }
}
