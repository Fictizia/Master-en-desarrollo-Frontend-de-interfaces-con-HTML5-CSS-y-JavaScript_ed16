/*
    Array
    
    Ejercicio 1:

    Crea un array que contenga el nombre de 5 amigos, mascotas o frutas y despues recorre ese array e imprímelo por pantalla ( con for , map o forEach)


    */
/*
    var mascotas = ['perro', 'gato', 'lobo', 'serpiente', 'dragón' ];
    var acciones = mascotas.map(
        function (element){
            return 'Mi mascota es un ' + element;    
        }
        );
        console.log(acciones);

mascotas.forEach(element => console.log('Mi mascota es un ' + element));
*/

var animals = ['perro', 'gato', 'lobo', 'serpiente', 'dragón' ];
var lista = document.getElementById('lista')

function addElementInList(list){
    list.forEach(element => {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        lista.appendChild(li);
    });
}

addElementInList(animals)
