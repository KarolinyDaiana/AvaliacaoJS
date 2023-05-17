const frutas = ["maçã", "banana", "laranja"];
console.log(frutas);

//b) Adicione as frutas "manga" e "abacaxi" ao final do array "frutas" e imprima o array
//modificado.
frutas.push("manga", "abacaxi");
console.log(frutas)

//Remova o primeiro item do array "frutas" e imprima o array modificado.
frutas.shift();
console.log(frutas);


// Adicione as frutas “tangerina” e “abacate” entre a fruta "banana" e a fruta "maçã" no
// array "frutas".
frutas.splice(1, 0, "tangerina", "abacate");

//Adicione a fruta “abacaxi” no início do array "frutas".
frutas.unshift("abacaxi");

//Verifique o tamanho do array "frutas" e imprima o resultado.
console.log(frutas.length);

// g) Use o método map para criar um novo array chamado "tamanho", que contenha o
// tamanho (número de caracteres) de cada fruta do array "frutas". Imprima o novo array
// "tamanho".
const tamanho = frutas.map((frutas) => {
    return frutas.length
})
console.log(tamanho);

// Use o método filter para criar um novo array chamado "maiores", que contenha apenas
// as frutas do array "frutas" que possuem mais de 5 caracteres. Imprima o novo array
// "maiores".
const maiores = frutas.filter((frutas) => {
    return frutas.length > 5;
})
console.log(maiores);

//Imprima o resultado final do array "frutas".
console.log(frutas);