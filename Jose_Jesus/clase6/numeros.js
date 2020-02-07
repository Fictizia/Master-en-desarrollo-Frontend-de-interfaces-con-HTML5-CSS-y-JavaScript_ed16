/*
Ejercicios
    1-Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

*/

function moneda(){
    var numero = Math.floor((Math.random() * 5) + 1);
    if (numero === 1){
        console.log("Ha salido Cara!!");
    } else {
        console.log("Ha salido Cruz!");
    }




}