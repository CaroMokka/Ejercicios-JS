function addToFront (arr, element){
  arr.unshift(element); //Unshift agrega elemento al principio del arreglo
  return arr; //aqui devuelvo el array con el elemento incluido al frente
}

var output = addToFront ([1, 2], 3);
console.log(output);



/* function addToFront(arr, element) {
 
 
  return newArray;
}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2] */

//Hint: you can use "unshift"(es un metodo)