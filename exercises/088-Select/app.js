// Write your function here
function select(arr, obj){
    var newObj = {};//declaro un objeto vacio
    for(var i = 0; i < arr.length; i++){//aqui recorro el array
        for(var key in obj){//por cada iteracion en el array, hago una iteracion nueva pero en el objeto dado por parametro
            if(arr[i] === key){//a lo cual pregunto, indice de array es igual a llave de objeto iterado??????
                newObj[key] = obj[key];//si se cumple la condicion entonces le asigno un nuevo valor al objeto vacio, un valor de obj[key]
            }
        }
    }
    return newObj;//retorno objeto nuevo!!!! <===== --> { a: 1, c: 3 }

}
   



var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
