function demo() {

    let figureName = input[0];
    let area = 0;

    if (figureName === 'square') {
        let a = Number(input[1]);
        area = a * a;



    } else if (figureName === 'rectangle') {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;




    } else if (figureName === 'circle') {
        let r = Number(input[1]);
        area = Math.PI * Math.pow(r, 2);



    } else if (figureName === 'triangle') {
        let a = Number(input[1]);
        let ha = Number(input[2]);
        area = (a * ha) / 2;


    }

    console.log(area.toFixed(3));

}
demo(["rectangle", "5", "10"]);