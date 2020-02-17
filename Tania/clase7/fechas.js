/* 
Fechas

Ejercicio1:
Crea una fecha con la fecha actual y guarda en variables el día, mes, año, hora, minutos y segundos.
Imprime por consola la fecha actual y la fecha actual en un mensaje personalizado.

*/

//Ejercicio1

var ahora = new Date();
console.log(ahora);

var día = ahora.getDate();
console.log(día);

var mes = ahora.getMonth();
console.log(mes);

var año = ahora.getFullYear();
console.log(año);

var horas = ahora.getHours();
console.log(horas);

var minutos = ahora.getMinutes();
console.log(minutos);

var segundos = ahora.getSeconds();
console.log(segundos);

var ahora = new Date();
console.log(ahora);

var ahora = new Date();
console.log("Hoy es " + ahora.toLocaleString("es-ES"));