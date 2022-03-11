function findMaxLengthOfThreeWords(word1, word2, word3){
    var lonWord1 = word1.length;
    var lonWord2 = word2.length;
    var lonWord3 = word3.length;
    var mayor = Math.max(lonWord1, lonWord2, lonWord3) // Math.max()encontre el valor mayor 
    return mayor;
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
