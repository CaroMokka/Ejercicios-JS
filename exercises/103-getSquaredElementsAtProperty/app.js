//Obtener elementos cuadrados en la propiedad
var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  var numAlCuadrado = [];
  if(!Array.isArray(obj[key])){
    return numAlCuadrado;
  }
  for(var i = 0; i < obj[key].length; i++){
    numAlCuadrado.push(obj[key][i] * obj[key][i]);// Que me pusheee al array nuevo los resultados de la operacion al cuadrado (i * i)
  }
  return numAlCuadrado;

}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]