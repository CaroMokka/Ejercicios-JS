function countCharacter(str, char) {
    var arr = [];
    for (var i = 0; i < str.length; i++){
        if(str[i] == char){
            arr.push(char); // aqui "char" dentro de push es importante porque son las 'a' que se repiten que iran dentro del array nuevo
        }
    }
    return arr.length;
  
   } 
    

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
