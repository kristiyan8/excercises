function calcDeposit(input) {
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualPercent = Number(input[2]);

    let annualPercentDecimal = annualPercent / 100;

    let sum = depositSum + depositPeriod * ((depositSum * annualPercentDecimal) / 12);
    console.log(sum);


}
calcDeposit([" 200 ",  "3 ", " 5.7 "]);