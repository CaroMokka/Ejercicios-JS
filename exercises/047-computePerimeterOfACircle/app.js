function computePerimeterOfACircle(radius) {
  const pi = 3.14159265358979323846;
  var perimetro =(pi * 2) * radius;
  return perimetro;

}

var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345
