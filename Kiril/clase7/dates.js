/* 
    Fechas
    
    Crea la fecha actual y guarda en variables el día, mes, año, hora, minutos y segundos. 
    
    Imprime por consola la fecha actual y la fecha actual en un mensaje personalizado. 
*/

var ahora = new Date();

var dia = ahora.getDate();
var mes = ahora.getMonth();
var año = ahora.getFullYear();
var hora = ahora.getHours();
var minuto = ahora.getMinutes();
var segundos = ahora.getSeconds();

console.log ("Son las " + hora + ":" + minuto + ":" + segundos + " del " + dia + " de " + mes + " de " + año)


var opciones = {
    //ponemos solo las propiedades que queremos que aparezcan, si dejamos las dos nos muestra las dos. 
    //si dejamos solo el month, nos aparece solo el mes en version larga
    month: 'long',
    //day: '2-digit'
}


console.log ("Son las " + hora + ":" + minuto + ":" + segundos + " del " + dia + " de " + ahora.toLocaleString("es-ES",opciones) + " de " + año)

