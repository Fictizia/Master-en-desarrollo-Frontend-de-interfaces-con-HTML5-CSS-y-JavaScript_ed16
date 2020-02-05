/*
    Condicionales

    Ejercicio 1:

    Realiza un bucle que pinte por pantalla el siguiente string 'a veces entro en bucle...'
    y que tenga 100 iteracciones

    Usar for, while, do...while

    Ejercicio 2:

    Realiza un bucle que imprima por consola los números pares

    Ejercicio 3:
    

    Ejercicio 4:
    

*/

//Ejercicio 1

var bucle = 1;
while  (bucle <= 100){
    console.log('a veces entro en bucle...');
    bucle++;
};

for (bucle = 0; bucle < 100; bucle++){
    console.log('a veces entro en bucle...');
}

var bucle = 0;
do{
    bucle++;
    console.log('a veces entro en bucle...');
}while (bucle < 100);

//Ejercicio 2

var bucle = 0;
while  (bucle < 100){
    if (bucle % 2 == 0)
    {
    console.log(bucle);
    }
    bucle++;
};

for (bucle = 0; bucle < 100; bucle ++){
    if (bucle % 2 == 0)
    {
    console.log(bucle);
    }
}

