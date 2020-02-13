# Clase 7

### Dates

**Librerías:**
- [Dates.js](http://www.datejs.com/)
- [Momments.js](http://momentjs.com/timezone/)
- [JQuery timeAgo](http://timeago.yarp.com/)
- [Livestamp.js](https://mattbradley.github.io/livestampjs/)

**Metodos**

- Creando Fechas:
    - Fecha Actual:
    ```javascript
        var ahora = new Date();
        console.log(ahora);
    ```
    - Usando milisegundos (desde el 1/1/1970 00:00):
    ```javascript
        var diaDespues = new Date(3600*24*1000);
        console.log(diaDespues);
    ```
    - Usando cadenas de texto:
    ```javascript
        var newYear = new Date("January 1, 2016 00:00:00");
    ```
    - Usando números:
    ```javascript
        var newYear = new Date(2016, 1, 1); // AAAA, MM, DD
        var newYear = new Date(2016, 1, 1, 0, 0, 0); // AAAA, MM, DD, HH, MM, SS
    ```
    - Usando UTC:
    ```javascript
        var newYear = new Date(Date.UTC(2016, 1, 1));
    ```

- Getters:
    - Local
    ```javascript
        var ahora = new Date();
        console.log("La fecha es " + ahora);
        console.log("==== FECHA ====");
        console.log("El año: " + ahora.getFullYear()); // 4 digitos
        console.log("El mes: " + ahora.getMonth()); // 0 - 11
        console.log("El día de la semana: " + ahora.getDay()); // 0 - 6 (D - S)
        console.log("El día del mes: " + ahora.getDate()); // 1-31
        console.log("==== HORA ====");
        console.log("Horas: " + ahora.getHours());
        console.log("Minutos: " + ahora.getMinutes());
        console.log("Segundos: " + ahora.getSeconds());
        console.log("Milisegundos desde 1/1/1970: "+ ahora.getTime());
        console.log("milisegundos: " + ahora.getMilliseconds());
    ```
    - UTC
    ```javascript
        var ahora = new Date();
        console.log("Con UTC: ";
        console.log("==== FECHA ====");
        console.log("El año: " + ahora.getUTCFullYear()); // 4 digitos
        console.log("El mes: " + ahora.getUTCMonth()); // 0 - 11
        console.log("El día de la semana: " + ahora.getUTCDay()); // 0 - 6 (D - S)
        console.log("El día del mes: " + ahora.getUTCDate()); // 1-31
        console.log("==== HORA ====");
        console.log("Horas: " + ahora.getUTCHours());
        console.log("Minutos: " + ahora.getUTCMinutes());
        console.log("Segundos: " + ahora.getUTCSeconds());
        console.log("milisegundos: " + ahora.getUTCMilliseconds());
    ```

- Setters:
    - Local
    ```javascript
        var newYear = new Date(Date.UTC(2016, 1, 1));
        console.info("La fecha es " + newYear);
        
        newYear.setFullYear(1980); // Pasamos a 1980
        console.info("La fecha es " + newYear);
        
        newYear.setDate(56); // 1 Enero + 56 Días
        console.info("La fecha es " + newYear);
        
        newYear.setUTCMilliseconds(1500); // 1500ms en formato UTC
        console.info("La fecha es " + newYear);
        
        newYear.setUTCHours(36); // le sumamos 36 horas
        console.info("La fecha es " + newYear);
        
        newYear.setMonth(-6); // le quitamos 6 meses
        console.info("La fecha es " + newYear);
    ```

- Otros:
    -.getTimezoneOffset() *Devuelve la diferencia entre tu zona horaria y UTC (en minutos)*
    ```javascript
        ahora.getTimezoneOffset();
    ```
    -.toString(), .toDateString(), .toTimeString() *Devuelve una cadena con la fecha*
    ```javascript
        ahora.toString(); // Fecha y Hora
        ahora.toDateString(); // Solo Fecha
        ahora.toTimeString(); // Solo Hora
    ```
    -.toUTCString(), .toISOString() *Devuelve una cadena con la fecha en formatos específicos*
    ```javascript
        ahora.toISOString(); // UTC
        ahora.toUTCString(); // ISO
    ```
    -..toLocaleString() *Devuelve una cadena con la fecha en version local.*
    ```javascript
        
        var ahora = new Date();
        console.info(ahora.toLocaleString());
        
        // Código de idioma IETF para Alemán
        console.info(ahora.toLocaleString("de-DE"));
        
        // Opciones Avanzadas para fechas
        var opciones = { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'};
        console.log(ahora.toLocaleString("de-DE", opciones));
    ```
    -.getTimezoneOffset() *Devuelve la diferencia entre tu zona horaria y UTC (en minutos)*
    ```javascript
        ahora.getTimezoneOffset();
    ```
    - Tiempo transcurrido:
    ```javascript
        var inicio = new Date();
        // + código
        var fin = new Date();
        var transcurso = fin.getTime() - inicio.getTime();
        console.info("Pasaron "+transcurso+"ms");
    ```
### Ejercicios

**1 -** Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año) usando una función.
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)

- Solución 1:
```javascript

	// Opcion 1
	function verificadorDeFechas (day, month, year) {
		// Opcion 1
		var fecha = new Date(year, month-1, day);

		if (fecha.getFullYear() === year){
			var opciones = { 
			    weekday: 'long',
			    year: 'numeric', 
			    month: 'long', 
			    day: 'numeric'
			};
			var fechaFormato = fecha.getDate() + "/" + (fecha.getMonth()+1) +"/"+ fecha.getFullYear(); 
			
			console.info("La fecha es correcta", fechaFormato);
			console.info("La fecha en otro formato: ", fecha.toLocaleString("es-ES", opciones));
 
		} else {
			console.warn("Error! los datos no son correctos!");			
		}
	}
```

- Solución 2:
```javascript

	function verificadorDeFechas (day, month, year) {
		var fechaDetalle,
		fecha = day + "/" + month + "/" + year;

		if(day <= 31 && day > 0 && month <=12 && month > 0 && year >= 0){
			console.info("La fecha es correcta", fecha);

			switch (month) {
				case 1:
					fechaDetalle = day + " de Enero de " + year;
					break;
				case 2:
					fechaDetalle = day + " de Febrero de " + year;
					break;
				case 3:
					fechaDetalle = day + " de Marzo de " + year;
					break;
				case 4:
					fechaDetalle = day + " de Abril de " + year;
					break;
				case 5:
					fechaDetalle = day + " de Mayo de " + year;
					break;
				case 6:
					fechaDetalle = day + " de Junio de " + year;
					break;
				case 7:
					fechaDetalle = day + " de Julio de " + year;
					break;
				case 8:
					fechaDetalle = day + " de Agosto de " + year;
					break;
				case 9:
					fechaDetalle = day + " de Septiembre de " + year;
					break;
				case 10:
					fechaDetalle = day + " de Octubre de " + year;
					break;
				case 11:
					fechaDetalle = day + " de Noviembre de " + year;
					break;
				case 12:
					fechaDetalle = day + " de Diciembre de " + year;
					break;
			}

			console.info("La fecha en otro formato: ", fechaDetalle);

		} else {
			console.warn("Error! los datos no son correctos!");
		}

	}
```

**Truco**

Usar getters para modificar fechas (días, meses, etc...)

Nota: Partiendo del ejemplo de [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)

- sin *getters*
```javascript
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.toLocaleString(); // 6/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(24);
	theBigDay.toLocaleString() // 23/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(32);
	theBigDay.toLocaleString() // 31/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(22);
	theBigDay.toLocaleString() // 21/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(22 + 32 +24);
	theBigDay.toLocaleString() // 15/9/1962 23:00:00
```

- con *getters* 
```javascript
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.toLocaleString(); // 6/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 24);  
	theBigDay.toLocaleString(); // 30/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 32);
	theBigDay.toLocaleString(); // 7/8/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 22);
	theBigDay.toLocaleString(); // 28/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 22 + 32 + 24);
	theBigDay.toLocaleString(); // 22/9/1962 23:00:00
```

### Ejercicios

**1 -** ¿Que fecha será dentro de 30 días?
```javascript
	var ahora = new Date();
	console.log("Hoy es " + ahora.toLocaleString());
	ahora.setDate(ahora.getDate() + 30);
	console.log("En 30 días será " + ahora.toLocaleString());
```

**2 -** ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?
```javascript
	var inicio = new Date(2017, 4, 25, 19, 0, 0);
	console.log("Fecha de inicio: " + inicio.toLocaleString());
	var ahora = new Date();
	console.log("Fecha actual: " + ahora.toLocaleString());
	var diferencia = ahora - inicio;
	    
	var segundos = Math.floor( diferencia / 1000);
	var horas = Math.floor( diferencia / ( 60 * 60 * 1000 ) );
	var minutos = Math.floor( diferencia / ( 60 * 1000 ) );
	var dias = Math.floor( diferencia / ( 24 * 60 * 60 * 1000 ) );
	
	console.log("Han pasado " + diferencia +"ms");
	console.log("Han pasado "+ segundos +" segundos.");
	console.log("Han pasado "+ minutos +" minutos.");
	console.info("Han pasado "+ horas +" horas.");
	console.info("Han pasado "+ dias +" días.");
```

**3 -** ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?
```javascript
	var fin = new Date(2017, 6, 18, 22, 0, 0);
	console.log("Fecha de finalización: " + fin.toLocaleString());
	var ahora = new Date();
	console.log("Fecha actual: " + ahora.toLocaleString());
	var diferencia = fin - ahora;
	    
	var segundos = Math.floor( diferencia / 1000);
	var horas = Math.floor( diferencia / ( 60 * 60 * 1000 ) );
	var minutos = Math.floor( diferencia / ( 60 * 1000 ) );
	var dias = Math.floor( diferencia / ( 24 * 60 * 60 * 1000 ) );
	
	console.log("Quedan " + diferencia +"ms");
	console.log("Quedan "+ segundos +" segundos.");
	console.log("Quedan "+ minutos +" minutos.");
	console.info("Quedan "+ horas +" horas.");
	console.info("Quedan "+ dias +" días.");
```

**4 -** ¿Que fecha será dentro de un año y 10 horas más?
```javascript
	var ahora = new Date();
	console.log("Hoy es " + ahora.toLocaleString());
	ahora.setHours(ahora.getHours() + 10);
	ahora.setFullYear(ahora.getFullYear() + 1);
	console.log("En un año y 10 horas será " + ahora.toLocaleString());
```

**5 -** Imprimir por consola la fecha completa (formato texto) en koreano, japones.
```javascript
	var ahora = new Date();
	
	var opciones = { 
	    weekday: 'long',
	    year: 'numeric', 
	    month: 'long', 
	    day: 'numeric'
	};
	
	console.log(ahora.toLocaleString("ko-KO", opciones));
	console.log(ahora.toLocaleString("ja-JA", { 
	    weekday: 'long',
	    year: 'numeric', 
	    month: 'long', 
	    day: 'numeric'
	}));
```



### String

**Propiedades:**
- .length() *Devuelve la longitud*:
```javascript
var cadena = "Fictizia";

console.log("Fictizia tiene " + cadena.length + " caracteres.");

console.log("Una cadena vacia tiene " + ''.length + " caracteres.");
```
  
**Métodos:**

- .fromCharCode() *Devuelve una cadena creada mediante una secuencia [Unicode](https://www.wikiwand.com/es/Unicode)*:
```javascript
	console.info("Es es el año 2016 ("+ String.fromCharCode(8559,8559,8553,8548,8544) + ")");
```


- .anchor() *Crea un ancla HTML*:
```javascript
	document.body.innerHTML = "Contenidos".anchor("contenidos"); 
	// "<a name="contenidos">Contenidos</a>"
```


- .charAt() *Devuelve el carácter específico*:
```javascript
var cadena="Fictizia";
console.log("El carácter(posición) 3 es '" + cadena.charAt(3) + "'")
```


- .charCodeAt() *Devuelve el valor Unicode*:
```javascript
var cadena="Fictizia";
console.log("El carácter(posición) 3 es '" + cadena.charAt(3) + "', en unicode ("+cadena.charCodeAt(3)+")")
```


- .concat() *Combina el texto de dos o más cadenas*:
```javascript
var cadena1 = "Oh ";
var cadena2 = "qué maravillosa ";
var cadena3 = "mañana'.";
var combinacion = cadena1.concat(cadena2,cadena3);
console.log(combinacion); // devuelve "Oh qué maravillosa mañana'."
```


- .indexOf() *Devuelve el índice o -1*:
```javascript
"Mundo Web".indexOf("Web") // 6
"Mundo Web".indexOf("web") // -1
```


- .lastIndexOf() *Devuelve el índice de la última coincidencia o -1*:
```javascript
"Fictizia".lastIndexOf("i"); // 6
"Fictizia".lastIndexOf("f"); // -1
```


- .link() *Crea un enlace*:
```javascript
var textoActivo="Nuestro Curso"
var url="http://www.fictizia.com/formacion/curso_javascript"
document.body.innerHTML = "Haga click para volver a " + textoActivo.link(url);
```


- .slice() *Devuelve una cadena nueva con una sección de otra*:
```javascript
var cadena = "Fictizia";
console.log(cadena.slice(5)); // zia
console.log(cadena.slice(0, 5)); // Ficti
console.log(cadena.slice(3, -1)); // tizi
```


- .split() *Divide una cadena usando un separador*:
```javascript
function dividirCadena(cadenaADividir,separador) {
   var arregloDeCadenas = cadenaADividir.split(separador);
   console.log('<p>La cadena original es: "' + cadenaADividir + '"');
   console.warn('<br>El separador es: "' + separador + '"');
   console.log("<br>El arreglo tiene " + arregloDeCadenas.length + " elementos: ");

   var elementos = "";
   for (var i=0; i < arregloDeCadenas.length; i++) {
      elementos += arregloDeCadenas[i] + " / ";
   }

   console.info(elementos);

}

var cadenaVerso = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500";
var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var espacio = " ";
var coma = ",";

dividirCadena(cadenaVerso, espacio);
dividirCadena(cadenaVerso);
dividirCadena(cadenaMeses, coma);
```


- .substr() *Devuelve los caracteres de una cadena comenzando en la localización especificada, y en el número de caracteres especificado.*:
```javascript
var cadena = "Fictizia";
console.log("(0,5): "    + cadena.substr(0,5)); // Ficti
console.log("(5,3): "    + cadena.substr(5,3)); // zia
```

- .substring() *Devuelve un subconjunto*:
```javascript
var cadena = "Fictizia";
console.log("(0,5): "    + cadena.substring(0,5)); // Ficti
```


- .toLocaleLowerCase() *Devuelve todo en minúsculas con las características locales*:
```javascript
console.log('FICTIZIA'.toLocaleLowerCase()); // 'fictizia'
```

- .toLocaleUpperCase(Devuelve todo en mayúsculascon las características locales) **:
```javascript
console.log('fictizia'.toLocaleUpperCase()); // 'FICTIZIA'
```

- .toLowerCase() *Devuelve todo en minúsculas*:
```javascript
console.log('FICTIZIA'.toLowerCase()); // 'fictizia'
```


- .toUpperCase() *Devuelve todo en mayúsculas*:
```javascript
console.log('fictizia'.toUpperCase()); // 'FICTIZIA'
```

- .trim() *Elimina espacios vacios al principio y final de la cadena*:
```javascript
console.log('  Fictizia '.trim()); // 'Fictizia'
```