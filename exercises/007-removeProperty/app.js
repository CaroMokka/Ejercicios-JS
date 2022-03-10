function removeProperty(obj, key) {
  delete obj[key];
}

var obj = {
  name: 'Sam',  // primero lee esto la maquina
  age: 20
}

removeProperty(obj, 'name'); //segundo invoca la funcion de arriba
console.log(obj.name);