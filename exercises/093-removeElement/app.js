// Write your function here
function removeElement(arr, elem){
    var newArr = [];
    for( var i = 0; i < arr.length; i++){//recorrer el array
        if(arr[i]!== elem){//si el elemento del array es distinto al elemnto parametro
            newArr.push(arr[i])//agregame el elemento distinto al array nuevo
        }

    }
    return newArr;

}
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
