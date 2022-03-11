// Obtener elementos mayores de 10 en la propiedad
var obj = {
    key: [1, 20, 30],
  
  };

function getElementsGreaterThan10AtProperty(obj, key){
    var newArr = [];
    for(var key in obj){
        if(Array.isArray(obj[key])){
            var arr = obj[key];
            for(var i = 0; i < arr.length; i++){
                if(arr[i] > 10){
                    newArr.push(arr[i]);
   
            
        } 
            }
        }
      
    }
    return newArr;
}

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);