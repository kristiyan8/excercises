
 function materialsPrice(input) {
    let pencilCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let preparatCount = Number(input[2]);
    let discountPrice = Number(input[3]);
   

   let pencilPrice = pencilCount * 5.80;
   let markerPrice = markerCount * 7.20;
   let preparatPrice = preparatCount * 1.20;
   let totalPrice = pencilPrice + markerPrice + preparatPrice;
   

   let totalDiscount = totalPrice - (totalPrice * 0.25);

   console.log(totalDiscount);







 }
 materialsPrice(["2 ",
 "3 ",
 "4 ",
 "25 "]
 );