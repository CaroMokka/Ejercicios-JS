function computeAreaOfATriangle(base, alt){
    var a = (base * alt) / 2; // formula para saber el area de un triangulo es (base X altura dividido en 2)
    return a;
}

var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12
