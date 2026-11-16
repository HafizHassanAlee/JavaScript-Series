let student = {
    name: "Hassan Ali",
    age: 18,
    rollNo: "CS-101",
    department: "Computer Science",
    semester: 1,
    city: "Lahore"
};

console.log("================================")
console.log("       STUDENT PROFILE")
console.log("================================\n");

let start = Object.entries(student);

for (let i = 0; i < start.length; i++) {
    let key = start[i][0];
    let value = start[i][1];
    console.log(`${key}: ${value}`);
}


console.log(`\n----------OBJECT KEYS----------------\n`)

let x = Object.keys(student);
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}


console.log(`\n----------OBJECT VALUES----------------\n`)

let y = Object.values(student);
for (let i = 0; i < y.length; i++) {
    console.log(y[i]);
}


console.log(`\n----------UPDATING PROFILE----------------\n`)

student.email = "hassan@example.com";
console.log(`Email Added Successfully..`)
student.age = 19;
console.log(`Age Updated Successfully...`)
delete student.city;
console.log(`City Deleted Successfully..`)


console.log(`\n----------FINAL PROFILE----------------\n`)

let final = Object.entries(student);

for (let i = 0; i < final.length; i++) {
    let key = final[i][0];
    let value = final[i][1];
    console.log(`${key}: ${value}`);

}

console.log(`\n----------NUMBER OF PROPERTIES----------------\n`)

let No_of_Properties = Object.entries(student).length;

console.log(`Number of Students = ${No_of_Properties}`)
