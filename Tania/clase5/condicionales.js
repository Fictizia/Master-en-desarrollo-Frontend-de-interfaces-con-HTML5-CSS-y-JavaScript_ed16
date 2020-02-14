/* 
Condicionales 

Ejercicio1:
Comprueba si el semáforo está verde para cruzar:
    -Declaramos una variable booleana que se llame estaVerde
    -Imprimimos por consola "Cruzo el paso de peatones" si está en verde

Ejercicio2:
    -Amplía el código del primer ejercicio para que imprima por consola "Espero a que el semáforo esté en verde"

Ejercicio3:
    -Realiza el mismo ejemplo anterior usando el operador ternario

Ejercicio4:
    -Crea una variable (color) e inicialízala con un string "verde"
    -Usando 'switch' crea un semáforo que imprima por consola los siguientes mensajes:
        verde: "el semáforo está en verde"
        amarillo: "el semáforo está en amarillo"
        rojo: "el semáforo está en rojo"
*/

//Ejercicio 1 y 2
var estaVerde = true;
if (estaVerde) {
    console.log("Cruzo el paso de peatones")
} else {
	console.log("Espero a que el semáforo esté en verde")
}

//Ejercicio 3
var estaVerde = true;
    console.log(estaVerde ? "Cruzo el paso de peatones" : "Espero a que el semáforo esté en verde");
    
//Ejercicio 4
var color = "verde";
switch (color) {
  case "verde":
    console.log("el semáforo está en verde");
    break;
  case "amarillo":
    console.log("el semáforo está en amarillo");
    break;
  case "rojo":
    console.log("el semáforo está en rojo");
    break;
}

var color = "amarillo";
switch (color) {
  case "verde":
    console.log("el semáforo está en verde");
    break;
  case "amarillo":
    console.log("el semáforo está en amarillo");
    break;
  case "rojo":
    console.log("el semáforo está en rojo");
    break;
}

var color = "rojo";
switch (color) {
  case "verde":
    console.log("el semáforo está en verde");
    break;
  case "amarillo":
    console.log("el semáforo está en amarillo");
    break;
  case "rojo":
    console.log("el semáforo está en rojo");
    break;
}