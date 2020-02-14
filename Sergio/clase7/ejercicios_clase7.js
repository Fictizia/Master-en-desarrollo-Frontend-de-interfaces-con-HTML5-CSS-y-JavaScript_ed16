/*
Dates

Efercicio 1

Crea una fecha con la fecha actual y guarda en variabless el día, mes, año, hora, minutos y segundos.

Imprime por consola la fecha actual en un mensaje personalizado.

*/

var fechaActual = new Date();
    
var diaActual = fechaActual.getDay();
var mesActual = fechaActual.getMonth();
var anoActual = fechaActual.getFullYear();
var horaActual = fechaActual.getHours();
var minutoActual = fechaActual.getMinutes();
var segundoActual = fechaActual.getSeconds();

console.log("La fecha de hoy es, día: " + diaActual , "Mes: " + mesActual, "Año: " + anoActual, "Hora: " + horaActual, "Minutos" + minutoActual, "Segundos: " + segundoActual);
