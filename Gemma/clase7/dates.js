/*
Dates

Efercicio 1

Crea una fecha con la fecha actual y guarda en variabless el día, mes, año, hora, minutos y segundos.

Imprime por consola la fecha actual en un mensaje personalizado.

*/

var ahora = new Date ();

var diaSemana = ahora.getDay ();
var diaMes = ahora.getDate ();
var mes = ahora.getMonth ();
var year = ahora.getFullYear ();
var hora = ahora.getHours ();
var minutos = ahora.getMinutes ();
var segundos = ahora.getSeconds ();


console.log ('Hoy es día ' + diaMes + ' del mes ' + mes + ' del año ' + year );

