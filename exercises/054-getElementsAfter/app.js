function getElementsAfter(array, i) {
  var newArray = array.slice(i+1,5) // corta un trozo del array
  return newArray;
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
