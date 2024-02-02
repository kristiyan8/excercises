function demo() {
    
    let figureName = input[0];

    if(figureName === 'square'){
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));


    } else if (figureName === 'rectangle') {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));

    

    } else if (figureName === 'circle') {

  
    } else if (figureName === 'triangle') {

    }



    

}
demo(["rectangle", "5" , "10"]);