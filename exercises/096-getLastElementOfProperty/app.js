// Obten el ultimo eleemnto de la propiedad
var obj = {
    key: [1, 2, 5]
  };

function getLastElementOfProperty(obj, key){
    if(Array.isArray(obj[key])){
        var newArr = obj[key];
        return newArr[newArr.length -1] //aqui obtengo el ultimo elemento del array
    }

}

var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5