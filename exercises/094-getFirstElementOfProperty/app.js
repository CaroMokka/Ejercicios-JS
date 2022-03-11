
//Obtener el primer elemento de la propiedad
var obj = {
    key: [1, 2, 4]
  }; 

function getFirstElementOfProperty(obj, key){
    for(var key in obj){//recorro el objeto
        if(Array.isArray(obj[key])){//si el atributo es un array
            var arr = obj[key];//entonces gusrdalo en una variable llamada arr
            
            return arr.shift();//y retorname el primer elemento del array que has elimanado con shift()
        }
    }

}
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1