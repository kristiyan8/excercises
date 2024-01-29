function ocenki(input) {
    let numbner = Number(input[0]);

    if( number >= 5.50){
        console.log("excelent");
    }
    if(number >= 4.50){
        console.log("very good");
    }
    if(number >= 3.50){
        console.log("Good");


    }
    if(number >= 3){
        console.log("poor");

    }
    if(numbner < 3){
        console.log("really bad");
    }


}
ocenki(["2.30"]);