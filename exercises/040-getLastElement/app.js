function getLastElement(array) {

  var lastIndex = array.length-1; //obtengo la ultima posicion(indice) del array
  
  return array[lastIndex]; // retorno el entero de la posicion(indice) ultimo 
}

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4
