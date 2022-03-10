function computeAreaOfACircle(radius) {
    const pi = 3.14159265358979323846;
    var a = pi * (radius ** 2);
    return a;
}
var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
