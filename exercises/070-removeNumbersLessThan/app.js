var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) { //eliminar números menores que
    for(var key in obj){ //aqui recorro el objeto con FOR IN , llave por llave
        if(obj[key] < num){//aca pregunto si la llave recorrida es menor al num ingresado en los parametros
            delete obj[key];//aca elimino la llave que cumple con la condicion de ser menor 
        }
    }
    return obj;//aca devuelvo el objeto sin la llave menor , ya que fue eliminada
}

removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }
