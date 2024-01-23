function foodMenu(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegiMenu = Number(input[2]);

    let menuPrice = chickenMenu * 10.45 + fishMenu * 12.40 + vegiMenu * 8.15;
    let desertPrice = 20/100 * menuPrice;
    let deliveryPrice = menuPrice + desertPrice + 2.50;

    console.log(deliveryPrice);


}

foodMenu(["2 ",
    "4 ",
    "3 "]
)
