var obj = {
    a: 1,
    b: 2,
    c: 3
  };


function countNumberOfKeys(obj) { //contar el número de llaves
   var newArr = [];//aqui declaro un array vacio para meter los elemnetos
    for(var key in obj){//aqui recorro un objeto encontrando sus keys
        if(obj[key]){//aqui digo SI la Key existe?
            newArr.push(key);//entonces con el metodo PUSH() agrego al array vacio declarado arriba,
           
        }
        
    }
    return newArr.length; //aqui retorno la cantidad de elemntos que posee el array
    //tambien puedo solo retornar el array solo, y me mostrara todos los elementos que tiene dentro

}
var output = countNumberOfKeys(obj);
console.log(output); // --> 3