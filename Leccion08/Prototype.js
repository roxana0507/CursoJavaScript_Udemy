function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}

//USO DE PROTOTYPE: se modifican los metodos y atributos asociados a un objeto. se agrega la propiedad a todos los objetos creados, es un valor por default si se quiere modificar para alguno d elos objetos debe realizarse directamente colocando por ejemplo padre.nacionalidad y definiendo el nuevo valor, linea 17.

Persona.prototype.nacionalidad = 'Costarricense'

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
padre.nacionalidad = 'Panameño'
console.log(padre);
console.log(padre.nacionalidad);

let madre = new Persona('Laura', 'Quintero', 'laura@gmail.com');
console.log(madre);
console.log(madre.nacionalidad);

