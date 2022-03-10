var obj = {
    a: 2,
    b: 3,
    c: 4
  };

function removeOddValues(obj) { //eliminar valores impares
    for(var key in obj){//aqui estoiy recorriendo el objeto
        if(obj[key] % 2 === 1){//aqui comparado si la llave del objeto es impar
            delete obj[key];// si es impar la elimino asi cumpliendo la condicion de arriba
        }
    }
    return obj;

}
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }