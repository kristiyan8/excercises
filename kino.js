function kino(input) {
    
    
    let filmType = input[0];
    let rows = Number(input[1]);    
    let colums = Number(input[2]);
    
    let totalPlaces = rows * colums;
    let profit = 0;

    if (filmType === 'Premiere') {
         profit = totalPlaces * 12;
    } else if (filmType = 'Normal') {
        profit = totalPlaces * 7.5; 
    } else if (filmType === 'Discount') {
        profit = totalPlaces * 5;
    }

    console.log(`${profit.toFixed(2)} leva`);

}
kino(["Premiere",
"10",
"12"]);
