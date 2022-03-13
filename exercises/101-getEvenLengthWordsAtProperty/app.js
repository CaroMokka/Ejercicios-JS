//Obtener palabras de longitud uniforme en la propiedad
var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  var newArr = [];
  if(!Array.isArray(obj[key])){//aqui valido todo
    
    return newArr;
  
  } 

  for(var i = 0; i < obj[key].length; i++){//aqui recorro tambien el array del objeto
    if(obj[key][i].length % 2 === 0){
     //onsole.log(obj[key][i])
     newArr.push(obj[key][i])
    }
  }
  return newArr;

   
     
   
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']