/* Es una funcion especial para trabajar con objetos-- se hace uso del metodo new
Se utiliza la misma sintaxis de las funciones:     function name(params) {}
this.nombre se usa para asignarle la propiedad al objeto persona
=nombre significa que se asigna el valor
es comun usar el mismo nombre del parametro para la propiedad o atributo */
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}
//CREACION DE OBJETO TIPO PERSONA
//se define la variable padre usando el metodo new y se llama el metodo constructor usando el metodo Persona
let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
console.log(padre);

let madre = new Persona('Laura', 'Quintero', 'laura@gmail.com');
console.log(madre);

padre.nombre = 'Carlos'; // los cambios no modifican los otros objetos

console.log(padre);