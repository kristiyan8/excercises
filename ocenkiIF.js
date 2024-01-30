function ocenki(input) {
    let numbner = Number(input[0]);

    if (number >= 5.50) {
        console.log("excelent");
    } else if (number >= 4.50) {
         console.log("very good");
    } else if (number >= 3.50) {
         console.log("Good");


    } else if (number >= 3) {
        console.log("poor");

    } else if (numbner < 3) {
        console.log("really bad");
    }


}
ocenki(["5.50"]);