function checkAge(name, age) {
  if (age >= 21){
    return   "Welcome," + name;                   
  } else if (age <= 21) {
    return  "Go home," + name;
  };
}


console.log(checkAge('Adrian!', 22));