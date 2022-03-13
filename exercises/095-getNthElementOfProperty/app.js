// Obtener el elemento enésimo de la propiedad
var obj = {
    key: [1, 2, 6]
  };
function getNthElementOfProperty(obj, key, num){
    for(var key in obj){
        if(Array.isArray(obj[key])){//verifico si la llave es un Array
            return obj[key][num];//retorno el valor por el  indice dado (num)/// obj[key](llave) y [num] es el indice
        } else return undefined;
    }
     
    }


var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2


//Si no hay ninguna propiedad en la clave dada, la función debería devolver indefinida.

/* 
for(var key in obj){
    if(Array.isArray(obj[key])){
        var arr = obj[key];
        if(arr.length == 0 || num > arr.length || !arr || obj[key] == null){
            return undefined;

        } else {
            var elemento = arr.splice(num,1)
            return Number(elemento);//aqui converti un array en nuemro entero ( [ 2 ] a 2 )
        
        }
       
   
        } 
    } */