var obj1 = { // obj = {key : value}
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    //AQUI SE DEBE ITERAR EL OBJETO para 
    //OJO! Un objeto se recorre con un FOR IN...
    for(var key in obj2){ // aqui recorro un objeto(de key en key) en este caso el obj2
        if(obj1[key] === undefined){
            obj1[key] = obj2[key]; // Aqui agregar el ' la clave al objeto1 '

        }
    }
    return obj1;
}
console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}


// Dados dos objetos, "extender" agrega propiedades del segundo objeto al primer objeto.
// Notas:
// * Agregue cualquier clave que no esté en el primer objeto.
// * Si el primer objeto ya tiene una clave determinada, ignórela (no sobrescriba el valor de la propiedad).
// * No modifique el segundo objeto en absoluto.