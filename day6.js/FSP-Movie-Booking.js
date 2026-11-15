

const movies = [
  { title: "Avatar: The Way of Water", price: 12.00 },
  { title: "Top Gun: Maverick", price: 10.00 },
  { title: "Dune: Part Two", price: 15.00 },
  { title: "John Wick: Chapter 4", price: 11.00 },
  { title: "Interstellar", price: 13.00 }
];

let selectedMovie = null;
let myBookings = [];      // Stores user's booked seat codes
let bookedSeats = [];     // Tracks globally reserved seats across the theater

let seatGrid = [
  ["A1", "A2", "A3", "A4"],
  ["B1", "B2", "B3", "B4"],
  ["C1", "C2", "C3", "C4"],
  ["D1", "D2", "D3", "D4"]
];

// ==========================================
// 2. DISPLAY & UI FUNCTIONS
// ==========================================

function displayMenu() {
  console.log("================================");
  console.log("       CINEMA BOOKING SYSTEM");
  console.log("================================");
  console.log("1. View Movies");
  console.log("2. Select Movie");
  console.log("3. View Available Seats");
  console.log("4. Book Ticket");
  console.log("5. Cancel Booking");
  console.log("6. View My Bookings");
  console.log("7. Calculate Total Bill");
  console.log("8. Exit");
  console.log("================================");
}

function viewMovies() {
  console.log("\n================================");
  console.log("       AVAILABLE MOVIES");
  console.log("================================");
  for (let i = 0; i < movies.length; i++) {
    console.log(`${i + 1}. ${movies[i].title} - $${movies[i].price.toFixed(2)}`);
  }
  console.log("");
}

function selectMovie() {
  viewMovies();
  let choice = Number(prompt("Enter the number of the movie you want to select (1-5):"));
  
  if (choice >= 1 && choice <= movies.length) {
    selectedMovie = movies[choice - 1];
    console.log(`\n✅ Success! You selected: "${selectedMovie.title}" ($${selectedMovie.price.toFixed(2)})\n`);
  } else {
    console.log("\n❌ Invalid choice. Please select a valid movie number (1-5).\n");
  }
}

function viewAvailableSeats() {
  console.log("\n================================");
  console.log("       CINEMA SEATING CHART     ");
  console.log("================================");
  
  for (let i = 0; i < seatGrid.length; i++) {
    let rowDisplay = "";
    for (let j = 0; j < seatGrid[i].length; j++) {
      let seat = seatGrid[i][j];
      if (bookedSeats.includes(seat)) {
        rowDisplay += "[ X ] "; // Booked
      } else {
        rowDisplay += `[${seat}] `; // Available
      }
    }
    console.log(rowDisplay);
  }
  console.log("Legend: [Seat] = Available | [ X ] = Booked\n");
}

function viewMyBookings() {
  console.log("\n================================");
  console.log("        MY BOOKINGS");
  console.log("================================");
  if (myBookings.length === 0) {
    console.log("You have no active ticket bookings.\n");
  } else {
    if (selectedMovie) {
      console.log(`Selected Movie: ${selectedMovie.title}`);
    }
    console.log(`Booked Seats: ${myBookings.join(", ")}`);
    console.log(`Total Tickets: ${myBookings.length}\n`);
  }
}