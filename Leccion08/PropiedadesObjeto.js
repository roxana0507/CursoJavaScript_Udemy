// Cómo acceder a las propiedades de un objeto?

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
//Primera Forma usando CONSOLE LOG nombre del objeto punto y la poropiedad o atributo.
console.log(persona.nombre);

//Segunda Forma como si fuera un arreglo: nombre del objeto corchetes y entre comillas el atrinuto o propiedad.
persona["apellido"];
//Para imprimirlo:
console.log(persona["apellido"]);

//Recorrer todas las propiedades del objeto se usa FOR IN 