let expenses = ["Food", "Transport", "Shopping", "Internet"];
let amounts = [1200, 500, 2500, 1800];


function view_expense (){
    console.log("==============================")
    console.log("       TOTAL EXPENSES    ")
    console.log("==============================")

    for(let i=0; i<expenses.length; i++){
        console.log(`${i+1} . ${expenses[i]} = ${amounts[i]}`)}

    console.log(`Total Numbers of Expenses : ${expenses.length}`);
}

function add_new_expence() {
    let new_exp_name = prompt("Enter the Name of Expense : ")
    let new_exp_amount = prompt("Enter the Cost of Expense : ")

    expenses.push(new_exp_name);
    amounts.push(new_exp_amount);

    console.log("New Expense Added..")
    
}

function update_expense() {
    exp_to_update = prompt("Enter the name of expense you want to update : ");
    let status = expenses.includes(exp_to_update);
    if (status==true){
        let new_amount = prompt(`Enter the new Amount of ${exp_to_update} : `);
        let no = expenses.indexOf(exp_to_update);
        amounts[no] = new_amount;
        console.log("Your Amount Has Updated :") 
    } else {
        console.log(`Your Entered Expense ${exp_to_update} was not Valid...`)
    }
}

function delete_expense() {
    exp_to_delete = prompt("Enter the Name of Expense To Delete :");
    let status = expenses.includes(exp_to_delete);
    if (status==true){
        let no = expenses.indexOf(exp_to_delete);
        expenses.splice(no,1);
        amounts.splice(no,1);
        console.log("Your Expense has Deleted..");
    } else {
        console.log(`Your Entered Expense ${exp_to_delete} is not found..`)
    }
}

function number_of_expenses(){
    let expenses_no = expenses.length;
    console.log(`\nTotal Nmber of Current Expenses is : ${expenses_no}`);
}



let choice = "";

while (choice !== "6") {
    console.log("=================================");
    console.log("       PERSONAL EXPENSE TRACKER");
    console.log("=================================\n");
    console.log("1. View All Expenses");
    console.log("2. Add New Expense");
    console.log("3. Update Expense");
    console.log("4. Delete Expense");
    console.log("5. Total Number of Expenses");
    console.log("6. Exit\n");

    choice = prompt("Enter your choice:");

    if (choice === "1") {
        view_expense();
    } else if (choice === "2") {
        add_new_expence();
    } else if (choice === "3") {
        update_expense();
    } else if (choice === "4") {
        delete_expense();
    } else if (choice === "5") {
        number_of_expenses();
    } else if (choice === "6") {
        console.log("Exiting... Goodbye!");
    } else {
        console.log("Invalid choice! Please select a number between 1 and 6.");
    }
    
    console.log("\n"); // Adds space before looping back to the menu
}
