//OR = || regresa true aunque solo una de las condiciones sea verdadera
//Un padre puede asistir a ver el juego de su hijo solamente si tiene vacaciones o dia libre

// En este caso se define como falsas ambas posibilidades. Si son falsas ambas entonces el resultado sera false, es el unico caso en que or retorna falso.
let vacaciones = false, diaDescanso = false;
if (vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre no puede asistir al juego");
}

// En caso de que una sea verdadera
let vacaciones1 = true, diaDescanso1 = false;
if (vacaciones1 || diaDescanso1){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre no puede asistir al juego");
}