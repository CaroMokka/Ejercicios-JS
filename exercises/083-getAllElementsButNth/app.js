//nth 
function getAllElementsButNth(array, n) { //Obtener todos los elementos pero enésima
    var newArr = []; //nuevo array para se llenado
    for(var i = 0; i < array.length; i++){
        newArr.push(array[i]) //agrego los elementos del array vuejo para hacr uno nuevo
    }
    newArr.splice(n,1) //aqui elimino el elemneto en el indice entregado en los parametro(n)

    return newArr;

}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']