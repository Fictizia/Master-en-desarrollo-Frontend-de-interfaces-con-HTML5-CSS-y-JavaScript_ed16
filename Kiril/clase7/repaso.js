/*  */
//DECLARACIÓN DE FUNCIONES 
/* Definimos la función que va a realizar las operaciones de la opcion 1.1 */
function calcular(num1, num2) {
    console.log("El número 1 es: ", num1);
    console.log("El número 2 es: ", num2);

    console.group("Operaciones matematicas"); /*"Operaciones matematicas" Es el titulo a mostrar del grupo*/
    console.time("Tiempo en realizar operaciones"); /*"Tiempo En realizar operaciones" es la variable que almacena el tiempo*/

    var suma = num1 + num2;
    console.log("La suma es: " + suma);

    var resta = num1 - num2;
    console.log("La resta es: " + resta);

    var multiplicacion = num1 * num2;
    console.log("La multiplicación es: " + multiplicacion);

    var division = num1 / num2;
    console.log("La división  es: " + division);

    if (num1 > num2) {
        console.log("El número 1 es mayor que el número 2:  " + num1 + " > " + num2);
    } else {
        console.log("El número 2 es mayor que el número 1:  " + num2 + " > " + num1);
    }

    console.timeEnd("Tiempo En realizar operaciones");
    console.groupEnd();

}

/* La función de selección de opcion */
function seleccion() {
    var opcion = prompt("Selecciona una opcion:  \n Opcion 1: Introduce 1 número:  \n Opcion 1.1 Introduce 2 numeros \n Opcion 2: Introduce tu Nombre: \n Opcion 3: Introduce tu fecha de nacimiento: \n  ");
    alert("La opcion seleccionada es: " + opcion);
    return opcion;

}




var confirmacion = confirm("¿Quieres empezar el juego?");
var opcion = 0;

if (confirmacion === true) {


    seleccion();


    switch (opcion) {
        case "1":
            var numero = prompt("Introduce un número: ");
            if (numero >= 50) {
                console.log("El número introducido es mayor que 50");
            } else {
                console.info("El número introducido es menor que 50");
            }
            break;

        case "1.1":
            alert("Introduce dos numeros: ");
            var n1 = prompt("Introduce el número 1: ");
            var n2 = prompt("Introduce el número 2: ");
            calcular(n1, n2);
            break;

        default:
            alert("Has seleccionado una opción que no existe!!");
            var comp = false;
            seleccion();
    }


} else {
    alert("Espero que vuelvas pronto!!!");
}