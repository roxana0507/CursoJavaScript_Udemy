// convertir String con number
let miNumero = "20";

// convertir el "10" en 10
let edad = Number(miNumero);
console.log(typeof edad);

if (edad >= 18 ){
    console.log("La persona puede votar");
}
else{
    console.log("No puede votar");
}

//TERNARIO
resul = (edad >=18) ? "La persona puede votar":"No puede votar";
console.log(resul);