function computeAverageLengthOfWords(word1, word2){
    var x = word1.length;
    var y = word2.length;
    var promedioDePalabras = (x + y) /2;
    return promedioDePalabras;
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6