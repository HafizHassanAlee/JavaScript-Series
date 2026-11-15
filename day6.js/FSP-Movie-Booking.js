    function choice() {
    console.log("================================");
    console.log("      CINEMA BOOKING SYSTEM");
    console.log("================================\n");
    
    console.log("1. View Movies");
    console.log("2. Select Movie");
    console.log("3. View Available Seats");
    console.log("4. Book Ticket");
    console.log("5. Cancel Booking");
    console.log("6. View My Bookings");
    console.log("7. Calculate Total Bill");
    console.log("8. Exit\n");
    choice = prompt("Enter your choice: ");
    }

    choice()

    let running =true;

    while(running){
        choice();
        if (choice==1){
            view_movies();
        } else if (choice==2){
            select_movie();
        } else if (choice==3){
            view_available_seats();
        } else if (choice==4){
            book_ticket();
        } else if (choice==5){
            cancel_booking();
        } else if (choice==6){
            view_my_bookings();
        } else if (choice==7){
            calculate_total_bill();
        } else if (choice==8){
            running=false;
        } else {
            console.log("Enter Valid Input .");
            choice();
        }
    }