/*
Números

Ejercicio 1:
Diseña un algoritmo que simula el lanzamiento de una moneda al aire 
e imprimir si ha salido cara o cruz.

Ejercicio2:
Diseña un algoritmo que simula cien tiradas de dos dados 
y contar las veces que entre los dos suman 10.

*/

//Ejercicio 1:

function azarMoneda() {
     var valor = Math.floor((Math.random() * 2) + 1);
     if (valor === 1){
        console.info("Ha salido Cara!!");
    } else {
        console.info("Ha salido Cruz!");
    }
}

 //Ejercicio 2: 

 function dados() {
     var coincidencias = 0;
     for (var i = 0; i < 100; i++) {
         var dado1 = Math.floor((Math.random() * 6) + 1);
         var dado2 = Math.floor((Math.random() * 6) + 1);
         var tirada = dado1 + dado2;
         if (tirada === 10) {
             coincidencias++;
        }
    };

    console.info("El azar ... sumó 10 un total de " +coincidencias+ " veces")

}