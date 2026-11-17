let students = [
    { name: "Hassan", marks: 85 },
    { name: "Ali", marks: 72 },
    { name: "Ahmed", marks: 91 }
];

console.log(students[0].name);
console.log(students[1].marks);

for(let i=0; i<=students.length-1;i++){
    console.log("Name : "+students[i].name+" \nMarks "+students[i].marks+"\n");
}