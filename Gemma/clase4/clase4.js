/*
Ejercicio Clase 4 
    1. Preguntar el nombre al usuario y guardarlo en una variable 
    2. Imprimir por consola un saludo agradable al usuario con su nombre
*/



var nombre = prompt('¿Cómo te llamas?');

if (nombre){
    console.log ('¡Bienvenido ' + nombre + ' al curso de JS!');
}else{
    console.log ('Usuario no registrado');
}


function calcularSuma (num1, num2){
    console.log('El número 1 es: ' + num1);
    console.log('El número 2 es: ' + num2);
    console.log('El resultado de la suma es: ' + (num1 + num2));
}

/*
Ejercicio Clase 4 
    1. Nombre por prompt
    2. Guardar el nombre en la variable
    3. Pasarlo como parámetro en la función
*/

var nombre = prompt ('Introducir nombre de usuario');

function saludar(nombre){
    console.log('Hola ' + nombre + ', bienvenido a tu espacio personal');
}
saludar(nombre);