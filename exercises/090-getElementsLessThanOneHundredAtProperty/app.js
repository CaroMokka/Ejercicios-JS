//Obtener elementos de menos de 100 en la propiedad
var obj = {
    key: [1000, 20, 50, 500]
  };

function getElementsLessThan100AtProperty(obj, key){
    var newArr = [];//declaro un nuevo array
    for(var key in obj){//recorro el obj
        if(Array.isArray(obj[key])){//pregunto si el el key es un array y si es asi
            var arr = obj[key];// si es array lo gusrdo en una variable
            for(var i = 0; i < arr.length; i++){//luego itero esta variable(que es el array)
                if(arr[i] < 100){//y pregunsto si tiene valores menores a 100
                    newArr.push(arr[i]);//si es asi, entonces meto los valores en el array nuevo 
                }
            }
        }
    }
    return newArr;

}

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]