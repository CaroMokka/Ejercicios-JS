//Obtener el promedio de elementos en la propiedad
var obj = {
  key: [1, 2, 3]
};
function getAverageOfElementsAtProperty(obj, key) {

  if(!Array.isArray(obj[key]) || obj[key].length == 0 || !obj[key]) {//validaciones 
    return 0;
  }
  for(var key in obj){
    if(Array.isArray(obj[key])){
      var sum = obj[key].reduce((a,b) => a + b);
      console.log(sum)
      var average = sum / obj[key].length;
   
      
      return average;
    }
    
  }
 
}
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2 


