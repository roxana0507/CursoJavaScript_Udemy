let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

//FORMAS PARA ENVIAR A IMPRIMIR
//1. CONCATENAR CADA VALOR
console.log(persona.nombre +" "+ persona.apellido);

//2.Usando FOR IN
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//3.Usando OBJETC.VALUES nos regresa el resultado como array
//definimos una variable que almacene el resultado llamada personaARRAY y en el metodo VALUES se pasa como parametro el objeto persona
let personaArray = Object.values(persona);
console.log(personaArray);

//4.Usando una cadena y un objerto JSON
let personaString = JSON.stringify(persona);
console.log(personaString);
