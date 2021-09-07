// FUNCIONES DE TIPO EXPRESION O ANONIMAS: no se le asigna ningun nombre por eso es anonima solo se usa la palabra reservada funtion.En este caso se agrega el punto y coma por ser una linea que se ejecuta.

//Declaracion de la funcion
let sumar = function(a , b) {return a + b};

//Lamando la variable sumar--que almacena una referencia a una funcion. La funcion se manda a llamar mediante la variable
resultado = sumar(1 , 2);
console.log(resultado);