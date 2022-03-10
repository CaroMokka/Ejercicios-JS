function addToBack(arr, element) {
  arr.push(element); //Push agregar elemento al final del arreglo
  return arr;
}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]