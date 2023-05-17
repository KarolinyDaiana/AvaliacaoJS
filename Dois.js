const fibonacci = [];
let somaPares = 0;

fibonacci [0] = 0;
fibonacci [1] = 1;

for(var cont = 2; cont < 50; cont++){
    fibonacci[cont] = fibonacci[cont - 2] + fibonacci[cont - 1];

    if(fibonacci[cont] > 50000) {
        break;
    }
    if (fibonacci[cont] % 2 == 0) {
        somaPares = somaPares + fibonacci[cont];
    }
}

console.log(somaPares);