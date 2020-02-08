/* Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

*/

function lanzarmoneda() {
    //var numero = Math.floor((Math.random() * 2) + 1);
    var numero = Math.floor(Math.random() * (2 - 0)) + 0;
    if (numero === 1) {
        console.log("Ha salido cara");
    } else {
        console.log("Ha salido cruz");
    }
}
/*
Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
*/

/* Empezamos el bucle para que realice 100 tiradas */
var contador = 0;
for (i = 0; i <= 100; i++) {

    /* Hacemos los lanzamientos de dados y almacenamos el valor de cada dado */
    var dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
    var dado2 = Math.floor(Math.random() * (7 - 1)) + 1;

    /* Comprobamos si los numeros de los dos dados suman 10 */
    if ((dado1 + dado2) === 10) {
        contador++;
    }
    /* Imprimimos el número de tirada y la operacion entre el dado1 + dado2*/
    console.info("Tirada Nº: " + i);
    console.info(dado1 + " + " + dado2 + " = " + (dado1 + dado2));
}
/* imprimimos el resultado de las veces que suman 10 los dos dados  */
console.info("Los 2 dados han sumado 10:  " + contador + " veces");