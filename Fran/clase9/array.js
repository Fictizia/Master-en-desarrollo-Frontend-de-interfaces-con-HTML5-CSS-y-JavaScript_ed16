console.log('loaded');

/*
    Array

    Ejercicio 1:
    Crea un array que contenga el nombre de 5 amigos, mascotas o frutas y despues recorre
    ese array e imprimelo por pantalla (con for, map o forEach) 
*/

var animals = ["Gato", "Perro", "Elefante", "Iguana", "Mapache"]

var lista = document.getElementById("lista")

function addElementInList(list){
    list.forEach(element => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        lista.appendChild(li);    
    });
}

addElementInList(animals)
