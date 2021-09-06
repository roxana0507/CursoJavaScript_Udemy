// sirve para agregar o validar dos condiciones
// ADN = && regresa true solo si ambos operandos son true
let a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax) {
    console.log("Dentro del rango");
}
else{
    console.log("Fuera de rango");
}

let b = -1;
let _valMin = 0, _valMax = 10;

if (b >= _valMin && a <= _valMax) {
    console.log("Dentro del rango");
}
else{
    console.log("Fuera de rango");
}
//con alguna de ella que sea falso regresa falso.Deben cumplirse ambas 