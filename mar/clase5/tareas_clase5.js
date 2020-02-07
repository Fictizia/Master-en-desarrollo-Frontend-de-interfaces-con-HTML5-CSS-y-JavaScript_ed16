//OPERADORES:

/*
1 - Diseña un algoritmo que lea dos números y los compare. 
Como resultado esperamos que nos diga cual es mayor... o si son iguales.

*/

//Usando if...else

function compararNumeros (num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2)
    } else if (num1 < num2) {
        console.log(num1 + " es menor que " + num2)
    } else {
        console.log("son iguales")
    }
}

//Usando Operador Ternario (?:)

function compararNumeros (num1, num2) {
    (num1 > num2) ? console.log(num1 + " es mayor que " + num2) :
    (num1 < num2) ? console.log(num1 + " es menor que " + num2) :
    (num1 = num2) ? console.log("son iguales")
}

//Usando Switch
function compararNumeros (num1, num2) {
    switch (true){
        case (num1 > num2):
            console.info(num1, " es mayor.");
            break;
        case (num1 < num2):
            console.info(num2, " es mayor.");
            break;
        default:
            console.info("Son iguales");
    }
}

/* 
2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.
*/

//Usando if...else

function comparar3Numeros (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1 + " es el mayor")
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2 + " es el mayor")
    } else {
        console.log(num3 + " es el mayor")
    }
}

//Usando Operador Ternario (?:)

function comparar3Numeros (num1, num2, num3) {
    (num1 > num2 && num1 > num3) ? console.log(num1 + " es el mayor") :
    (num2 > num1 && num2 > num3) ? console.log(num2 + " es el mayor") :
    console.log(num3 + " es el mayor");
}

//Usando Switch
function comparar3Numeros (num1, num2, num3) {
    switch (true){
        case (num1 > num2 && num1 > num3):
            console.info(num1, " es el mayor.");
            break;
        case (num2 > num1 && num2 > num3):
            console.info(num2, " es el mayor.");
            break;
        default:
            console.info(num3 + " es el mayor");
    }
}

/* 
3 - Diseña un script que siga el siguiente proceso:
Si el primero es negativo, debe sumar los otros dos
Sino multiplicará los tres numeros
Mostrar el resultado final incluyendo una referencia a la operación realizada.
*/

//Usando if...else
function misNumeros (num1, num2, num3) {
    if (num1 < 0) {
        console.log(num2 + num3)
    } else {
        console.log(num1 * num2 * num3)
    }
}

//Usando Operador Ternario (?:)

function misNumeros (num1, num2, num3) {
    (num1 < 0) ? console.log(num2 + num3) :
    (num1 > 0) ? console.log(num1 * num2 * num3)
}

//Usando Switch

function misNumeros (num1, num2, num3) {
    switch (true){
        case (num1 < 0):
            console.info(num2 + num3);
            break;
        default:
            console.info(num1 * num2 * num3);
    }
}

/* 
4 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
Se aplica un 25% cuando:
Estamos en los meses de invierno
Y no es viernes o fin de semana.
*/

//Usando if...else

function precioProducto (mes, diaSemana, precio) {
    var descuento = 25*precio/100;
    var precioConDescuento = precio - descuento;
    if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
			
        if(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo"){
            console.warn("No se aplica descuento aunque sea invierno, ya que es fin de semana. El precio final del producto es:", precio);
        } else {
            console.info("¡BINGO! Hoy tienes descuento, el precio final del producto es:", precioConDescuento);
        }

    } else {
        console.warn("Este producto no tiene descuento. Debes pagar", precio);
    };
}

//Usando Operador Ternario (?:)

function precioProducto (mes, diaSemana, precio) {
    var descuento = 25*precio/100;
    var precioConDescuento = precio - descuento;
    (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") ?
    (diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo") : 
    console.warn("No se aplica descuento aunque sea invierno, ya que es fin de semana. El precio final del producto es:", precio) : 
    console.info("¡BINGO! Hoy tienes descuento, el precio final del producto es:", precioConDescuento) : 
    console.warn("Este producto no tiene descuento. Debes pagar", precio);
}

//Usando Switch

function precioProducto (mes, diaSemana, precio) {
    var descuento = 25*precio/100;
    var precioConDescuento = precio - descuento;

    switch(true) {
        case (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") && (diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo") :
            console.warn("¡BINGO! Hoy tienes descuento, el precio final del producto es:", precioConDescuento);
            break;
        case (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") :
            console.warn("Este producto no tiene descuento. Debes pagar", precio);
            break;
        default: 
        console.info("No se aplica descuento aunque sea invierno, ya que es fin de semana. El precio final del producto es:", precio);
    }

}    

/*
5 - Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.
*/

//Usando if...else

function esPositivo (numero) {
    if (numero > 0) {
        console.log(numero, "es positivo")
    } else {
        console.warn(numero, "es negativo")
    }
}

//Usando Operador Ternario (?:)

function esPositivo (numero) {
    (numero > 0) ? console.log (numero, "es positivo") : console.warn(numero, "es negativo");
}

//Usando Switch

function esPositivo (numero) {
    switch(true) {
        case (numero > 0) : console.log (numero, "es positivo") ;
        break;
        default:
            console.warn(numero, "es negativo");
    }
}

/*
6 - Diseña un algoritmo que al introducir un número nos diga si es par o impar.
*/

//Usando if...else

function esPar (numero) {
    if (numero %2 === 0) {
        console.info(numero, " es par");
    } else {
        console.info(numero, " es impar");
    }
}

//Usando Operador Ternario (?:)

function esPar (numero) {
    (numero %2 === 0) ? console.info(numero, " es par") :
    console.info(numero, " es impar");
}

//Usando Switch

function esPar (numero) {
    switch(true) {
        case (numero %2 === 0) : console.info(numero, " es par");
        break;
        default:
            console.info(numero, " es impar");
    }
}

/*
7 - Diseña un algoritmo que nos confirme si un año es bisiesto o no.
Caracteristicas de un año bisiesto:
- Tiene que ser divisible entre 4
- No tiene que ser divisible entre 100
- Puede ser divisble entre 100 y entre 400
*/

//Usando if...else

function leapYear (year){
    if (year % 4 === 0 && year % 100 !== 0) {
        console.info("Si, el año " + year + " es bisiesto");
    } else if (year % 400 === 0 && year % 100 === 0) {
        console.info("Si, el año " + year + "es bisiesto");
    } else {
        console.warn("Lo siento, el año " + year + " no es bisiesto");
    }
}

//Usando Operador Ternario (?:)

function leapYear (year) {
    (year % 4 === 0 && year % 100 !== 0) ? console.info("Si, el año " + year + " es bisiesto")
    : (year % 400 === 0 && year % 100 === 0) ? ("Si, el año " + year + "es bisiesto") 
    : console.warn("Lo siento, el año " + year + " no es bisiesto");
}

//Usando Switch

function leapYear (year) {
    switch(true) {
        case (year % 4 === 0 && year % 100 !== 0) : console.info("Si, el año " + year + " es bisiesto");
        break;
        case (year % 400 === 0 && year % 100 === 0) : ("Si, el año " + year + "es bisiesto");
        break;
        default:
            console.warn("Lo siento, el año " + year + " no es bisiesto");
    }
}

//BUCLES:

/*
1 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
Características:
- La palabra clave es "Fictizia mola mucho"
- Solo existen tres intentos
- Si se pasan los tres intentos. Se despliega un mensaje informativo.
*/ 

//Usando for

function accesoSistema() {

    var clave = "Fictizia mola mucho";
    var acierto = false;
    var contador = 0
    for (; contador < 3 & acierto === false; contador++) {
        
        var secreto = prompt("Dime el secreto:");

        if (secreto === clave) {
            acierto = true;
            console.info(secreto, "es la clave que esperaba!")
        } else {
            console.warn(secreto, " no es correcto.")
        }
    };


    if(contador >= 3){
        console.warn("Lo siento... pero has agotado los 3 intentos.")
    }
}


//Usando while y break

function accesoSistema() {
    var clave = "Fictizia mola mucho";
    var contador = 0
    while (contador < 3) {
        var secreto = prompt("Dime el secreto:");
        if (secreto === clave) {
            console.info(secreto, "es la clave correcta")
            break;
        } else {
            console.warn(secreto, " clave incorrecta")
        }
        contador++
    }
    if (contador >= 3) {
        console.warn("Lo siento, has agotado los 3 intentos.")
    }
}

//Usando Do...While

function accesoSistema() {
    var clave = "Fictizia mola mucho";
    var acierto = false;
    var contador = 0;
    do {
        var secreto = prompt("Dime el secreto");
            if (secreto === clave) {
                acierto = true;
                console.info(secreto, " es la palabra clave correcta")
            } else {
                console.warn(secreto, " palabra clave incorrecta")
            }
            contador++
    } while (contador < 3 & acierto === false);
    if (contador > 3) {
        console.warn("Lo siento, has agotado los 3 intentos.") //este no sale
    }
}

/*2 - Diseña un algoritmo que imprima los numeros del 1 al 100.
 */

 //Usando for

 function contador() {
     
     for (var i = 1; i <= 100; i++) {
         console.log(i)
     };
 }

 //Usando while
 
 function contador(); {
    var i = 1 
    while (i <= 100) {
        console.log(i);
        i++;
}


//Usando do while

function contador(); {
    var i = 1 
    do {
        console.log(i);
        i++;
    } while (i <= 100);
    }

/*3 - Diseña un algoritmo que imprima los numeros del 100 al 0.
 */

 //Usando for

 function contadorNegativo() {
     console.info("Comienza la cuenta atrás");
     for (var i = 100; i >= 0; i--) {
         console.log(i)
     }
     console.info("Terminó la cuenta mágica...");
 }

 //Usando while

 function contadorNegativo() {
    console.info("Comienza la cuenta atrás");
     var i = 100
     while (i >= 0) {
         console.log(i);
         i--;
     }
     console.info("Terminó la cuenta mágica...");
 }

 //Usando do while

 function contadorNegativo() {
    console.info("Comienza la cuenta atrás");
     var i = 100
     do {
         console.log(i);
         i--;
     } while (i >= 0);
     console.info("Terminó la cuenta mágica...");
 }

 /*4 - Diseña un algoritmo que imprima los numeros pares entre 0 y 100.
 */

  //Usando for

  function numerosPares() {
    console.info("Mira todos los que hay");
    for (var i = 0; i <= 100; i += 2) { //no entiendo por qué el +=2
        console.log(i)
    }
    console.info("Terminó la cuenta mágica de números pares");
}

 //Usando while

 function numerosPares() {
    console.info("Mira todos los que hay");
    var i = 0
    while (i <= 100) {
        console.log(i);
        i += 2;}
    console.info("Terminó la cuenta mágica de números pares");
}


 //Usando do while

 function numerosPares() {
    console.info("Mira todos los que hay");
    var i = 0
    do {
        console.log(i);
        i += 2;
    } while (i <= 100);
    console.info("Terminó la cuenta mágica de números pares");
 }

  /*Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.
 */

  //Usando for

  function contador50Impares(numero) {
      var impar = 0;
      console.info("Empieza la cuenta de los impares");
      for  ( ; impar <= 50 ; ) { //no entiendo los puntos y comas
          if (numero %2 !== 0) {
              console.log(numero);
              impar++
          }
          numero++;
      }
      console.info("Aquí termina la cuenta de los impares");
  }

  //Usando while

  function contador50Impares(numero) {
    console.info("Empieza la cuenta de los impares");
    var impar = 1
    while (impar <= 50) {
        if (numero % 2 !== 0){
        console.log(numero);
        }
        numero++
        impar++
    }
    console.info("Aquí termina la cuenta de los impares");
  }

  //Usando do... while

  function contador50Impares(numero) {
    console.info("Empieza la cuenta de los impares");
    var impar = 1
    do {
        if (numero % 2 !== 0){
            console.log(numero);
            numero++
        } else (numero++)
        impar++;
    } while (impar <= 50);
    console.info("Aquí termina la cuenta de los impares");
  }