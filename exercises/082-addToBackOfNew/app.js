function addToBackOfNew(arr, element) {
    var newArr = [];//nuevo array
    for(var i = 0; i < arr.length; i++){//recorro el array viejo
        newArr.push(arr[i]); //agrego los elementos del array viejo al nuevo array
    }
    newArr.push(element); //agrego el elemento al array en ultima posicion
    return newArr; //devuelvo el NUEVO array con los elementos
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]