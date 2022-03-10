var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };




function removeStringValuesLongerThan(num, obj) { //eliminar valores de cadena más largos que
    for (var key in obj){
        if(obj[key].length > num){ //Con LENGTH, aqui estoy obteniendo la cantidad de elementoa que posee la clave(key) recorrida 
            //la clave recorrida que cumple con la condicion de ser mayor que el num(numero ingresado por parametro)
        
            console.log(obj[key]);
            delete obj[key]; //aqui se elimina la clave que cumpla con la condicion de ser mayor
        }
    }
    return obj;

}

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
