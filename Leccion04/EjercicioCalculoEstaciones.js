//Primer ejercicio
let mes = 8;
let estacion;

if( mes== 1 || mes== 2 || mes== 12){
    estacion = "invierno"
}
else if( mes== 3 || mes== 4 || mes== 5){
    estacion = "primavera"
}
else if( mes== 6 || mes== 7 || mes== 8){
    estacion = "verano"
}
else if( mes== 9 || mes== 10 || mes== 11){
    estacion = "otoño"
}
else{
    estacion = "Valor incorrecto"
}
console.log(estacion);

//SEGUNDO EJERCICIO
let hora = 8;
let mensaje;

if( hora >= 6 && hora <=11 ){
    mensaje = "Buenos dias"
}
else if( hora >= 12 && hora <=18 ){
    mensaje = "Buenas tardes"
}
else if( hora >= 19 && hora <=24 ){
    mensaje = "Buenas noches"
}
else if(hora >= 0 && hora <6 ){
    mensaje = "Durmiendo"
}
else{
    mensaje = "Valor incorrecto"
}
console.log(mensaje);