function cube(num){
    //var volumen = Math.pow(num, 3); // formula para sacar el cubo de un numero 
    var volumenElegante = num ** 3;  //formula elegante (num ** 3;)
   
    return volumenElegante;
}

var output = cube(3);
console.log(output); // --> 27