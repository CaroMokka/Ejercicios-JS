function getAllWords(str) {
    var arrWords = str.split(' ');
    return arrWords;
}
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
