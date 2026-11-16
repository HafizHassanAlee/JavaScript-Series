let student = {
    name: "Hassan",
    age: 18,
    course: "Computer Science",
    university: "GCU"
};

// Get all keys
console.log(Object.keys(student));

// Get all values
console.log(Object.values(student));

// Get entries
console.log(Object.entries(student));

// Add property
student.city = "Lahore";

// Update property
student.age = 19;

// Delete property
delete student.university;

console.log(student);


console.log(student["name"])

//for(let i =0; i<=5;i++){
//    console.log(student.values[i]);
//}