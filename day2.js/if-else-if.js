const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your Marks: ", function(marks) {

    marks = Number(marks);

    if (marks > 90) {
        console.log("You Secured Grade A");
    } else if (marks > 80) {
        console.log("You Secured Grade B");
    } else if (marks > 70) {
        console.log("You Secured Grade C");
    } else if (marks > 60) {
        console.log("You Secured Grade D");
    } else {
        console.log("You are Failed");
    }

    rl.close();
});