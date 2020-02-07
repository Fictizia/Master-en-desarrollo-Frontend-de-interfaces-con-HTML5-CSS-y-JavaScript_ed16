/*1 - Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz. */

function caraOCruz() {
    var moneda = Math.random();
    if (moneda < 0.5) {
        console.log("¡Es cara!")
    } else {
        console.log("¡Es cruz!")
    }
}

/*2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.*/

 function dados() {
    var tirada = Math.floor((Math.random() * (12 - 2) + 2));

 }