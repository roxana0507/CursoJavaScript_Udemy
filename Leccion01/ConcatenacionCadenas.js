// Primero se definen dos variables
var nombre = "Roxana";
var apellido = "Chinchilla";

var nombrecompleto = nombre + " " + apellido;
console.log(nombrecompleto);

var nombrecompleto2 = "Maria" + " " + "Chinchilla";
console.log(nombrecompleto2);

//CONTEXTO STRING O CONTEXTO DE CADENA
// las expresiones en JS se evaluan de izquierda a derecha, para que realice una operacion se debe colocar entre parentesis o colocar los numeros de primero para que los lea y sume primero.
var x = nombre + 2 + 4 ;
console.log(x);

x = nombre +(2+4);
console.log(x);

x = (2+4) + nombre;
console.log(x);