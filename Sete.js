const string = "programacao web e mobile";
const array = [];

console.log(string)

for (cont = 0; cont <= string.length; cont++ ) {
        array.push(string[cont]);
}

for(cont1 = 0; cont1 < array.length; cont1++) {
    var iguais = 0;
    for(cont2 = 0; cont2 < array.length; cont2++) {
        if(array[cont1] == array[cont2]) {
            iguais++;
        }
    }
    if(iguais > 1) {
        console.log("Letra: " + array[cont1] + ". Repetições: " + iguais + ".")
    } else {
        console.log("Letra: " + array[cont1] + ". Não houve repetições.")
    }
}
