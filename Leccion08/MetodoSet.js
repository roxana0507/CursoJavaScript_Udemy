let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    direccion:'Santa Marta',
    //USO DEL METODO SET
    idioma: 'es',
    //Usamos el metodo get para recuperar la informacion
    get lang(){
        return this.idioma.toUpperCase();
    },
    //SET se usa para modificar o establecer el valor de los atributos
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
}
console.log(persona.lang);
persona.lang = 'en'; // con el = se manda a llamar el metodo set
console.log(persona.lang);
console.log(persona.idioma);