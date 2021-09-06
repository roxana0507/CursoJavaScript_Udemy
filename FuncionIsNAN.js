// Verificación de una variable de tipo número usando NaN not a nomber.
// usamos la funcion number
let miNumero = "20x";
let edad = Number(miNumero);
console.log(edad);

if(isNaN(edad)){
    console.log("No es un número");
}
    else {
        if (edad >= 18 ){
            console.log("La persona puede votar");
        }
        else{
            console.log("No puede votar");
        }
}

// TERNARIO
let miNumero2 = "20";
let edad2 = Number(miNumero2);
console.log(edad2);

if(isNaN(edad2)){
    console.log("No es un número");
}
else {
    let resul = (edad2 >=18) ? "La persona puede votar":"No puede votar";
    console.log(resul);
}
