var obj = {
    key: [1, 2, 3]
  };
function getAverageOfElementsAtProperty(obj,key){// obtener el promedio de elementos en la propiedad
  
  var newArr = obj[key];
    if(newArr.length === 0 || !Array.isArray(newArr) || !obj[key]) {//Aqui debo validar los puntos que me piden
      //Si el array en esa key está vacío, debería retornar 0.
      //Si la propiedad en esa key no es un array, debería retornar 0.
      //Si no hay ninguna propiedad en esa key, debería retornar 0.
      return 0;
    } else {
      
    var total = newArr.length;
    var sum = newArr.reduce((anterior,actual)=> {return anterior + actual});

    
    
    }
    
   
    return sum/total;
  
}

  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2
  
 /*  var prom = obj[key].reduce((an, ac)=> {
    var result = an + ac;
    return result;
});
return prom/3; */

 