// Encontrar la longitud mínima de tres palabras

function findMinLengthOfThreeWords(word1, word2, word3){
    var lonWord1 = word1.length;
    var lonWord2 = word2.length;
    var lonWord3 = word3.length;
    console.log(lonWord1, lonWord2, lonWord3)
    var min = Math.min(lonWord1, lonWord2, lonWord3)// MAth.min() encontre el numero menor 
    return min;
  
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
