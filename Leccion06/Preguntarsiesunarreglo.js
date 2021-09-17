const autos = ["Toyota", "Onda", "BMW", "Audi"];
console.log(autos);

autos[1] = "Mercedes Benz";
console.log(autos[1]);
console.log(autos);

//Dos formas de saber si se esta trabajando con un arreglo:
//1: Con ECMAScript 6 (ES6 o ES2015) usando  el metodo isArray de la clase Array
console.log(Array.isArray(autos));
//2: Nombre de la variable y usamos la palabra reservada instanceof, se pregunta si la variable autos es una instancia de tipo array. 
console.log(autos instanceof Array);