function isOddLength(word){
    var numWord = word.length; // formula para conseguir el numero de caracteres de la palabra
    if(numWord % 2 === 1 ){ //formula para saber si el length(cantidad de caracteres) de una palabra es impar
        return true;
    } else return false;

}
output = isOddLength('spacial');
console.log(output); // --> true