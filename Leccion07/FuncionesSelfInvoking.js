// Es anonima porque no se le asigna nombre y en este caso tampoco una variable, pero si se pone entre parentesis.
//se manda a llamar a si misma, lo hacemos colocando parentesis al final y punto y coma.
//Esta funcion no se puede reutilizar porque no tiene nombre o variable.
(function () {
    console.log("Ejecutando la funcion");
})();

//Se le pueden pasar parametros
(function (a , b) {
    console.log("Ejecutando la funcion " + (a + b));
})(3 , 4);