function isEvenLength(word){

    var numWord = word.length; //formula para saber la longitud de la palabra

    if(numWord % 2 === 0){ //formula para saber si la longitud de la palabra(nuemro) es PAR
        return true;
    } else return false;

}

var output = isEvenLength('wow');
console.log(output); // --> false