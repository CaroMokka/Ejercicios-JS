// ESTE EJERCICIO ME PIDE LA CANTIDADES DE OCURRENCIAS QUE TIENE CADA CARACTER DENTRO DEL STRING, Y QUE 
//ADEMAS LO GUARDE DENTRO DE UN OBJETO NUEVO {"LLAVE" "VALOR"}  SIENDO LLAVE EL CARACTER Y VALOR LAS CANTIDAD
//DE OCURRENCIAS
//forEach()
function countAllCharacters(str){
    var newObj = {};
    if(!str.length){// aqui verifico que el string tenga contenido
        return 0;
    }
    var arr = str.split('')//aqui arr es un array que contiene cada caracter del str
    arr.forEach(element => {//aqui recorre cada elemento del array
        if(newObj[element]){//aqui pregunto si el elemento iterado del array existe en el objeto nuevo
            newObj[element] += 1;//SI existe entonces sumale 1
        } else newObj[element] = 1;//SI NO existe entonces crea uno
        
    });
    return newObj;//aqui retorno el objeto nuevo con las keys y sus cantidades de ocurrencias
   
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
