// Calcular el promedio de números
var input = [1,2,3,4,5];

function computeAverageOfNumbers(arr){
    var num = arr.length;//longitud del array
    console.log(num)
    var sum = arr.reduce((a,b)=> a + b)//sumatoria de todos los elementos del array
    console.log(sum);
    return sum/num;//division de la suma (total) con la cantidad de elementos del array


}
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3