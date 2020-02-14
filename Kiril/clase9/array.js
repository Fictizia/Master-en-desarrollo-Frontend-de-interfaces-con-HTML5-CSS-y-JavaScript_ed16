console.log ('loaded');


/* 
Array

Ejercicio 1: 

Crear un array que contenga el nombre de 5 amigos, mascotas o frutas y despues recorre ese array
y imprimelo por pantalla (con for, map o forEach)

*/

var amigos = ["Juan", "David", "Marco", "Cristian", "Andres" ];

/* Lo recorro con un FOR */
var longitud = amigos.length;
for (i=0; i<longitud; i++ ){
    console.log ("Hola " + amigos[i]);
}


/* Lo recorro con un MAP */
var resulamigos = amigos.map(elemento => "Hola " + elemento );


/* Lo recorro con forEach */
function saludaramigos (elemento) {
    console.log("Hola " + elemento);
    return elemento;
}
amigos.forEach(saludaramigos);



var lista = document.getElementById("lista");

function addElementInLista(list){
    list.forEach(element => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        lista.appendChild(li);
    });
}
addElementInLista(amigos)