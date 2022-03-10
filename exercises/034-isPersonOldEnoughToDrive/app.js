function isPersonOldEnoughToDrive(person) { //Aqui la funcion recibe el parametro "person"
  if(person.age >= 16){
    return true;
  } else return false;
}

var obj = { //Aqui esta declado el objeto con su clave-valor "objet = { key: 'value' }"
  age: 16
};

var output = isPersonOldEnoughToDrive(obj); // Aqui llamo a la funcion y mando de argumento la variable "obj"
console.log(output);