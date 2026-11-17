let students = [
    {
        name: "Hassan",
        rollNo: 101,
        marks: 85,
        department: "Computer Science"
    },
    {
        name: "Ayesha",
        rollNo: 102,
        marks: 92,
        department: "Software Engineering"
    },
    {
        name: "Bilal",
        rollNo: 103,
        marks: 78,
        department: "Information Technology"
    },
    {
        name: "Zainab",
        rollNo: 104,
        marks: 88,
        department: "Data Science"
    },
    {
        name: "Usman",
        rollNo: 105,
        marks: 95,
        department: "Artificial Intelligence"
    }
];

function addStudent(){
    let name = prompt("Enter Your Name : ")
    let rollNo = prompt("Enter Your Roll No. : ")
    let marks = prompt("Enter Your Marks : ")
    let department = prompt("Enter Your Department : ")

    studentToAdd = {
        name : name,
        rollNo : rollNo,
        marks : marks,
        department : department
    }

    students.push(studentToAdd);
    console.log("Student Added Successfully..")

}

function displayAllStudents(){
    console.log("\n----------ALL STUDENTS----------\n")
    for(let i=0; i<students.length;i++){
        console.log(`${i+1}. ${students[i].name}`)
    }
}

function searchStudent(){
    let searchby = Number(prompt("1. To Find By Name \n2. To Find By Roll No.\nEnter Your Choice : "));
    let nametoFind;
    let rolltoFind;
    
    switch(searchby){
        case 1:
            nametoFind = prompt("Enter the Name of Student To Find : "); // Removed 'let'
            break;
        case 2:
            rolltoFind = Number(prompt("Enter the Roll No. of Student To Find : ")); // Removed 'let' & converted to Number
            break;    
        default:
            console.log("Input Was not Valid..");
            return;
    }
    
    let toFind;

    if (nametoFind){
        for(let i = 0; i < students.length; i++){ // Fixed: Removed '- 1'
            if (nametoFind === students[i].name){
                toFind = students[i]; 
                break;
            }
        }
    }

    if (rolltoFind){
        for(let i = 0; i < students.length; i++){ // Fixed: Removed '- 1'
            if (rolltoFind === students[i].rollNo){
                toFind = students[i]; 
                break;
            }
        }
    }

    if(toFind){
        console.log("---------- SEARCHED STUDENT ----------")
        console.log(`Name : ${toFind.name}`);
        console.log(`RollNo : ${toFind.rollNo}`);
        console.log(`Marks : ${toFind.marks}`);
        console.log(`Department : ${toFind.department}`);
    } else {
        console.log("Student not found.");
    }
}

function updateStudentMarks(){
    let studentToUpdate = prompt("Enter The Name of Student To Update Marks : ")
    let toUpdate;
    if (studentToUpdate){
        for(let i = 0; i < students.length; i++){ // Fixed: Removed '- 1'
            if (studentToUpdate == students[i].name){
                toUpdate = students[i]; 
                break;
            }
        }
    }

    if(toUpdate){
        console.log("---------- SEARCHED STUDENT ----------")
        console.log(`Name : ${toUpdate.name}`);
        console.log(`RollNo : ${toUpdate.rollNo}`);
        console.log(`Marks : ${toUpdate.marks}`);
        console.log(`Department : ${toUpdate.department}`);
    } else {
        console.log("Student not found.");
    }

    let newMarks = prompt("Enter The Marks To Update : ");
    if (studentToUpdate){
        for(let i = 0; i < students.length; i++){ // Fixed: Removed '- 1'
            if (studentToUpdate == students[i].name){
                studentToUpdate.marks = newMarks; 
                break;
            }
        }
    }
    console.log("Marks Updated...")
}


function deleteStudent(){
    studentToDelete = prompt("Enter The Name of Student To Delete : ");
    let indexNo;
    for(let i = 0; i < students.length; i++){ 
            if (studentToDelete == students[i].name){
                indexNo = i; 
                    break;
            }
        }

    delete students[indexNo];
    console.log("Student Deleted Successfully...");
}


function calculateAverageMarks(){
    let sum=0,totalnum=0;
    for (let i=0; i<students.length;i++){
        sum = sum + students[i].marks;
        totalnum = totalnum +1;
    }
    console.log(`Average of Marks is : ${sum/totalnum}`);
}

function checkPassFail(){
    let studentMarks;
    studentToCheck = prompt("Enter The Name of Student To Check Passing Status : ");
    for (let i=0; i<students.length;i++){
        if (studentToCheck==students[i].name){
            studentMarks = students[i].marks;
        }
    }
    if (studentMarks>50 && studentMarks<100){
        console.log("Student Has Passed..")
    } else if (studentMarks>0 && studentMarks <50){
        console.log("Student Has Failed..")
    } else {
        console.log("There is Error in Input or System...")
    }
}


function findTopStudent(){
    let highest=0,highestAchiever;
    for (let i = 0; i < students.length; i++)
            if (students[i].marks>highest){
            highestAchiever = students[i]; 
        }
    

    console.log("---------- HIGHEST ACHIEVER STUDENT ----------")
    console.log(`Name : ${highestAchiever.name}`);
    console.log(`RollNo : ${highestAchiever.rollNo}`);
    console.log(`Marks : ${highestAchiever.marks}`);
    console.log(`Department : ${highestAchiever.department}`);

    }




function menu() {
  let running = true;

  while (running) {
    console.log("\n================================");
    console.log("   STUDENT RECORDS MANAGEMENT");
    console.log("================================");
    console.log("1. Add Student");
    console.log("2. Display All Students");
    console.log("3. Search Student");
    console.log("4. Update Student Marks");
    console.log("5. Delete Student");
    console.log("6. Calculate Average Marks");
    console.log("7. Check Pass/Fail");
    console.log("8. Find Top Student");
    console.log("9. Exit\n");

    const choice = prompt("Enter your choice: ");

    switch (choice.trim()) {
      case "1":
        addStudent();
        break;
      case "2":
        displayAllStudents();
        break;
      case "3":
        searchStudent();
        break;
      case "4":
        updateStudentMarks();
        break;
      case "5":
        deleteStudent();
        break;
      case "6":
        calculateAverageMarks();
        break;
      case "7":
        checkPassFail();
        break;
      case "8":
        findTopStudent();
        break;
      case "9":
        console.log("Exiting program... Goodbye!");
        running = false;
        break;
      default:
        console.log("⚠️ Invalid choice! Please enter a number between 1 and 9.");
    }
  }
}

menu();