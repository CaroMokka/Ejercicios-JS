var obj = {
    a: [1, 3, 4], //aqui hay TRES elementos
    b: 2,//aqui hay UN elemento
    c: ['hi', 'there'] //aqui hay DOS elementps
  }

function removeArrayValues(obj) { //eliminar valores de array
    for(var key in obj){//aqui recorri el objeto
        if(Array.isArray(obj[key])){ //metodo Array.isArray(se pasa el valor ) para saber si es un array
            delete obj[key];//elimino la llave del objeto que cumpla con la condicion de ser un array en este caso

        } 
    }
    return obj;
}

removeArrayValues(obj);
console.log(obj); // --> { b: 2 }