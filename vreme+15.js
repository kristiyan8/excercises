function vreme(input) {
    let hour = Number(input[0]);
    let minute = Number(input[1]);

    let mins = hour * 60 + minute + 15;
    
    let newHour = Math.floor(mins / 60);
    let newMin = mins % 60;
    if (newHour === 24) {
        newHour = 0;
    }

    if (newMin < 10) {
        console.log(`${newHour}:0${newMin}`);

    } else {
        console.log(`${newHour}:${newMin}`);
    }


}
vreme(["24" , "46"]);