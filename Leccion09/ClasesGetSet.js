// es comun usar _ para el nombre de las propiedades de la clase
class Persona {
    constructor( nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

let persona1 = new Persona('Roxana', 'Chinchilla');
console.log(persona1.nombre);
console.log(persona1.apellido);

persona1.nombre = 'Maria Roxana';
persona1.apellido = 'Vasquez';
console.log(persona1.apellido);