//Filtrar palabras de longitud uniforme
//AQUI CARO TIENES QUE USAR EL METODO FILTER()
//METODO FILTER() FILTRA SEGUN UNA CONDICION DADA
//FILTER() POSEE UNA CALLBACK
//UNA CALLBACK ES UN TIPO DE FUNCION QUE VA COMO PARAMETRO DENTRO DE OTRA FUNCION, 
//ADEMAS UNA CALLBACK POSEE VALORES UNICOS DENTRO DEL CONTEXTO DE SI MISMA
function filterEvenLengthWords(words) {
    var lonPar = words.filter((word) => word.length % 2 === 0)
    return lonPar;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']