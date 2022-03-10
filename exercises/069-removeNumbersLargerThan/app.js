var obj = { 
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) { //eliminar números mayores que
    for(var key in obj){ //For in para recorrer un objeto, la clave y el objeto que deseo recorrer
        if(obj[key] > num){
            delete obj[key]; // delete es el metodo para eliminar una clave(key) de un objeto
        }
    }
    return obj;
}

removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }

//Aqui me piden que elimine la clave(key) con el value mayor que el numero dado (num)
//Con For IN recorro un objeto, NO OLVIDAR!!!!
//con el metodo "delete" puedo eliminar una clave de un objeto