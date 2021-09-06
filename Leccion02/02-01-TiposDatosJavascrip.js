/*Comentarios parrafo */
// Tipo de dato estring
var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre)

//Tipo de dato number
var numero = 1000;
console.log(numero);

//Tipo de dato objet: para definirla se utilizan los corchetes dentro de estos se definen las caracteristicas utilizando : y , al final. 
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "12344567"
}
console.log(objeto);
console.log( typeof objeto)

//En JS las variables son dinamicas es decir podemos cambiar su tipo de dato, pasar de un string a una numerica, en este caso primero la variable se habia definido con el nombre de carlos y ahora la variable contiene un valor numerico que es 10, para conocer el tipo de dato de una variable se utiliza typeof--- como se puede ver en la línea 5 y 22. Para definirla unicamente se utiliza el nombre de la variable = y el nuevo valor. 

nombre = 10;
console.log(nombre);
console.log(typeof nombre)

// Tipo de dato boolean (true-false) las variables que almacenan un tipo boolean se les conoce como bandera ya que puede tener el color de verde o rojo, donde el verde significa correcto.
var bandera = true
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function: permit reutilizar lineas de código.
function myfuntion(params) {}
console.log(myfuntion);
console.log(typeof myfuntion)

//Tipo de dato symbol: se utiliza para crear un valor unico de una variable
var simbolo = Symbol("my symbol");
console.log(simbolo);
console.log(typeof simbolo);

// Tipo class es una function
class Person{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Person);
console.log(typeof Person);

//Tipo de dato undefine: sino se le asigna unvalor por defecto sera indefine pero tambien se le puede asignar---var x = undefined
var x
console.log(x);
console.log(typeof x);

//Tipo de dato null que significa ausencia de valor. En realidad no es un nuevo tipo de dao sino que es un tipo object.
var y = null;
console.log(y);
console.log(typeof y);

//Arrays en JS son un tipo de dato objet, para definir un array se utilizan corchetes []. Un arreglo puede contener cualquier tipo de dato.
var autos = ["BMW", "Volvo", "Toyota"]
console.log(autos);
console.log(typeof autos);

// Una variable tambien puede tener un valor en blanco, pero siogue siendo un dato de tipo string
var z = '';
console.log(z);
console.log(typeof z);


