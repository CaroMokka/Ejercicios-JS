function addObjectProperty(obj1, key, obj2) { //En el parametro key entra una clave mandada por la function desde sus argumentos
  obj1[key] = obj2; //algoritmo añade una nueva propiedad en el "obj1" q es "manager", y
  return obj1[key]; //"manager" : contiene el obj2 completo
}

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
  //manager: {name: 'Mr. Burns', role: 'supervisor'}
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr.Burns', role: 'supervisor' }
