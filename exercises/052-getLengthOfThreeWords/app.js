function getLengthOfThreeWords(word1, word2, word3) {
  var x = word1.length;
  var y = word2.length;
  var z = word3.length;

  var total = x + y + z;
  return total;
}
var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
