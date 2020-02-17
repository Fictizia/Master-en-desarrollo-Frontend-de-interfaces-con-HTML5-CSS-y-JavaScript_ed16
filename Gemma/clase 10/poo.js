/*

    Ejercicio

    Crea un objeto que sea un animal y añádele algunas propiedades
    Imprimir por consola un texto con todas sus propiedades

    Ejercicio 2:

    Crea una clase que sea un animal y crea dos instancias de ella
    Imprime por consola alguna de sus propiedades

*/


var gato = {
    mascota: 'gato',
    nombre: 'Pomelo',
    raza: 'British',
    edad: 2,
    color: 'gris',
    ojos: 'naranjas',
    
};
console.log(gato);

var gato = function (mascota, nombre, raza, edad, color, ojos){
    this.mascota = 'gato';
    this.nombre = 'Pomelo';
    this.raza = 'British';
    this.edad = 2;
    this.color = 'gris';
    this.ojos = 'naranjas';
    
    console.log('Mi mascota es un '+ this.mascota + this.raza + ' de color ' + this.color + ' con los ojos ' + this.ojos + ' se llama ' + this.nombre + ' y tiene ' + this.edad + ' dos años.' );
};

