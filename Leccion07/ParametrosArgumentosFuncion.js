//Dentro de los parentesis definimos la lista de valores que se conocen como parametros (a,b), las variables que recibe la funcion.
let sumar = function(a , b) {
    //usamos la propiedad llamada arguments-- es un array, con los [] definimos el indice que queremos.
    //ESTA ES LA LISTA DE ARGUMENTOS: 3, 2
    console.log( arguments[0]);
    console.log( arguments[1]);
    return a + b
};
//Los argumentos son los valores que finalmente pasamos a nuestra funcion al llamarla (1,2)
resultado = sumar(3 , 2);
console.log(resultado);

//En JS no es necesario pasar todos los argumentos, por ejemplo solamente pasamos el primer argumento, lo que sucede es que el segundo quedara como undefined y el resultado se mostrara como not at number NAN.
let restar = function(a , b) {
    console.log( arguments[0]);
    console.log( arguments[1]);
    return a - b
};
resultado = restar(3);
console.log(resultado);

// Tambien se puede agregar argumentos por default, estos se asignan directamente con los parametros. Pese a no tener argumentos definidos la multiplicacion si tiene resultado porque se han definido los argumentos por default. Pero una vez que se asignan los argumentos ya no se toman en cuenta los asignados por default.
let sumar1 = function(a=4 , b=2) {
    console.log( arguments[0]);
    console.log( arguments[1]);
    console.log( arguments[2]);
    return a + b + arguments[2];
};
resultado = sumar1(2, 3, 7);
console.log(resultado);

//La cantidad de parametros no siempre coincide con la cantidad de argumentos.
// A la funcion se le puede pasar directamente el argumento.