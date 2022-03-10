function or(expression1, expression2) { // verificar que los inputs estan entrando en TRUE y FALSE respectivamente
  if(expression1 && !expression2){ 
    //Aca hago la comparativa , cuando utilizo && ambas tienes que coincidir ya sesan 
    //"trues o falses" y como la segunda expersion entra con valor false debo usar "!" 
    //para cambiarla a true y se pueda comprobar que ambas sean verdaderas
    return true;
  } else return false;
}
var output = or(true, false);
console.log(output); // --> true;
