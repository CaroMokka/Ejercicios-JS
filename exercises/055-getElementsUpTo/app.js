function getElementsUpTo(array, n) {
  array.splice(n,2);
 
  return  array;
  // your code here

}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
