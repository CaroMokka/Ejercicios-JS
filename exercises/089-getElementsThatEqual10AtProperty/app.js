// Obtener elementos que sean iguales a 10 en la propiedad
var obj = {
    key: [1000, 10, 50, 10]
  };
function getElementsThatEqual10AtProperty(obj, key){

    var arr = obj[key];
    var newArr = [];
    if(arr.length == 0 || !Array.isArray(arr) || !arr){
        return [];
    } else {
        for(var i = 0; i < arr.length; i++){ // i es el indice que esta siendo iterardo dentro del array
            if(arr[i] === 10){  //arr[i] es el elemento del indice(i)
               newArr.push(arr[i]);//aqui estoy agregando los "elementos" al array nuevo
            }


        }
    
    }
    return newArr;

  
    }


var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]

