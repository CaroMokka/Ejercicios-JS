function isOdd(num){
  if(num % 2 === 1){ //formula para sacar un numero impar
      return true;
  } else {
      return false;
  }
}

var output = isOdd(9);
console.log(output); // -->true