

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