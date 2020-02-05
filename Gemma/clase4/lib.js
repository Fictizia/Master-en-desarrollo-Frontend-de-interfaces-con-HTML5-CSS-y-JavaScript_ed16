

function saludar (nombre){
    console.log('Hola ' + nombre + ', bienvenido a tu espacio personal');
}

function calcularSuma (num1, num2){
    console.log('El número 1 es: ' + num1);
    console.log('El número 2 es: ' + num2);
    console.log('El resultado de la suma es: ' + (num1 + num2));
}

function esPar(num) {
    if (num % 2 === 0){
        console.log('Es par');
    }else{
        console.log('No es par');
    }
}
function saludarHTML (){
    console.log('Hola ' + document.getElementById("name").value + ', bienvenido a tu espacio personal');
}