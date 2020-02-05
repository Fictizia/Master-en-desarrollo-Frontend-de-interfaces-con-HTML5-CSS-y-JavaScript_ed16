/*Bucles

Ejercicio 1

Realizar un bucle que pinte por pantalla el siguiente string: "aveces entro en bucle..." 
+ contador que tenga 100 iteraciones 

Usar for, while, (do) while. 

*/

/*FOR*/


/*WHILE*/
while (true){
    console.log("aveces entro en bucle"); /*bucle infinito*/
}
/*Con contador*/

var i = 0;
while (i<100){
    i++;
    console.log("aveces entro en bucle..." + i);
    
}

/* DO... WHILE*/
do{
    console.log("aveces entro en bucle...");  /*bucle infinoto*/
}while(true);


/*Con contador*/
var cont = 0;
do{
    cont++;
    console.log("aveces entro en bucle...");
    
}while (cont>=100);



/*FOR*/

/*con contador*/
for (var i=0; i<100; i++){
    console.log("aveces entro en bucle... " + i);
}
console.log("aveces entro en bucle... " + i);

/*Ejercicio 2

Realizar un bucle que imprima por consola los numeros pares de 1 al 100
*/

/*FOR*/
for (var i=1; i<=100; i++){
    
    if (i % 2 === 0){
        console.log(i + " es un número par");
    }
}
/*WHILE*/
var num=0;
while (num<100){
    if (num % 2 ===0){
    console.log(num + " es un número par");
    }
    num++;
}


