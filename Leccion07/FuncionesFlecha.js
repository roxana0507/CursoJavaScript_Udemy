//FUNCION EXPRESION
//Declaracion de la funcion
let sumar = function(a , b) {return a + b};

//Lamando la variable sumar--que almacena una referencia a una funcion. La funcion se manda a llamar mediante la variable
resultado = sumar(1 , 2);
console.log(resultado);

//FUNCION FLECHA
// se omite utilizar la palabra reservada function se definen directamente los argumentos
// en lugar de las llaves se cambia por el simbolo de flecha =>
//no se usa la palabra reservada return sino que se indica directamente la operacion que debe devolver esta funcion.

//DECLARACION DE LA FUNCION
const sumarFuncionTipoFlecha = (a , b) => a + b;

//LLAMANDO LA FUNCION
resultado = sumarFuncionTipoFlecha(3 , 5);
console.log(resultado);

const divisionFuncion = (a , b) => a * b;
resultado = divisionFuncion(5 , 10);
console.log(resultado);

