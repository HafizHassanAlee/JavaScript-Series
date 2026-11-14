var countries = [
  { name: "Pakistan", flag: "🇵🇰", capital: "Islamabad", continent: "Asia", population: 241000000 },
  { name: "Japan", flag: "🇯🇵", capital: "Tokyo", continent: "Asia", population: 124000000 },
  { name: "United Kingdom", flag: "🇬🇧", capital: "London", continent: "Europe", population: 67000000 },
  { name: "Turkey", flag: "🇹🇷", capital: "Ankara", continent: "Europe/Asia", population: 85000000 },
  { name: "Saudi Arabia", flag: "🇸🇦", capital: "Riyadh", continent: "Asia", population: 36000000 }
];
    function getMenuText() {
      return "=================================\n" +
             " WORLD FLAGS MANAGER\n" +
             "=================================\n\n" +
             "1. View All Countries\n" +
             "2. Add New Country\n" +
             "3. Search Country\n" +
             "4. Update Country Information\n" +
             "5. Remove Last Country\n" +
             "6. Show Total Countries\n" +
             "7. Exit\n\n" +
             "Enter your choice:";
    }



        // ---------- Helpers ----------
    // Returns text describing one country
    function describeCountry(country) {
      return country.flag + " " + country.name +
        "\n   Capital: " + country.capital +
        "\n   Continent: " + country.continent +
        "\n   Population: " + country.population.toLocaleString();
    }

    // Returns the index of a country, or -1 if not found
    function findCountryIndex(name) {
      var target = name.toLowerCase();
      for (var i = 0; i < countries.length; i++) {
        if (countries[i].name.toLowerCase() === target) {
          return i;
        }
      }
      return -1;
    }

    // Returns a valid population, or -1 if invalid
    function parsePopulation(text) {
      var value = Number(text);
      if (text.trim() === "" || isNaN(value) || value < 0) {
        return -1;
      }
      return Math.floor(value);
    }

        // ---------- Features ----------
function viewAllCountries() {
      if (countries.length == 0) {
        alert("No countries in the list.");
        return;
      }
      var output = "ALL COUNTRIES\n\n";
      for (var i = 0; i < countries.length; i++) {
        output += (i + 1) + ". " + describeCountry(countries[i]) + "\n\n";
      }
      console.log(output);
    }

function addCountry() {
      var name = prompt("Enter country name:");
      if (name === null || name.trim() === "") {
        alert("Cancelled: name cannot be empty.");
        return;
      }
      name = name.trim();
      if (findCountryIndex(name) !== -1) {
        alert(name + " already exists.");
        return;
      }

      var flag = prompt("Enter flag emoji:");
      var capital = prompt("Enter capital:");
      var continent = prompt("Enter continent:");
      var popText = prompt("Enter population:");
      if (flag === null || capital === null || continent === null || popText === null) {
        alert("Cancelled. Country was not added.");
        return;
      }

      var population = parsePopulation(popText);
      if (population === -1) {
        alert("Invalid population. Country was not added.");
        return;
      }

      var newCountry = {
        name: name,
        flag: flag,
        capital: capital,
        continent: continent,
        population: population
      };
      countries.push(newCountry);
      alert(name + " added successfully!");
    }


function searchCountry() {
      var name = prompt("Enter country name to search:");
      if (name === null) {
        return;
      }
      var index = findCountryIndex(name.trim());
      if (index === -1) {
        alert("Country not found");
      } else {
        alert(describeCountry(countries[index]));
      }
    }

function updateCountry() {
      var name = prompt("Enter the name of the country to update:");
      if (name === null) {
        return;
      }
      var index = findCountryIndex(name.trim());
      if (index === -1) {
        alert("Country not found");
        return;
      }

      var choice = prompt(
        "Updating " + countries[index].flag + " " + countries[index].name +
        "\n\n1. Update capital\n2. Update population\n\nEnter 1 or 2:"
      );

      if (choice === "1") {
        var newCapital = prompt("Enter new capital:");
        if (newCapital === null || newCapital.trim() === "") {
          alert("No changes made.");
        } else {
          countries[index].capital = newCapital.trim();
          alert("Capital updated!");
        }
      } else if (choice === "2") {
        var popText = prompt("Enter new population:");
        if (popText === null) {
          alert("No changes made.");
        } else {
          var population = parsePopulation(popText);
          if (population === -1) {
            alert("Invalid population. No changes made.");
          } else {
            countries[index].population = population;
            alert("Population updated!");
          }
        }
      } else {
        alert("Invalid choice. No changes made.");
      }
    }








    function main() {
      var running = true;

      while (running) {
        var choice = prompt(getMenuText());

        // Cancel button returns null, so treat it as Exit
        if (choice === null) {
          choice = "7";
        }
        choice = choice.trim();

        if (choice === "1") {
          viewAllCountries();
        } else if (choice === "2") {
          addCountry();
        } else if (choice === "3") {
          searchCountry();
        } else if (choice === "4") {
          updateCountry();
        } else if (choice === "5") {
          removeLastCountry();
        } else if (choice === "6") {
          showTotal();
        } else if (choice === "7") {
          alert("Goodbye! 🌍");
          running = false;
        } else {
          alert("Invalid choice. Please enter a number from 1 to 7.");
        }
      }
    }

    main();