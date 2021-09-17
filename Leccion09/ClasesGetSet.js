//EL HOISTING EN LAS CLASES NO EXISTE, EN ESTE CASO SE DEBE DEFINIR PRIMERO LA CLASE PARA DESPUES CREAR LOS OBJETOS. En las fucniones si se puede definir previamente. En la linea 2 aun no existe la clase persona.
let persona2 = new Persona('Karla', 'Sanchez')

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
