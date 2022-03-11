
function areValidCredentials(name, password){ // Son credenciales válidas
    if(name.length > 3 && password.length > 8){ //validaciones
        return true;

    } else return false;
   
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero
