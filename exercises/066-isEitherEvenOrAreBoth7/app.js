function isEitherEvenOrAreBoth7(num1, num2) { // Es par o son ambos 7
    if(num1 % 2 === 0 || num2 % 2 === 0){
        return true;
    } else return false;
   
}
var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

/* var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true */
