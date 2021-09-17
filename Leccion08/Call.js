//CALL: llamar un metodo definido en otro objeto y llamarlos.

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carla',
    apellido: 'Montes',

}

//uso de call para usar el metodo nombre completo que pertenece a la persona1 con  los datos de la persona2
console.log(persona1.nombreCompleto());

//la sintaxis es: se llama el objeto persona1 se llama el metodo nombrecompleto y se llama el metodo call pasando por parametro persona2 para que tome estos datos. Para imprimirlo se agrega console log.
persona1.nombreCompleto.call(persona2);
console.log(persona1.nombreCompleto.call(persona2));


//PASO DE ARGUMENTOS A CALL
let persona3 = {
    nombre: 'Roxana',
    apellido: 'Chinchilla',
    //se agregan los parametros al metodo directamente. Al concatenerlos no se usan con this porque no son propiedades del objeto, son parametros.
    nombreCompleto1: function(titulo, tel) {
        return titulo +' : '+ this.nombre + ' ' + this.apellido + ' '+ tel;
    }
}

let persona4 = {
    nombre: 'Andres',
    apellido: 'Vargas',
}
//Sino se pasan los parametros entonces se muestra como indefinido.Si se desean agregar los nuevos parametros entonces se colocan como parametros en la llamada, no es necesario colocar el nombre del objeto porque hace referencia al mismo que posee el metodo nombreCompleto.
console.log(persona3.nombreCompleto1());
console.log(persona3.nombreCompleto1('Licenciada', 88884455));

//Para mostrar los parametros que se agregaron en el metodo nombrecompleto1 se agregan como parametros tambien en la llamada.
persona3.nombreCompleto1.call(persona4);
console.log(persona3.nombreCompleto1.call(persona4, 'Ingeniero', 86867777));