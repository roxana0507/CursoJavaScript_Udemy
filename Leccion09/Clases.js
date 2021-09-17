//CLASE: es una plantilla para poder crear instancias y objetos, en esta se definen los atributos y metodos.
//SINTAXIS: Palabra reservada CLASS + Nombre iniciando con Mayuscula + llaves + cuerpo. En el cuerpo se agrega el constructor + () para los parametros + llaves en las que se inicializan los atributos de la clase usando THIS.parametro, (cuando aparece el this.nombre hace referencia a la propiedad de la clase persona), y para asignar el valor se coloca el valor del parametro que se esta recibiendo.

//DEFINICION DE LA CLASE
class Persona {
    constructor( nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//CREACION DE LOS OBJETOS
let persona1 = new Persona('Juan', 'Perez');
let persona2 = new Persona('Carlos', 'Castro');
//INSTANCIA DE CLASE U OBJETO: se crea al usar la plantilla para crear un nuevo objeto. Con lo que esta entre parentesis se manda a llamar al constructor, se le pasan los parametros para que este pueda crear el nuevo objeto.

console.log(persona1);
console.log(persona2);