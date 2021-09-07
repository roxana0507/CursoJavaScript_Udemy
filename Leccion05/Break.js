// Hacer un programa que encuentre el primer numero par y finalice.

//FOR
for(let contador= 0; contador <= 10; contador++){
    if( contador % 2 == 0){
        console.log(contador);
        break;
    }
}

//WHILE
let contador1 = 0;
while( contador1 <= 10){
    if( contador1 % 2 == 0){
        console.log(contador1);
        break;
    }
    contador1++;
}
console.log(contador1);

//DO WHILE
let contador2 = 0;

do{
    console.log(contador2);
    if( contador2 % 2 == 0){
    break;
    }
    contador2++;
}
while( contador2 < 3);
console.log(contador2);
