function godzilavskong(input) {
    let decor = 0.10 * budget;
    let budget = Number(input[0]);
    let statistiBroi = Number(input[1]);
    let oblekloPrice = Number(input[2]);

    totalCostumePrice = statistiBroi * oblekloPrice;
    if (statistiBroi > 150) {
        totalCostumePrice *= 0.90;

    }
    let totalPrice = totalCostumePrice + decor;


    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log("action");
        console.log(` wingard will have ${moneyLeft.toFixed(2)} weq`);


    } else {

        let moneyNeed = totalPrice - budget;
        console.log("not enough dinero");
        console.log(`winder needs ${moneyNeed.toFixed(2)} `);
    }


}
godzilavskong(["20000", "120", "55.5"]);
