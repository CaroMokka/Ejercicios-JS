// Obtener palabras de "longitud impar" en la propiedad
var obj = {
    key: ['It', 'has', 'some', 'words']
  };

function getOddLengthWordsAtProperty(obj, key){
    var newArr= [];
    for(var key in obj){
        if(Array.isArray(obj[key])){
            var arr = obj[key];
            for(var i = 0; i < arr.length; i++){
                if(arr[i].length % 2 === 1){
                    newArr.push(arr[i])
                }
              
                }
            }
        }
        return newArr;
    }


/* var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']
  
  function getOddLengthWordsAtProperty(obj, key) {
    var oddArr = [];
    if (!Array.isArray(obj[key])) {
      return oddArr;
    }
    for (var prop in obj[key]) {
      if (obj[key][prop].length % 2 === 1) {
        oddArr.push(obj[key][prop]);
      }
    }
    return oddArr;
  } */