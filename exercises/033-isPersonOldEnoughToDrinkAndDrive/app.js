function isPersonOldEnoughToDrinkAndDrive(person) {
  // the person object contains an "age" property inside
  // your code here
  if(person.age){ //nadie puede conducir y beber es ilegal da lo mismo la edad
    return false;
  }
}

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false