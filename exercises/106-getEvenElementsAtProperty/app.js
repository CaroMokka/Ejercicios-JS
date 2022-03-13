//obtener elementos pares en la propiedad
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  var arrEmpty = [];
    if(!Array.isArray(obj[key])){
      return arrEmpty;
    }
    for(var key in obj){
      //console.log(obj[key])
      var pares = obj[key].filter(el => el % 2 === 0 )



  
    
    }
    return pares;//Aqui retorne pares ya que debe estar contenido en un solo array

}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]