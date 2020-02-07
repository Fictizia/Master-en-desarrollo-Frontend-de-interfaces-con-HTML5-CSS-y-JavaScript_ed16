/*

BUCLES

Ejercicio 1:
Realice un bucle que pinte por pantalla el siguiente string "a veces entro en bucle..."
y que tenga 100 interaciones

usar for, while, do-while

*/

//Bucle for
for (var bucleMar = 0; bucleMar < 100; bucleMar++) {
    console.log("a veces entro en bucle...");
}

//Bucle while
var bucleMar = 1;
while (bucleMar <= 100) {
    console.log("a veces entro en bucle...");
    bucleMar++;
};

//Bucle do-while
var bucleMar = 0;
do {
    bucleMar++;
   console.log("a veces entro en bucle...");
} while (bucleMar < 100);


/*
Ejercicio 2:
Realiza un bucle que imprima por consola los números pares del 1 al 100
*/

for (var buclePar = 0, buclePar < 100; buclePar++){
    if (buclePar%2 === 0) {
        console.log(buclePar);
    }
}

