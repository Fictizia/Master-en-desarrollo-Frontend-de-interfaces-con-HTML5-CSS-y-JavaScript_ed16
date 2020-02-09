//Ejercicio 1 CARA O CRUZ

var valor = Math.floor((Math.random() * 2) + 1);
if (valor === 1){
   console.info("Cruz"); 
} else {
   console.info("Cara");
}


//Ejercicio2 Veces se se suma 10 con la tirada de 2 dados

var iguales10 = 0;

for (var i = 0; i < 100; i++) {
  var dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
  var dado2 = Math.floor(Math.random() * (7 - 1)) + 1;
  var lanzamiento = dado1 + dado2;

if (lanzamiento === 10) {
  iguales10++; 
  }
}

console.log("las vces que se ha sumado 10 con los dos lados son " + iguales10);