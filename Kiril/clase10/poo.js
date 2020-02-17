/* 
Crear un objeto que sea un animal y añadele algunas propiedades. 
Imprime por consola un texto con todas sus propiedades
*/

var animal = function (raza, nombre, color, patas, pelo){
    this.raza = raza;
    this.nombre = nombre;
    this.color = color;
    this.patas = patas;
    this.pelo = pelo;
    this.detalle = function(){
        console.log ("La raza del animal es " + this.raza + " " + "su nombre es " + this.nombre)
    }
};


let miAnimal1 = new animal ("Perro", "Pepe", "Marron",  "4", "largo");
miAnimal1.detalle();
//* let miAnimal2 = new animal ("Gato", "Boby", "Blanco",  "4", "corto");




/* 
Crea una clase que sea una animal y crea dos instancias de ella. 
Imprime por consola algunas de sus propiedades 
*/


