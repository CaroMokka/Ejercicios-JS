// Mantenerse
var output = keep([1, 2, 3, 2, 1], 2) 
function keep(arr,elem){
    var newArr = [];// nuevo array
    for(var i = 0; i < arr.length; i++){//recorro el array que me entregan por parametro
        if(arr[i] == elem){//pregunto si el elemento del array dado es coincidente con ele elemento dado por parametro
            newArr.push(arr[i])//si es asi guardame los elementos coincidentes dentro del array nuevo
        }
    }
    return newArr;//retorna el array nuevo

}
console.log(output);// --> [2, 2]