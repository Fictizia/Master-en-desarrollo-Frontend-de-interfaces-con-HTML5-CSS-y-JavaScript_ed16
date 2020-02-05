console.log("cargado")

function esPar(num){
    if (num %= 0){ 
    console.log("Es par")
    }
    else {
        console.log("Es impar") 
    }
}  

function saludar(nombre){
    console.log("Hola " + nombre);
}

function saludarHtml() {
    console.log ("Hola " + document.getElementById("nombre").value);
}

function calcularSuma(num1, num2) {
    console.log ("el número 1 es: "+  num1);   
    console.log ("el número 2 es: "+  num2);  
    console.log("el resultado de la suma es: " + (num1 + num2));
}