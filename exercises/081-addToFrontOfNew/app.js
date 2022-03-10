
function addToFrontOfNew(arr, element) {//añadir al frente de nuevo
    var newArr =[];//ser una NUEVA instancia del array
    for(var i =0; i < arr.length; i++){
        newArr.push(arr[i])
    }
    newArr.unshift(element);// este devuelve el elemento agrgado NO el array nuevo
    return newArr;// aqui devulevo el array con todos los elementos 
} 
    
 

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
//console.log(input); // --> [1, 2]