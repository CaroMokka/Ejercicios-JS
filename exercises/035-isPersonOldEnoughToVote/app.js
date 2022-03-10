function isPersonOldEnoughToVote(person) {
  if(person.age >= 18){ //aqui obtengo la edad "person = {age: "19"}", dentro de person esta mi obj
    return true
  } else return false;
}

var obj = {
  age: "19"
};

var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true