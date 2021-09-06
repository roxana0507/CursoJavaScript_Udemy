//SUMA
let a = 3, b = 2;
let z = a + b;
console.log("El resultado de la suma es " + z);

//RESTA
z = a - b;
console.log("El resultado de la resta es " + z);

//MULTIPLICACION
z = a * b;
console.log("El resultado de la multiplicación es " + z);

// DIVISIÓN
z = a / b;
console.log("El resultado de la división es " + z);

//MODÚLO = residuo de la división
z= a % b;
console.log("El resultado del modúlo es " + z);

z = a ** b;
console.log("El resultado del exponente es " + z);

//INCREMENTO
//PREINCREMENTO (el operador ++ antes de la variable)
let c= 3, d = 2;
z = ++c;
console.log(c);
console.log(z);

//POSTINCREMENTO (el operador ++ despues de la variable) el incremento se realiza hasta la segunda vez que se utiliza la variable, por ejemplo al usar el console.log se utiliza por segunda vez la variable d y por eso se incrementa de 2 a 3, pero la variable z se mantiene en el valor 2 porque se ejecuto en la primera vez.
z = d++;
console.log(z);
console.log(d);

//DECREMENTO
//PREINCREMENTO
z = --c;
console.log(c);
console.log(z);

//POSDECREMENTO
z = d--;
console.log(z);
console.log(d);
