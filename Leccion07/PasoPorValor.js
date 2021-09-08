// Paso por valor cuando utilizamos tipos que no son objeto.
let x = 10; //valor primitivo porque no tiene propiedades ni metodos

//metodo para cambiar el valor primitivo-- no se puede solamente se pasa una copia del valor de x a a
function cambiarValor(a) {
    a = 20;
}
cambiarValor(x);
console.log(x);
console.log(a);