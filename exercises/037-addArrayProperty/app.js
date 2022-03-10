function addArrayProperty(obj, key, arr) { //recibira un objeto( {} ), una key( "" ) y un array( [] ) 
  obj[key] = arr; // aqui establesco que la key de mi objeto ingresado sera un array, se manipulan los datos ingreasados
  return obj;
}

var myObj = {};

var myArray = [1, 3];

addArrayProperty(myObj, "myProperty", myArray);
console.log(myObj.myProperty); // --> [1,3]