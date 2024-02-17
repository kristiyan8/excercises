function demo(input) {

    let element = input[0];

    switch (element) {
        case 'banana':
        case 'kiwi':
        case 'lemon':
        case 'cherry':
        case 'grapes':console.log('fruit');break;
        case 'tomato': 
        case 'carrot':
        case 'cucumber':
        case 'pepper':console.log('vegetable');break;
        default: console.log('unknow'); break; 
    }


}
demo(['lemon'])