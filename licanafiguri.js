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
        let r = Number(input[1]);
        let area = Math.PI * Math.pow(r,2);
        console.log(area.toFixed(3));

  
    } else if (figureName === 'triangle') {
        let a = Number(input[1]);
        let ha = Number(input[2]);
        let area = (a * ha) / 2;
        console.log(area.toFixed(3));

    }



    

}
demo(["rectangle", "5" , "10"]);