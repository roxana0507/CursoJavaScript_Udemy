for (let contador = 0; contador <= 10; contador++ ){
    if(contador % 2 !== 0){
        continue; //ir a la siguiente iteración
    }
    else{
        console.log(contador);
    }
}
//si la variable de contador no es un numero par se activa la opcion de continue y pasa a la siguiente iteracion.
// En las iteraciones en donde contador es igual a par no se jecuta el continue y se imprime en consola la variable de contador. Continue rompe la iteracion pero break rompe el ciclo.

//USO DE ETIQUETAS/ LABELS
inicio:
for (let contador = 0; contador <= 10; contador++ ){
    if(contador % 2 !== 0){
        continue inicio; //ir a la siguiente iteración
    }
    else{
        console.log(contador);
    }
}
// Con la etiqueta inicio le indico alprograma donde ejecutarse. No es recomendado usarlas.