var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) { //eliminar valores numéricos
    for (var key in obj){ //recorri el objeto
        if(Number.isInteger(obj[key])){ //METODO NUMBER.ISINTEGER(aui va el valor a evaluar), aqui verifico si la "key " o propiedad del objeto es un entero
            delete obj[key];// si es un entero entonces elimina los enteros
        }
    }
    return obj;
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }