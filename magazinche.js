function magazinche(input){
    let product = input[0];
    let town = input[1];
    let quanitity = Number(input[2]);

    let finalSum = 0;

    if(town === 'Sofia'){
        switch(product){
            case 'coffee': finalSum = quanitity * 0.50;break;
            case 'water': finalSum = quanitity * 0.80;break;
            case 'beer': finalSum = quanitity * 1.20;break;
            case 'sweets': finalSum = quanitity * 1.45;break;
            case 'peanuts':finalSum = quanitity * 1.60;break;
        }
        
    }else if( town === 'Plovdiv'){
        switch(product){
            case 'coffee': finalSum = quanitity * 0.40;break;
            case 'water': finalSum = quanitity * 0.70;break;
            case 'beer': finalSum = quanitity * 1.20;break;
            case 'sweets': finalSum = quanitity * 1.45;break;
            case 'peanuts':finalSum = quanitity * 1.50;break;
        }

    }else if (town === 'Varna'){
        switch(product){
            case 'coffee': finalSum = quanitity * 0.50;break;
            case 'water': finalSum = quanitity * 0.80;break;
            case 'beer': finalSum = quanitity * 1.20;break;
            case 'sweets': finalSum = quanitity * 1.30;break;
            case 'peanuts':finalSum = quanitity * 1.50;break;
        }

    }
    console.log(finalSum);



}
magazinche(['coffee' , 'varna', 2]);