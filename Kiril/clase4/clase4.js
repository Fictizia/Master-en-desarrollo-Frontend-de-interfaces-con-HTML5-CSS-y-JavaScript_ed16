/*
Ejercicios clase 4

1 - Preguntar el nombre al usuario y guardarlo en una variable 
    Imprimir un saludo agradable al usuario
*/
alert("Hola usuario");

confirmacion = confirm("Deseas registrarte?");

if (confirmacion === true){ 
    var nombre = prompt("¿Como te llamas?");
    alert("Bienvenido Kiril!!!")
    verificacion = confirm("Desea comprobar lo rapido que funciona su navegador?");
        if (verificacion === true){
            console.group("Grupo console.log"); /*"Grupo" Es el titulo a mostrar del grupo*/
            console.time("Tiempo Grupo console.log"); /*"Tiempo Grupo" es la variable que almacena el tiempo*/
            console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,nombre);
            console.timeEnd("Tiempo Grupo console.log");
            console.groupEnd();
        }
}
else{
    alert("Adios, espero que vuelvas pronto!!!");
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

calcular (10,20);

/*Nombre prompt
Guardar en variable
Pasarselo a funcion*/ 

function saludar (Nombre){
   
    console.log ("Hola " + Nombre + "!!!");
    
}
nombre= prompt("¿Como te llamas?");
saludar(nombre);


/*Comparadores Basicos y Complejos
Comprobar que tenga más de 18 años*/

alert("Hola usuario");

confirmacion = confirm("Deseas registrarte?");

if (confirmacion === true){ 
    var nombre = prompt("¿Como te llamas?");
    var edad = prompt("¿cuantos años tienes?");
    if (edad >= 18)  {
        alert("Bienvenido Kiril!!!")
        verificacion = confirm("Desea comprobar lo rapido que funciona su navegador?");
            if (verificacion === true){
                console.group("Grupo console.log"); /*"Grupo" Es el titulo a mostrar del grupo*/
                console.time("Tiempo Grupo console.log"); /*"Tiempo Grupo" es la variable que almacena el tiempo*/
                console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,nombre);
                console.timeEnd("Tiempo Grupo console.log");
                console.groupEnd();
            }
        }
    else{
        alert("Eres menor de edad");

    }
}
else{
    alert("Adios, espero que vuelvas pronto!!!");
}