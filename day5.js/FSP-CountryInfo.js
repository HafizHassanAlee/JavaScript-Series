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