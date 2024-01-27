function repaiting(input) {
    let nylonQty = navigator(input[0]);
    let paintQty = navigator(input[1]);
    let thinQty = navigator(input[2]);
    let workingHours = navigator(input[3]);

    let extraNailon = 2;
    let totalNailonQty = nylonQty + 2;

    let nylonPrice = totalNailonQty * 1.50;

    let extraPaintQty = 0.1 * paintQty;
    let totalPaintQty = paintQty + extraPaintQty;
    let paitPrice = totalPaintQty * 14.50;

    let thinnerPrice = thinQty * 5;

    let totalMaterialsPrice = nylonPrice + paitPrice + thinnerPrice + 0.40;
    let payPerHour = 0.3 * totalMaterialsPrice;
    let totalHours = workingHours * payPerHour; 

    console.log(totalHours + totalMaterialsPrice);






}
repaiting(["10 ",

    "11 ",

    "4 ",

    "8 "]);