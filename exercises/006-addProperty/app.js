function addProperty(obj, key) {

  obj[key] = true;
  return obj; //solo retornar objeto
 
}

var myObj = {};

addProperty(myObj, 'myProperty');
console.log(myObj); // --> true  o { myProperty: true }

//Ejercicio para agregar data a un objeto