for(var cont1 = 1; cont1 <= 100; cont1++) {
    let divisor = 0;
    for(var cont2 = 1; cont2 <= 100; cont2++) {
        if(cont1 % cont2 == 0) {
            divisor++;
        }
    }
    if(divisor <= 2) {
        console.log(cont1, " é primo.")
    } 
}