/*var numero = prompt("Dime un número");*/

function esPar (numero){
    if (numero % 2 == 0){
        console.log ("Es par");
    }
    else{
        console.log("No es par");
    }
}


function saludar (Nombre){
    /*console.log ("Hola " + Nombre + "!!!");*/
    console.log ("Hola " + document.getElementById("name").value );
}

function calcular (num1, num2){
    console.log ("El número 1 es: ",  num1);
    console.log ("El número 2 es: ", num2);
    console.log ("El resultado de la suma de ", num1, " + ", num2 , " es: ", num1+num2);

    suma = num1 + num2;
    console.log ("La suma es: ", suma);

    resta = num1 - num2;
    console.log ("La resta es: ", resta);

    multiplicacion = num1 * num2;
    console.log ("La multiplicación es: ", multiplicacion);

    division = num1 / num2; 
    console.log ("La división  es: ", division);

}