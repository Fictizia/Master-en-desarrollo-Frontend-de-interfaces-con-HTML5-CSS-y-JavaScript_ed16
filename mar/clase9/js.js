console.log('loaded');

/*
Array

Ejercicio1:

Crea un array que contenga el nombre de 5 amigos, mascotas o frutas y después 
recorre ese array e imprímelo por pantalla (com for, map o forEach)

*/

var animales = ['Perro', 'Oso', 'Koala', 'Canguro', 'Tigre'];
var lista = document.getElementById("lista");

function addElementInList(list) {
    list.forEach(element => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        lista.appendChild(li);
    });
}

addElementInList(animales)

//Con map:

var accion = animales.map(function (elemento) {return "Me gustaría adoptar un " + elemento});
console.log(accion);

//Con forEach
function adoptar(element, index, array) {
    console.log('array[Quiero adoptar un ' + element + ']' );
}
animales.forEach(adoptar);



