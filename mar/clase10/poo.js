/*
Ejercicio 1:
Crea un objeto que sea un animal y añádele algunas propiedades.
Imprime por consola un texto con todas sus propiedades.
*/

var oso = function (nombre, raza, procedencia, alimentacion) {
    this.nombre = nombre;
    this.raza = raza;
    this.procedencia = procedencia;
    this.alimentacion = alimentacion;
        this.detalles = function(){
            console.log("Mi oso "+this.raza+" se llama "+this.nombre+", es de "+this.procedencia+" y come "+this.alimentacion);
        }
};
var miOso = new oso ("Poo", "panda", "Asia", "bambú")
miOso.detalles();

/*
Ejercicio 2:
Crea una clase que sea un animal y crea dos instancias de ella.
Imprime por consola un texto con todas sus propiedades.
*/

var oso = function () {
    this.pelo = "suave";
    this.acuatico = false;
};

var osoPanda = function () {
    this.alimentacion = "bambu";
    this.colorNariz = "negra";
    this.virus = false;
};

osoPanda.prototype = new oso();

var miOso = new osoPanda();
console.log("Mi oso tiene el pelaje "+miOso.pelo+" porque come "+miOso.alimentacion+". ¿Tiene el coronavirus? "+miOso.virus);