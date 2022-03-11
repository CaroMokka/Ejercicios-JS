//obtener índice de
function getIndexOf(character, str){ 
    //retorna la primera posición de dicho caracter en dicho string
    //validacion de si existe el caracter dentro del string
    var arr = str.split("");// aqui transformo mi string en un array
    console.log(arr)
   var elemento = arr.find(el => el == character) //aqui encuentro la primera coincidencia de elemento y "character"
   var index = arr.findIndex(index => index === elemento)//aqui encuentro la posicion del elemento en este caso, la posicion de "a"
   return index;


   
    

}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2


//Use find(callback) para encontrar la primera coincidencia, iterando con find() y un metodo flecha
//luego use findIndex() para encontrar el indice del elemento encontardo con find()
//NO USAR indexOf()