for(var cont = 1; cont <= 100; cont++) {
    if(cont % 3 == 0 && cont % 5 == 0) {
        console.log(cont, "FizzBuzz");
    } else if(cont % 3 == 0) {
        console.log(cont, "Fizz");
    } else if(cont % 5 == 0) {
        console.log(cont, "Buzz");
    }
}