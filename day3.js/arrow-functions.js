const greet = () => {
    console.log("Hello Welcome!!");
}

const how = (name) => {
    console.log("How are You, " + name)
}

const total = (math, urdu) => {
    return math + urdu;
}

const result = (total) => {
    if (total > 50){
        console.log("You are Passed");}
    else {
        console.log("You are Failed..");
    }
}

greet()

let name = prompt("Enter Your Name : ")

how(name)

let maths = prompt("Enter Your Maths Marks out of 50 : ")

let urdu = prompt("Enter Your Urdu Marks out of 50 : ")

let totalmarks = total(maths, urdu)

result(totalmarks)