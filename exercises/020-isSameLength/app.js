function isSameLength(word1, word2){
    if(word1.length === word2.length){ //formula para obtener la cantidad de caracteres de una palabra
        return true;

    } else {
        return false
    }
    
} 

var output = isSameLength('words', 'super');
console.log(output); // --> true
