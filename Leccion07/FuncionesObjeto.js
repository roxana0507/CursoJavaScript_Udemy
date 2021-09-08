// Los objetos en JS pueden tener propiedades y metodos asociados a cada uno de los objetos.Una funcion tambien se puede describir como un objeto. 
//Declaración de la función
function myFunction( a , b ) {
    console.log(arguments.length); // para conocer la cantidad de argumentos que se han declarado
    return a + b;
}
//Llamando a la función
let resultado = myFunction( 2 , 3 );
console.log(resultado);

//se puede usar el metodo: tostring que convierte la funcion a texto.
var myFunctionTexto = myFunction.toString();
console.log(myFunctionTexto);