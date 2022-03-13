//Filtrar palabras de longitud impar
function filterOddLengthWords(words) {
    var impares = [];
    for(var i = 0; i < words.length; i++){
        if(words[i].length % 2 === 1){
            impares.push(words[i]);
        }
    }
    return impares;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']