//AREGLO es un tipo object que permite almacenar varios valores
//let autos = new Array("Toyota", "Onda", "BMW") fORMA ANTIGUA DE HACERLO-- Ya no se usa.

const autos = ["Toyota", "Onda", "BMW"];
console.log(autos);

//almacenamos los lementos en el array de nombre autos, podemos acceder a ellos a traves de la variable autos, dado que en el espacio de memoria se crea el espacio para almacenar el arreglo, la referencia en memoria es autos.

//para acceder al primer elemento: recordar que en JS se inicia con 0
console.log(autos[0]);
console.log(autos[2]);

//Para recorrer todo el arreglo de una vez:
for(let i = 0; i < autos.length; i++){
    console.log("Indice " + i + " : " + autos[i] );
}

//Modificar los elementos de un arreglo:
autos[1] = "Mercedes Benz";
console.log(autos[1]);
console.log(autos);

//Para agregar elementos a un arreglo: se agrega el elemento al final del arreglo usando push.
autos.push("Audi");
console.log(autos);