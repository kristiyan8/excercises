function godzilavskong(input) {
    let decor = 0.10 * budget;
    let budget = Number(input[0]);
    let statistiBroi = Number(input[1]);
    let oblekloPrice = Number(input[2]);

    totalCostumePrice = statistiBroi * oblekloPrice;
    if (statistiBroi > 150) {
        totalCostumePrice *= 0.90;

    }


}
godzilavskong(["20000",
"120",
"55.5"]);
