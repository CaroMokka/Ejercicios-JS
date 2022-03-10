var obj = {
    name: 'Sam',
    age: 20
  }
function removeStringValues(obj) {
    for(var key in obj){ //recorro el objeto
        if(typeof obj[key] == 'string'){ //verifico si en el objeto hay un string
            delete obj[key];//elimino los string que hayan dentro del objeto
        }
    }
    return obj;

}

removeStringValues(obj);
console.log(obj); // { age: 20 }