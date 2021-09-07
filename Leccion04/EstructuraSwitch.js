// se agrega el break para que no se sigan ejecutando los otros casos, para romper con la estrcutura switch
// El caso switch se realiza mediante la comparacion estricta, en este sentido compara los tipos, si los tipos son diferentes dara falso. 
//CASO UNO


//let numero = "5"; si se coloca de esta manera da falso porque es un string y estamos usando number.
let numero = 5;
let numeroTexto = "Valor desconocido"

switch (numero) {
    case 1:
        numeroTexto = "Numero uno"
        break;
    case 2:
        numeroTexto = "Numero dos"
        break;
    case 3:
        numeroTexto = "Numero tres"
        break;
    case 4:
        numeroTexto = "Numero cuatro"
        break;
    default:
        numeroTexto = " Caso no encontrado"
        break;
}
console.log(numeroTexto);

//CASO DOS-- AGRUPANDO LOS CASOS

let mes = 8;
let estacion;

switch (mes) {
    case 1: case 2: case 12:
        estacion = "invierno"
        break;
    case 3: case 4: case 5:
        estacion = "primavera"
        break;
    case 6: case 7: case 8:
        estacion = "verano"
        break;
    case 9: case 10: case 11:
        estacion = "otoño"
        break;
    default:
        estacion = "Valor incorrecto"
        break;
}

console.log(estacion);