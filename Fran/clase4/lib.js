console.log("loaded")

function esPar(num){
 if (num % 2 === 0) {
    console.log("Es par")
 }
 else {
    console.log("Es impar")
 }
}

function saludar(nombre){
    console.log("Hola " + nombre);
}

function saludarHtml(){
    console.log("Hola " + document.getElementById("name").value);
}

function calcularSuma(num1, num2){
    console.log("El número 1 es: " + num1)
    console.log("El número 2 es: " + num2)
    console.log("El resultado de la suma es: " + (num1 + num2))
}