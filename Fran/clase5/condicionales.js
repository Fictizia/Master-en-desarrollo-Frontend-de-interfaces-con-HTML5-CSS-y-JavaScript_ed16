/*
    Condicionales

    Ejercicio1:

    Comprueba si el semaforo está en verde para cruzar:

        - Declaramos una variable booleana que se llame estaVerde
        - Imprimimos por consola "Cruzo el paso de peatones" si está en verde

    Ejercicio2:

    Amplia el código del primer ejercicio para que imprima por consola "Espero a el semaforo
    este en verde"
    
    Ejercicio3:

    Realiza el mismo ejemplo anterior usando el operador ternario ^^

    Ejercicio4:

    Crea una variable (color) e inicializala con un string "verde", 
    usando 'switch' crea un semaforo que imprima por consola los siguientes
    mensajes:
    verde: "el semaforo esta en verde"
    amarillo: "el semaforo esta en verde"
    rojo: "el semaforo esta en verde"
    
*/ 

// Ejercicio 1 y 2
var estaVerde = true;
if (estaVerde) {
    console.log('Cruzo el paso de peatones')
}
else {
    console.log('Espero a el semáforo este en verde')
}

// Ejercicio 3
console.log(estaVerde ? 'Cruzo el paso de peatones' : 'Espero a el semáforo este en verde');

// Ejercicio 4

var color = "verde";

switch (color) {
    case "verde":
        console.log("El semáforo esta verde");
        break; 
    case "amarillo":
        console.log("El semáforo esta amarillo");
        break; 
    case "rojo":
        console.log("El semáforo esta rojo");
        break; 
    default:
        console.log("El semáforo no esta encendido");
        break; 
}