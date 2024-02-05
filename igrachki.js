function igrachki(input) {
    let tripPrice = Number(input[0]);
    let puzzelCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let moneyEarned =  (puzzelCount * 2.60) + (dollCount * 3) + (bearsCount * 4.10) + (minionCount * 8.20) + (truckCount * 2);
    let toysCount = puzzelCount + dollCount + bearsCount + minionCount + truckCount;

    if (toysCount >= 50) {
        let discount = 0.25 * moneyEarned; 

    }

    moneyEarned



}
igrachki(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"]);
