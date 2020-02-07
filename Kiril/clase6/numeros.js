/* Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

*/

function lanzarmoneda (){
    var numero = Math.floor((Math.random() * 2) + 1);
        if (numero === 1){
            console.log("Ha salido cara");
        }
            else{
            console.log("Ha salido cruz");
        }
        
}
