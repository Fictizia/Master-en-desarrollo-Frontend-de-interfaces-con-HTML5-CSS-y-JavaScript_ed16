/* 
Bucles 

Ejercicio1:
Realiza un bucle que pinte por pantalla el siguiente string "a veces entro en bucle..." y que tenga 100 interacciones

usar for, while, do... while

Ejercicio2
Realiza un bucle que imprima por consola los números pares del 1 al 100


*/

//Ejercicio 1
var control = 1;
while (control <= 100) {
    console.log("A veces entro en bucle...");
	control++;
}

for (var control = 1; control <= 100; control++) {
	console.log("A veces entro en bucle...");
}

var control = 1;
do {
	control++;
	console.log("A veces entro en bucle...");
} while (control <= 100);

//Ejercicio 2
var control = 0;
while (control < 100) {
    console.log(control);
	control +=2;
}