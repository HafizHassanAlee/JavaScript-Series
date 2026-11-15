

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

// ==========================================
// 3. CORE TRANSACTION LOGIC
// ==========================================

function bookTicket() {
  if (!selectedMovie) {
    console.log("\n⚠️ Please select a movie first (Option 2) before booking tickets!\n");
    return;
  }

  viewAvailableSeats();
  let seatChoice = prompt("Enter the seat code you want to book (e.g., A1):").toUpperCase().trim();

  let seatExists = false;
  for (let i = 0; i < seatGrid.length; i++) {
    if (seatGrid[i].includes(seatChoice)) {
      seatExists = true;
      break;
    }
  }

  if (!seatExists) {
    console.log(`\n❌ Seat "${seatChoice}" does not exist in the theater.\n`);
    return;
  }

  if (bookedSeats.includes(seatChoice)) {
    console.log(`\n❌ Seat "${seatChoice}" is already reserved! Please choose another seat.\n`);
  } else {
    bookedSeats.push(seatChoice); 
    myBookings.push(seatChoice);  
    console.log(`\n🎉 Success! Seat "${seatChoice}" has been booked for "${selectedMovie.title}".\n`);
  }
}

function cancelBooking() {
  if (myBookings.length === 0) {
    console.log("\n⚠️ You have no active bookings to cancel.\n");
    return;
  }

  console.log("\nYour current booked seats:", myBookings.join(", "));
  let cancelSeat = prompt("Enter the seat code you want to cancel:").toUpperCase().trim();

  let index = myBookings.indexOf(cancelSeat);

  if (index !== -1) {
    myBookings.splice(index, 1); 
    
    let globalIndex = bookedSeats.indexOf(cancelSeat);
    if (globalIndex !== -1) {
      bookedSeats.splice(globalIndex, 1);
    }
    
    console.log(`\n✅ Booking for seat "${cancelSeat}" has been cancelled successfully.\n`);
  } else {
    console.log(`\n❌ You do not have a booking for seat "${cancelSeat}".\n`);
  }
}

function calculateTotalBill() {
  if (!selectedMovie || myBookings.length === 0) {
    console.log("\n💰 Total Bill: $0.00 (No movie selected or zero tickets booked)\n");
    return;
  }

  let subtotal = myBookings.length * selectedMovie.price;
  let tax = subtotal * 0.05; 
  let total = subtotal + tax;

  console.log("\n================================");
  console.log("        INVOICE / BILL");
  console.log("================================");
  console.log(`Movie: ${selectedMovie.title}`);
  console.log(`Price per Ticket: $${selectedMovie.price.toFixed(2)}`);
  console.log(`Tickets Booked: ${myBookings.length}`);
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Tax & Fees (5%): $${tax.toFixed(2)}`);
  console.log(`--------------------------------`);
  console.log(`TOTAL BILL: $${total.toFixed(2)}`);
  console.log("================================\n");
}