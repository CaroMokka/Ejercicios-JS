function joinArrays(arr1, arr2) {
  var newArray = arr1.concat(arr2); // concat() une dos o mas arrays creando uno nuevo
  return newArray
}
var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
