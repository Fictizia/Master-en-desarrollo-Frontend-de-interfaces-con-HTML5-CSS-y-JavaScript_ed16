console.log('loaded');

/*
Array

Ejercicio1:
Crea un array que contenga el nombre de cinco amigos, mascotas o frutas y después recorre ese array 
e imprímelo por pantalla (con for, map o forEach)

*/

//Ejercicio1:

//Con map
var frutas = ["melocotón", "sandía", "melón", "albaricoque", "pera"];
var resultado = frutas.map(function (elemento){return "Me gusta comer " + elemento});
console.log(resultado);

//Con forEach
var frutas = ["melocotón", "sandía", "melón", "albaricoque", "pera"];
frutas.forEach(element => console.log("Me gusta comer " + element));

var lista = document.getElementById("lista")

function addElementInList(list){
    list.forEach(element => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        lista.appendChild(li);
    });
}

addElementInList(frutas)