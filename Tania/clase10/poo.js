/* 
Programación orientada a objetos

Ejercicio 1:
Crea un objeto que sea un animal y añádele algunas propiedades.
Imprime por consola un texto con todas sus propiedades.

Ejercicio 2:
Crea una clase que sea un animal y crea dos instancias de ella.
Imprime por consola alguna de sus propiedades.

*/

//Ejercicio 1

var conejo = function (nombre, raza, edad, sexo) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.sexo = sexo;
    this.detalles = detalles;
};
function detalles (){
    console.log(""this.nombre" es de la raza "this.raza", tiene "this.edad" años y es "this.sexo"")
}