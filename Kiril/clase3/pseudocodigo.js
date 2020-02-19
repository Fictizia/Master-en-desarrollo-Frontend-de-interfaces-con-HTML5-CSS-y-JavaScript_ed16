/*
Hacer la suma, resta, division y multiplicacion de dos números introducidos por pantalla. 

Introduce num1

Introduce num2

----Suma----
suma = num1+num2
Imprimir "El resultado de la suma de " num1 " + " num2 " es " suma

----Resta----
resta = num1-num2
Imprimir "El resultado de la resta" num1 " - " num2 " es " resta

----Division----
division = num1 / num2
Imprimir "El resultado de la division entre" num1 " y " num2 " es " division

----Multiplicacion----
multiplicacion = num1 * num2
Imprimir "El resultado de la multiplicacion" num1 " * " num2 " es " multiplicacion

*/

num1 = prompt ('Introduce el num1 :','');
num2 = prompt ('Introduce el num2 :','');



/*Suma*/

suma = num1 + num2;
document.write ('el resultado de la suma de ',num1, ' + ' , num2, 'es', suma);