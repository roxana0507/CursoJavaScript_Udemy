//FUNCIONES: es un código reutilizable
/*function name(params o argumentos/ puede o no tener argumentos, si tiene se separan con comas) {
    cuerpo de la funcion
}*/

myFunction( 4 , 3 );

//DECLARACION DE LA FUNCION
function myFunction( a , b ) {
    console.log("Suma: " + (a + b));
}

//LLAMAMOS LA FUNCION- como es una linea que se va a ejecutar ponemos punto y coma.
// al enviar a llamar se le pasan los valores 2, 3 a las variables a, b
myFunction( 2 , 3 );

//HOISTING: permite llamar la funcion antes o despues de declararla como se observa en la linea 6 y 15. 