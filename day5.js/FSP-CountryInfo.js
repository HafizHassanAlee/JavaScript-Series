// WORLD FLAGS MANAGER
// Run with: node worldFlags.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ---------- Data ----------
const countries = [
  { name: "Pakistan", flag: "🇵🇰", capital: "Islamabad", continent: "Asia", population: 241000000 },
  { name: "Japan", flag: "🇯🇵", capital: "Tokyo", continent: "Asia", population: 124000000 },
  { name: "United Kingdom", flag: "🇬🇧", capital: "London", continent: "Europe", population: 67000000 },
  { name: "Turkey", flag: "🇹🇷", capital: "Ankara", continent: "Europe/Asia", population: 85000000 },
  { name: "Saudi Arabia", flag: "🇸🇦", capital: "Riyadh", continent: "Asia", population: 36000000 },
];

// ---------- Helpers ----------
function ask(question, callback) {
  rl.question(question, function (answer) {
    callback(answer.trim());
  });
}

function printCountry(country) {
  console.log(country.flag + "  " + country.name);
  console.log("   Capital:    " + country.capital);
  console.log("   Continent:  " + country.continent);
  console.log("   Population: " + country.population.toLocaleString());
}

// Returns the index of the country, or -1 if not found
function findCountryIndex(name) {
  const target = name.toLowerCase();
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name.toLowerCase() === target) {
      return i;
    }
  }
  return -1;
}

// Returns a valid population number, or -1 if the input is invalid
function parsePopulation(text) {
  const value = Number(text);
  if (text === "" || isNaN(value) || value < 0) {
    return -1;
  }
  return Math.floor(value);
}

// ---------- Menu ----------
function showMenu() {
  console.log("\n=================================");
  console.log(" WORLD FLAGS MANAGER");
  console.log("=================================\n");
  console.log("1. View All Countries");
  console.log("2. Add New Country");
  console.log("3. Search Country");
  console.log("4. Update Country Information");
  console.log("5. Remove Last Country");
  console.log("6. Show Total Countries");
  console.log("7. Exit\n");
}

// ---------- Features ----------
function viewAllCountries() {
  console.log("\n--- All Countries ---");
  if (countries.length === 0) {
    console.log("No countries in the list.");
    return;
  }
  for (let i = 0; i < countries.length; i++) {
    console.log("\n" + (i + 1) + ".");
    printCountry(countries[i]);
  }
}

function addCountry(done) {
  console.log("\n--- Add New Country ---");
  ask("Name: ", function (name) {
    if (name === "") {
      console.log("Name cannot be empty.");
      done();
    } else if (findCountryIndex(name) !== -1) {
      console.log("That country already exists.");
      done();
    } else {
      ask("Flag emoji: ", function (flag) {
        ask("Capital: ", function (capital) {
          ask("Continent: ", function (continent) {
            ask("Population: ", function (popText) {
              const population = parsePopulation(popText);
              if (population === -1) {
                console.log("Invalid population. Country was not added.");
              } else {
                const newCountry = {
                  name: name,
                  flag: flag,
                  capital: capital,
                  continent: continent,
                  population: population,
                };
                countries.push(newCountry);
                console.log("\n" + name + " added successfully!");
              }
              done();
            });
          });
        });
      });
    }
  });
}

function searchCountry(done) {
  console.log("\n--- Search Country ---");
  ask("Enter country name: ", function (name) {
    const index = findCountryIndex(name);
    if (index === -1) {
      console.log("Country not found");
    } else {
      console.log("");
      printCountry(countries[index]);
    }
    done();
  });
}

function updateCountry(done) {
  console.log("\n--- Update Country ---");
  ask("Enter country name: ", function (name) {
    const index = findCountryIndex(name);
    if (index === -1) {
      console.log("Country not found");
      done();
    } else {
      console.log("\nFound: " + countries[index].flag + " " + countries[index].name);
      console.log("1. Update capital");
      console.log("2. Update population");
      ask("Choose what to update: ", function (choice) {
        if (choice === "1") {
          ask("New capital: ", function (newCapital) {
            if (newCapital === "") {
              console.log("Capital cannot be empty. No changes made.");
            } else {
              countries[index].capital = newCapital;
              console.log("Capital updated!");
            }
            done();
          });
        } else if (choice === "2") {
          ask("New population: ", function (popText) {
            const population = parsePopulation(popText);
            if (population === -1) {
              console.log("Invalid population. No changes made.");
            } else {
              countries[index].population = population;
              console.log("Population updated!");
            }
            done();
          });
        } else {
          console.log("Invalid choice. No changes made.");
          done();
        }
      });
    }
  });
}

function removeLastCountry() {
  console.log("\n--- Remove Last Country ---");
  if (countries.length === 0) {
    console.log("There are no countries to remove.");
  } else {
    const removed = countries.pop();
    console.log("Removed: " + removed.flag + " " + removed.name);
  }
}

function showTotal() {
  console.log("\nTotal countries: " + countries.length);
}

// ---------- Main loop ----------
function mainMenu() {
  showMenu();
  ask("Enter your choice: ", function (choice) {
    if (choice === "1") {
      viewAllCountries();
      mainMenu();
    } else if (choice === "2") {
      addCountry(mainMenu);
    } else if (choice === "3") {
      searchCountry(mainMenu);
    } else if (choice === "4") {
      updateCountry(mainMenu);
    } else if (choice === "5") {
      removeLastCountry();
      mainMenu();
    } else if (choice === "6") {
      showTotal();
      mainMenu();
    } else if (choice === "7") {
      console.log("\nGoodbye! 🌍");
      rl.close();
    } else {
      console.log("\nInvalid choice. Please enter a number from 1 to 7.");
      mainMenu();
    }
  });
}

mainMenu();