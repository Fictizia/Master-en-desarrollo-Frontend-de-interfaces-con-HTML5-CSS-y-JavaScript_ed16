/*
Tarea 1
    - Declara una variable que contenga tu nombre
    - Imprimir por pantalla saludandote amablemente 'Hola [Nombre]'

Tarea 2
    - Declara una variable de tipo numérico iniciala con valor 100
    - Declara una segunda variable e iniciala con el valor que desees
    - Haz unas operaciones de tipo +, -, *, / y % (imprimir consola resultados)
    - Juega con los operadores ++, --, +=, -=
*/

var miNombre = 'Gemma';
console.log("¡Hola " + miNombre + ", buenos días!" );

var firstNumber = 100;
var secondNumber = 25;

// Operaciones básicas
var suma = firstNumber + secondNumber;
console.log(suma);

var resta = firstNumber - secondNumber;
console.log(resta);

var multiplicacion = firstNumber * secondNumber;
console.log(multiplicacion);

var division = firstNumber / secondNumber;
console.log(division);

// Opreraciones crecimiento y decrecimiento
console.log(++firstNumber);
console.log(--secondNumber);
console.log(secondNumber--);

var firstNumber = 100;
var secondNumber = 75;

// Operaciones asignación
firstNumber += secondNumber;
secondNumber -= firstNumber;

var firstNumber = 100;
var secondNumber = 32;

firstNumber / secondNumber;
firstNumber % secondNumber;

// Función de operaciones
function calcular(firstNumber, secondNumber){
    console.log("El valor de la suma es:", firstNumber+secondNumber);
    console.log("El valor de la resta es:",firstNumber-secondNumber);
    console.log("El valor de la división es:", firstNumber/secondNumber);
    console.log("El valor de la multiplicación es:", firstNumber*secondNumber)
};

