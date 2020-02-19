/*
Ejercicio1
Crea una fecha con el dato actual y guarda en variables el día, mes, año, 
hora, minutos y segundos.

Imprime por consola la fecha actual y la fecha actual en un mensaje personalizado

*/

var now = new Date();
var date = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

console.log("Hola clase, hoy es día "+ date + " del mes " + month + " del año " + year + ". Y ahora mismo son las " + hours + " y " + minutes + " horas " + seconds + " segundos.")
