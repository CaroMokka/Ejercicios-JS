function joinThreeArrays(arr1, arr2, arr3) {//une 3 arrays
  var newArr = arr1.concat(arr2); //CONCAT() para unir arrays
  var newNewArr = newArr.concat(arr3);
  return newNewArr;
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
