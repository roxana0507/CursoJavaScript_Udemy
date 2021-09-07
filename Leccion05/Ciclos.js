//WHILE, reisa de primero la condicion sino se cumple no se ejecuta. Hace la valoracion antes de ejecutar.
let contador = 0;

while( contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

//DOWHILE se diferencia del while porque este ciclo al menos se ejecuta una vez si es falsa termina y si es verdadera se vuelve a repetir.Hace la valoracion despues de ejecutar.

let contador1 = 0;

do{
    console.log(contador1);
    contador1++;
}
while( contador1 < 3);
console.log("Fin del ciclo do while");