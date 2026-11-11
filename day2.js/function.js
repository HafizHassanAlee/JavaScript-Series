function add(a,b) {
    return  a+b;
}

function sub(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

a = prompt("Enter Your First Number :")
b = prompt("Enter Your Second Number :")

console.log("1. 1 for add \n2. 2 for subtraction \n3. 3 for multiply \n4. 4 for subtraction")

choice = prompt("Enter Your Choice Now :")

let c=0;

if (choice==1){
    c=add(a,b)
} else if (choice==2){
    c=subtract(a,b)
} else if (choice==3){
    c=multiply(a,b)
} else if (choice==4){
    c=divide(a,b)
} else {
    console.log("Input was Invalid..")
}

if (c){
    console.log(`Your Answer is ${c}`)
}