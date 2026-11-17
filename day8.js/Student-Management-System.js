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
    let rollNo = prompt("Enter Your Name : ")
    let marks = prompt("Enter Your Name : ")
    let department = prompt("Enter Your Name : ")

    studentToAdd = {
        name : name,
        rollNo : rollNo,
        marks : marks,
        department : department
    }

    students.push(studentToAdd);
    console.log("Student Added Successfully..")

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