//Metodo APPLY: la diferencia con el metodo call es la forma en que se pasan los argumentos
let persona3 = {
    nombre: 'Roxana',
    apellido: 'Chinchilla',
    nombreCompleto1: function(titulo, tel) {
        return titulo +' : '+ this.nombre + ' ' + this.apellido + ' '+ tel;
    }
}

let persona4 = {
    nombre: 'Andres',
    apellido: 'Vargas',
}
console.log(persona3.nombreCompleto1('Licenciada', 55556666));
//Para mostrar los parametros que se agregaron en el metodo nombrecompleto1 se agregan como parametros tambien en la llamada.
console.log(persona3.nombreCompleto1.call(persona4, 'Ingeniero', 55668888));

//-----------------------------------------------------------------------
//USO DEL METODO APPLY
let arreglo = ['Ingeniero', '55668888'];
console.log(persona3.nombreCompleto1.apply(persona4, arreglo));
//EL ARRAY SE PUEDEN PASAR DIRECTAMENTE
console.log(persona3.nombreCompleto1.apply(persona4, ['Ingeniero', '55668888'] ));