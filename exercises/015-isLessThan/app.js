function isLessThan(num1, num2) { 
  if(num2 < num1){ //por esta condicion de llama "Menor que..."  "<"
    return true;
  } else return false;
}

var output = isLessThan(9, 4);
console.log(output); // --> verdadero
