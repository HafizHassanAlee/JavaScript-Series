const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const welcome = () => {
  console.log("=================================");
  console.log("     STUDENT RESULT MANAGEMENT     ");
  console.log("=================================\n");
};


const greet = (name) => {
  console.log(`Hello, ${name}! Let's calculate your results.\n`);
};


const calculateTotal = (a, b, c) => {
  return a + b + c;
};


const calculatePercentage = (total) => {
  return (total / 300) * 100;
};

// 5. getGrade(percentage) - Return grade based on criteria
const getGrade = (percentage) => {
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80) {
    return "A";
  } else if (percentage >= 70) {
    return "B";
  } else if (percentage >= 60) {
    return "C";
  } else if (percentage >= 50) {
    return "D";
  } else {
    return "F";
  }
};

// 6. showResult(...) - Display complete result card and stats
const showResult = (name, maths, english, computer, total, percentage, grade) => {
  console.log("=================================");
  console.log("          RESULT CARD            ");
  console.log("=================================\n");
  
  console.log(`Student: ${name}\n`);
  console.log(`Maths: ${maths}`);
  console.log(`English: ${english}`);
  console.log(`Computer: ${computer}\n`);
  
  console.log(`Total Marks: ${total} / 300`);
  console.log(`Percentage: ${Math.round(percentage)}%`);
  console.log(`Grade: ${grade}`);
  
  // Status check
  const status = percentage >= 50 ? "PASSED" : "FAILED";
  console.log(`Status: ${status}\n`);

  // Performance messages & Bonus handling
  if (percentage >= 95) {
    console.log("Outstanding Student!");
  } else if (percentage >= 90) {
    console.log("Excellent Performance!");
  } else if (percentage >= 50) {
    console.log("Good Effort!");
  } else {
    console.log("Needs Improvement.");
  }

  // Bonus: Determine highest-scoring subject
  let highestSubject = "Maths";
  let maxMarks = maths;

  if (english > maxMarks) {
    maxMarks = english;
    highestSubject = "English";
  }
  if (computer > maxMarks) {
    maxMarks = computer;
    highestSubject = "Computer Science";
  }

  console.log(`Highest Scoring Subject: ${highestSubject} (${maxMarks} marks)`);
  console.log("\n=================================");
};


welcome();

rl.question("Enter Student Name: ", (name) => {
  greet(name);
  
  rl.question("Enter Maths Marks: ", (mathsInput) => {
    const maths = Number(mathsInput);
    
    rl.question("Enter English Marks: ", (englishInput) => {
      const english = Number(englishInput);
      
      rl.question("Enter Computer Marks: ", (computerInput) => {
        const computer = Number(computerInput);
        
        if (
          maths < 0 || maths > 100 ||
          english < 0 || english > 100 ||
          computer < 0 || computer > 100 ) {
          console.log("\n[Error]: All marks must be valid numbers between 0 and 100!");
          rl.close();
          return;
        }

        const total = calculateTotal(maths, english, computer);
        const percentage = calculatePercentage(total);
        const grade = getGrade(percentage);

        console.log("");

        showResult(name, maths, english, computer, total, percentage, grade);
        
        rl.close();
      });
    });
  });
});