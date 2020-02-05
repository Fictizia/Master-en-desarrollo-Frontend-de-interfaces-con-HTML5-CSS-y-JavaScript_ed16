/*
    Condicionales

    Ejercicio 1:

    Comprueba si el semáforo está verde para cruzar:

        - Declaramos una variable booleana que se llame estaVerde
        - Imprimir por consola 'Cruzo el paso de peatones' si está en verde

    Ejercicio 2:

    Amplia el código del primer ejercicio para que imprima por consola 'Espero a que el semáforo esté en verde'

    Ejercicio 3:
    Realiza el mismo ejemplo anterior usando el operador ternario :)

    Ejercicio 4:
    Crea una variable (color) e inicializala con un string "verde",
    usando 'switch' crea un semáforo que impirma por condsola los siguientes mensajes:
        - verde: 'El semáforo está en verde'
        - amarillo: 'El semáforo está en amarillo'
        - rojo: 'El semáforo está en rojo'

*/

//Ejercicio 1 y 2

var estaVerde = true;
if (estaVerde){
    console.log ('Cruzo el paso de peatones');
}else{
    console.log ('Espero a que el semáforo esté en verde');
}

//Ejercicio 3

var estaVerde = false;
    console.log(estaVerde ? 'Cruzo el paso de peatones' : 'Espero a que el semáforo esté en verde');

//Ejercicio 4

var color = 'verde';
switch (color){
    case 'verde':
        console.log('El semáforo está en verde');
        break;
    case 'amarillo':
        console.log('El semáforo está en amarillo');
        break;
    case 'rojo':
        console.log('El semáforo está en rojo');
        break;
    default :
    console.log('Deja de trolearme, soy un semáforo');
        break;
}