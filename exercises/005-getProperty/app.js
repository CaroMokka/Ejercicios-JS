//declarar funcion getproperty, esta funcion
//si obj viene como argumento entonces retorna el "valor" de la key(llave) del objeto
function getProperty(obj, key) {
    if(obj){
    return obj[key];
  }
 
}

var obj = {
  key : 'value' // "valor" de key
}

var output = getProperty(obj, 'key'); //aqui llamo la funcion con parametro "obj" y "key"
 
console.log(output); // value


//Ejercicio para "obtener" data de un objeto