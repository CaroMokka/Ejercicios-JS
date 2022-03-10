function areBothOdd(num1, num2){
    if(num1 % 2 === 1 && num2 % 2 === 1){ //formula que compara que ambos numeros ingresados sean impares
        return true;
    } else {
        return false;
    }
}
var output = areBothOdd(1, 3);
console.log(output); // --> true