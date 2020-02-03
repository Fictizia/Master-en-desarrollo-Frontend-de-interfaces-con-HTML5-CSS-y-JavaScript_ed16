/*
Tarea 1
    - Declara una variable que contenga tu nombre
    - Imprimir por pantalla saludandote amablemente 'Hola [Nombre]'

Tarea 2
    - Declara una variable de tipo Numérico inicializada con valor 100
    - Declara una segunda variable y inicializala con el valor que desees
    - Haz unas operaciones de tipo: + , - , * , / , % (imprimir por consola resultado)
    - Juega con los operadores ++ , -- , += , -= , 
*/

var nombre = "Kiril";
console.log ( "Hola ", nombre);

var num1 = 100;
var num2 = 200;
suma = num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;
resto = num1 % num2;

console.log("La suma de ", num1, "+ ", num2, "es igual a: ", suma);
console.log ( "La resta de ", num1, "- ", num2, "es igual a: ", resta);
console.log ( "La multiplicación de ", num1, "+ ", num2, "es igual a: ", multiplicacion);
console.log ("La division de ", num1, "+ ", num2, "es igual a: ", division);
console.log ("El resto de ", num1, "+ ", num2, "es igual a: ", resto);

var numero = 10;

console.log ( ++numero); //El número aumenta en "1", cuando nos lo imprime por pantalla sera 11
console.log ( --numero); //El número disminiye en "1", cuando nos lo imprima por pantalla sera 9
console.log ( numero++); //El numero se le suma "1", despues de imprimirlo por pantalla
console.log ( numero); //En el paso anterior le hemos sumado "1", asi que al imprimirlo ahora sera 11
console.log ( numero--); //Se le resta "1", despues de imprimirlo por pantalla
console.log ( numero); //el número que imprime por pantalla es: 10

var numero = 5;
console.log ( numero + (--numero)); //El resultado es: 5+ 4= 9

var numero = 20;
console.log ( numero++);
console.log ( numero + numero); //La suma es: 21 + 21 = 42

var numero = 50;
console.log ( numero / (numero + (--numero))); // es igual 0,505050

var num1 = 10;
var num2 = 10.50;
var num3 = 10;
var texto = "Hola";
var texto1 = "10";
var verificacion = true;

num1 == num2; //False, Porque son los 2 numero, no distingue entre entero y decimal
num1 === num3; // True,mismo valor y tipo 
num1 == texto; //False porque el valor no es el mismo
num1 == texto1; //True, porque el valor es el mismo, no considera el tipo
num1 === texto1; //False, porque el tipo de dato es distinto