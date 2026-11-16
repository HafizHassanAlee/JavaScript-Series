const student = {
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