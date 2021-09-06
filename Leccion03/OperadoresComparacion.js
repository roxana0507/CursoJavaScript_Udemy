//Comparacion se utiliza ==
let a = 3, b = 2, c = "3";

let z = a == b;
console.log(z);
// como 3 no es igual a 2 imprimer falso
z = a ==c;
console.log(z); // no importa el tipo numerico y string

//COMPARACION  ESTRICTA === la diferencia es que revisa el valor tomando en consideracion el tipo
z = a === c;
console.log(z);

// Para saber si las variables tienen distinto valor !=
z = a != c;
console.log(z); // regresa falso porque si son iguales

z = a !== c;
console.log(z); // regresa verdadero porque son diferentes por el tipo

//OPERADORES RELACIONALES
z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);