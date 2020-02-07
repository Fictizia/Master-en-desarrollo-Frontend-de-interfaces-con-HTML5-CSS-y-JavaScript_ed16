/*
    Bucles

    Ejercicio1:
    Realiza un bucle que pinte por pantalla el siguiente string 
    "Me encanta javascript (mensaje subliminal ON xD)." y que 
    tenga 100 iteraciones

    usar for, while, do-while.

    Ejercicio2:
    Realiza un bucle que imprima por consola los numeros pares del 1 al 100

*/ 

// Ejercicio1

// Ejercicio1 for
for (var i = 0; i < 100; i++) {
    console.log("Me encanta javascript (mensaje subliminal ON xD).");
}

for (var i = 0; i < 100; i++) {
    if(i%2 === 0){
        console.log(i);
    }
}

// Ejercicio1 while
var i = 0
while (i < 100) {
    console.log("Me encanta javascript (mensaje subliminal ON xD).");
    i++;
}

// Ejercicio1 do-while
var i = 0
do {
    console.log("Me encanta javascript (mensaje subliminal ON xD).");
    i++;
} while (i < 100)