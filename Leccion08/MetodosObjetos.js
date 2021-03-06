let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    //METODO:nombre de la propiedad: en lugar de asignar un valor agregamos una funcion, llaves y cuerpo de la funcion.
    //THIS: es un apuntador al objeto que se esta ejecutando en este momento.Se accede a los mismos atributos que hemos definido en la variable persona.
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto()); //siempre poner los parentesis para llamar la funcion.

//CREAR OBJETO USANDO EL METODO NEW= reservar un nuevo espacio de memoria.
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Saturno15";
persona2.telefono = "23456789";

console.log(persona2.direccion);
