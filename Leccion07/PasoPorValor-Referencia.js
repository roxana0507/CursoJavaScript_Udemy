// Paso por valor cuando utilizamos tipos que no son objeto.
let x = 10; //valor primitivo porque no tiene propiedades ni metodos

//metodo para cambiar el valor primitivo-- no se puede solamente se pasa una copia del valor de x a a
function cambiarValor(a) {
    a = 20;
}
cambiarValor(x);
console.log(x);

//PASO POR REFERENCIA
// Primero creamos un objeto de tipo constante
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}
function cambiarValorObjeto(p1) {
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);