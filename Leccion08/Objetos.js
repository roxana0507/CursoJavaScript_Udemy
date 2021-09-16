let x = 10;
console.log(x.length); //con los tipos primitivos no se pueden usar metodos y no tienen atributos

//DEFINIR OBJETO--agregan las propiedades del objeto la sintaxis es let o const o funtion, nombre de la variable, llaves, nombre de la propiedad, dos puntos, entre comillas el valor si es una cadena, al final coma. atributo:valor
//Con esto se crea un objeto en memoria y se crea su referencia exadecimal
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);

console.log(persona);