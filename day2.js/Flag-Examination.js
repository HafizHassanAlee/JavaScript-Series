// ============================================
//   SMART EXAMINATION SYSTEM  (Node.js)
//   Run with:  node exam.js
// ============================================

const readline = require("readline");

// ---------- Global scope ----------
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    text: "What is the capital of Pakistan?",
    options: ["Lahore", "Islamabad", "Karachi"],
    correct: 2,
  },
  {
    text: "What is 10 × 5?",
    options: ["15", "50", "100"],
    correct: 2,
  },
  {
    text: "Which language runs in a web browser?",
    options: ["Python", "C++", "JavaScript"],
    correct: 3,
  },
  {
    text: "What is the result of 20 % 3?",
    options: ["2", "3", "1"],
    correct: 1,
  },
  {
    text: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "function"],
    correct: 2,
  },
];

// Global variable: shared student info (set in registerStudent)
let studentName = "";
let studentAge = 0;

// ---------- Arrow function: wraps rl.question in a Promise ----------
const ask = (prompt) =>
  new Promise((resolve) => rl.question(prompt, (answer) => resolve(answer.trim())));

// ---------- Arrow function: grade from percentage ----------
const calculateGrade = (percentage) => {
  if (percentage >= 90) {
    return "A";
  } else if (percentage >= 80) {
    return "B";
  } else if (percentage >= 70) {
    return "C";
  } else if (percentage >= 60) {
    return "D";
  } else {
    return "F";
  }
};

// ---------- Display helpers ----------
function printBanner() {
  console.log("================================");
  console.log("     SMART EXAMINATION SYSTEM");
  console.log("================================\n");
}

// ---------- Student registration ----------
async function registerStudent() {
  // Name: keep asking until not empty
  while (true) {
    const name = await ask("Enter Student Name: ");
    if (name === "") {
      console.log("Name cannot be empty. Try again.\n");
      continue; // skip invalid input
    }
    studentName = name;
    break;
  }

  // Age: keep asking until a valid number
  while (true) {
    const age = Number(await ask("Enter Student Age: "));
    if (!Number.isInteger(age) || age <= 0 || age > 120) {
      console.log("Please enter a valid age.\n");
      continue; // skip invalid input
    }
    studentAge = age;
    break;
  }
  console.log();
}

// ---------- Run the exam; returns score and grade ----------
async function startExam() {
  let score = 0; // local variable

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    console.log(`\nQuestion ${i + 1}:`);
    console.log(q.text + "\n");
    q.options.forEach((opt, index) => console.log(`${index + 1}. ${opt}`));
    console.log();

    // Keep asking until the answer is valid (1..number of options)
    let answer;
    while (true) {
      const input = await ask("Your Answer: ");
      answer = Number(input);

      if (!Number.isInteger(answer) || answer < 1 || answer > q.options.length) {
        console.log(`Invalid input. Enter a number from 1 to ${q.options.length}.\n`);
        continue; // skip invalid input
      }
      break;
    }

    // Check the answer
    if (answer === q.correct) {
      console.log("\nCorrect Answer!");
      score++;
    } else {
      console.log(`\nWrong Answer! Correct answer: ${q.correct}. ${q.options[q.correct - 1]}`);
    }
  }

  const percentage = (score / questions.length) * 100;
  const grade = calculateGrade(percentage);

  return { score, percentage, grade }; // return score and grade
}

// ---------- Final report ----------
function showResult({ score, percentage, grade }) {
  const total = questions.length;

  console.log("\n================================");
  console.log("           EXAM RESULT");
  console.log("================================\n");
  console.log(`Student Name: ${studentName}`);
  console.log(`Student Age: ${studentAge}`);
  console.log(`Total Questions: ${total}`);
  console.log(`Correct Answers: ${score}`);
  console.log(`Incorrect Answers: ${total - score}`);
  console.log(`Total Marks: ${score}/${total}`);
  console.log(`Percentage: ${percentage}%`);
  console.log(`Grade: ${grade}`);
  console.log("\n================================\n");
}

// ---------- Main menu ----------
async function main() {
  printBanner();
  await registerStudent();

  let running = true;

  while (running) {
    console.log("1. Start Examination");
    console.log("2. Exit\n");

    const choice = await ask("Select Option: ");

    switch (choice) {
      case "1": {
        const result = await startExam();
        showResult(result);
        break; // leaves the switch, menu shows again
      }
      case "2":
        console.log(`\nGoodbye, ${studentName}!`);
        running = false;
        break;
      default:
        console.log("\nInvalid option. Please choose 1 or 2.\n");
        continue; // skip invalid input
    }

    if (!running) {
      break; // exit the menu loop
    }
  }

  rl.close();
}

main();