function isEitherEven(num1, num2){
    if(num1 % 2 === 0 || num2 % 2 === 0){ // formula de comparacion donde solo uno cumple ser PAR, operador OR ( || )
        return true;
    } else return false;
}

var output = isEitherEven(1, 4);
console.log(output);
