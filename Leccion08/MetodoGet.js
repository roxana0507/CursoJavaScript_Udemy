let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    /*nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
    console.log(persona.nombreCompleto());*/

    //METODO GET
    //get nombre de la funcion parentesis y cuerpo de la funcion
    get nombreCompleto(){
        return this.nombre + " "+ this.edad;
    }
}
console.log(persona.nombreCompleto);
//Mandar a llamar la funcion--- ya no es necesario poner los parantesis para indicar que se llama la funcion como en la linea 9

