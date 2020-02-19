console.log ('loaded');


/*

Array

Ejercicio 1:

Crear un array que contenga el nombre de 5 amigos, mascotas o frutas y después recorre ese array e imprimelo por pantalla (con for, map o foreach)

*/



var amigos= ["Juan","Dani","Sara","Iñigo"];
var resultado = amigos.map(function (elemento)
{return elemento + " es mi amigo/a "});
console.log(resultado);

var lista = document.getElementById("lista")

function addElementInlist(list){
    list.forEach(element =>{
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(element));
        lista.appendChild(li);
    })
}

addElementInlist(amigos)


