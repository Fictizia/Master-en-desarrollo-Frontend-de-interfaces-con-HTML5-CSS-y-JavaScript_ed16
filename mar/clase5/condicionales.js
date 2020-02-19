/*
CONDICIONALES

Ejercicio 1:
Comprueba si el semáforo está en verde para cruzar
    - Declarar una variable booleana que se llame estaVerde
    - Imprimimos por consola "Cruzo el paso de peatones" si está en verde
*/
var estaVerde = true;
    if (estaVerde) {
    console.log("Cruzo el paso de peatones");
}
//Respuesta => Cruzo el paso de peatones

/*
Ejercicio 2: 
Amplía el código del primer ejercicio para que imprima por consola "Espero a que el semáforo se ponga en verde"
*/
var estaVerde = true;
    if (estaVerde) {
    console.log("Cruzo el paso de peatones");
    } else {
    console.log("Espero a que el semáforo se ponga en verde");
}
//Respuesta consola => Espero a que el semáforo se ponga en verde

/*
Ejercicio 3: 
Realiza el mismo ejemplo anterior usando el operador ternario 
*/

var estaVerde = true;
    console.log(estaVerde ? "Cruzo el paso de peatones" : "Espero a que el semáforo se ponga en verde");
//Respuesta consola => Cruzo el paso de peatones

var estaVerde = false;
    console.log(estaVerde ? "Cruzo el paso de peatones" : "Espero a que el semáforo se ponga en verde");
//Respuesta consola => Espero a que el semáforo se ponga en verde

/*
Ejercicio 4: 
Crea una variable (color) e iniciala con un string "verde",
usando switch crea un semaforo que imprima por consola los siguientes mensajes:
    verde: "el semáforo está en verde"
    amarillo: "el semáforo está en amarillo"
    rojo: "el semáforo está en rojo, no pasar!"
*/

var color = "verde"; 
    switch (color){
        case "verde":
            console.log("el semáforo está en verde");
            break;
        case "amarillo":
            console.log("el semáforo está en amarillo");
            break;
        default:
            console.log("el semáforo está en rojo, ¡no pasar!")
    }
