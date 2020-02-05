/*Condicionales*/


/*1 - Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.*/

num1 = prompt ('Introduce el num1 :','');
num2 = prompt ('Introduce el num2 :','');

if (num1 > num2){
    mayor=num1;
}
else {
    mayor=num2;
}

console.log ("El mayor entre  " + num1 + " + " + num2 + "es: " + mayor + "!!!");

/* 
Ejercicio 1
Comprueba si el semafoto está en verde para cruzar: 
    -Declaramos una variable booleana que se llame estaVerde
    -Imprimimos por consola "Cruzo el paso de peatones" si esta en verde

Ejercicio 2
    Amplia el código del primero ejercicio para que imrima por consola "Espero a el semaforo esté en verde"

Ejercicio 3 

    Realiza el mismo ejemplo anterior unsando el operador ternario 
*/

/* 
Ejercicio 1
Comprueba si el semafoto está en verde para cruzar: 
    -Declaramos una variable booleana que se llame estaVerde
    -Imprimimos por consola "Cruzo el paso de peatones" si esta en verde
*/

var estaVerde = true;

if (estaVerde) {
    console.log("Cruzo el paso de peatones");

}
/*
Ejercicio 2
    Amplia el código del primero ejercicio para que imrima por consola "Espero a el semaforo esté en verde"*/

    var estaVerde = true;

    if (estaVerde) {
        console.log("Cruzo el paso de peatones");
    }
    else{
        console.log("Espero a el semafóro esté en verde");
    }
/*Ejercicio 3 
    Realiza el mismo ejemplo anterior unsando el operador ternario */
    var estaVerde = true;
    console.log (estaVerde ? "Cruzo el paso de peatones" : "Espero a el semafóro este en verde");

/*Ejercicio 4 
    Crear una variable (color) e inicializarla con un string "verde"
    Usando 'switch' crear un semafoto que imprima por consola los siguientes mesajes: 
    verde: "El semaforo está en verde" 
    amarillo: "El semaforo está en amarillo" 
    rojo: "El semaforo está en rojo" 
*/

var color = "verde";
    switch (color){

        case "verde":{
        console.log("El semafor está en verde, puedes cruzar");
        break;
        }
        case "ambar":{
        console.log("El semafor está en ambar, puedes cruzar con precaución!!!");
        break;
        }
        case "rojo":{
        console.log("El semafor está en rojo, esperate a que se ponga en verde");
        break;
        }
        default:{
        console.log("El semafor no esta encendido");
        break;
        }
    }


