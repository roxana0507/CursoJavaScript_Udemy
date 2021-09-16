let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

//agrear una propiedad
//la sintaxis es colocar el nombre del objeto punto y nombre de la propiedad nueva y asignar el valor entre comillas
persona.tel = "34568998";
//Se puede modificar el valor del objeto y se conservara este ultimo
persona.tel ="11111111";
console.log(persona);

//eliminar una propiedad secoloca la palabra reservada DELETE nombre del objeto punto y la propiedad que se desea eliminar
delete persona.edad;
console.log(persona);

