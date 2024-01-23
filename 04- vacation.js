 function vacationBookList(input) {
    let curBookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let day = Number(input[2]);

    let totalHours = curBookPages / pagesPerHour;
    let hoursPerDay = totalHours / day ;
    
    console.log(hoursPerDay);

 }

 vacationBookList(["212 ",
 "20 ",
 "2 "]);

