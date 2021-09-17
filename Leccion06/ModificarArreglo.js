const autos = ["Toyota", "Onda", "BMW", "Audi"];
console.log(autos);

//Modificar los elementos de un arreglo, se modifica elemento del indice 1 que ya habiamos definido, onda por mercedes.
autos[1] = "Mercedes Benz";
console.log(autos[1]);
console.log(autos);

//Para agregar elementos a un arreglo: se agrega el elemento al final del arreglo usando la funcion push, como es una funcion se pone entre parentesis.
autos.push("Mazda");
console.log(autos);

//Podemos agregar un elemento al final usando length, sin dejar espacios.
console.log(autos.length);
autos[autos.length] = "Cadillac"
console.log(autos);

//Agregar un elemento dejando huecos:
autos[7]= "Porshe"
console.log(autos);
//el indice 6 queda vacio, pero esto no es recomendable