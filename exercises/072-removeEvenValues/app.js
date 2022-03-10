var obj = {
    a: 2,
    b: 3,
    c: 4
  };

function removeEvenValues(obj) { //eliminar valores pares
    for(var key in obj){ //aqui recorro el objeto dado
        if(obj[key] % 2 === 0){//aqui comparo cual value del objeto(key) cumple con la condicion
            //la condicion dice que debe ser par
            delete obj[key];//aqui elimino los valores que cumplan con la condicion de ser pares
        }
    }
    return obj;
}

removeEvenValues(obj);
console.log(obj); // --> { b: 3 }