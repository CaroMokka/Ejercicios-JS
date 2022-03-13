//Obtener elementos impares en la propiedad
var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
  var numImpares = [];
  if(!Array.isArray(obj[key])){
    return numImpares;
  }
  for(var prop in obj[key]){//Recorriendo asi la llave(key) del objeto me da los valores sueltos no como array
    if(obj[key][prop] % 2 === 1){
      numImpares.push(obj[key][prop])
    }
  
  }
  return numImpares;
    // your code here
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]