# Clase 4

### Interacción Básica con el Usuario

- alert():
    ```javascript
    alert("¡Bienvenido a esta web!");
    ```

- confirm():
    ```javascript
    confirm("¿Esta seguro que desea abandonar esta web?");
    ```


- Ejemplo:
    ```javascript
    var respuesta = confirm("presiona un botón!");
    if (respuesta === true) {
        console.log("Has aceptado!");
    } else {
        console.log("Has cancelado");
    }
    ```

- prompt():
    ```javascript
    prompt("¿Como te llamas?");
    ```

- Registremos los datos en una variable:
    ```javascript
    var nombre = prompt("¿Como te llamas?");
    ```

### Ejercicios

**1 -** Vamos a solicitar la colaboración del usuario para lograr nuestros objetivos:
- Objetivos:
	-  Captura el nombre del usuario usando prompt
	-  Pregunta al usuario si desea *"comprobar lo rápido que funciona su navegador"*.
	-  En caso afirmativo imprimiremos el nombre del usuario por consola aplicandole estilos y calculando el tiempo que tarda en realizar la operación
    - En caso negativo mostraremos un *alert* informativo.

- Versión 1:
```javascript
	var usuario = prompt("¿Quien eres?");

	var respuesta = confirm("Bienvenido "+usuario+", ¿Deseas ver lo rápido que funciona tu navegador?");
	if (respuesta === true) {
	
	    // console.log
	    console.group("grupo console.log");
	    console.time("tiempo grupo console.log");
	    console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.log");
	    console.groupEnd();
	
	    // console.info
	    console.group("grupo console.info");
	    console.time("tiempo grupo console.info");
	    console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.info");
	    console.groupEnd();
	
	    // console.warn
	    console.group("grupo console.warn");
	    console.time("tiempo grupo console.warn");
	    console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,usuario);
	    console.timeEnd("tiempo grupo console.warn");
	    console.groupEnd();
	
	} else {
	    alert(usuario+" no desea saberlo");
	}
```

- Versión 2:
```javascript
	var usuario = prompt("¿Quien eres?");

	while(!usuario){
		usuario = prompt("¿Quien eres?")
	}

	var respuesta = confirm("Bienvenido "+usuario+", ¿Deseas ver lo rápido que funciona tu navegador?");
	if (respuesta) {
	
	    // console.log
	    console.group("grupo console.log");
	    console.time("tiempo grupo console.log");
	    console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.log");
	    console.groupEnd();
	
	    // console.info
	    console.group("grupo console.info");
	    console.time("tiempo grupo console.info");
	    console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.info");
	    console.groupEnd();
	
	    // console.warn
	    console.group("grupo console.warn");
	    console.time("tiempo grupo console.warn");
	    console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,usuario);
	    console.timeEnd("tiempo grupo console.warn");
	    console.groupEnd();
	
	} else {
	    alert(usuario+" no desea saberlo");
	}
```



### Modo Estricto
> El modo estricto hace varios cambios en la semántica normal de JavaScript. Primero, modo estricto elimina algunos errores silenciosos de JavaScript cambiando a que lance los errores. Segundo, modo estricto corrige errores que hacen que sea difícil para los motores de JavaScript para realizar optimizaciones: código de modo estricto a veces se puede hacer para correr más rápido que el código idéntico que no es estricto. Tercero, el modo estricto prohíbe sintaxis que es probable que sea definida en futuras versiones de ECMAScript.
> - [Mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto)

- [Compatibilidad](http://caniuse.com/#feat=use-strict)

En resumen:
- Detectaremos más errores
- Mejora la interpretación, lo que aumenta la velocidad de ejecucción.
- Previene que usemos sintaxis de futuras versiones de ECMAScript.

Aplicándolo a todo nuestro código

```javascript
// ./script.js
(function() {
  "use strict";

  // Nuestro código

})();
```

Aplicándolo solo en parte del código
```javascript
// ./script.js
function estricta(){
  'use strict';
  function anidada() {
      return "Yo también!";
  }
  return "Hola! Soy una función en modo estricto!  " + anidada();
}

function noEstricta() {
    return "yo no soy una función estricta.";
}
```

Algunos ejemplos:

- Error: Usar variables u objetos sin declararlos antes.

```javascript
    function estricto(){
        'use strict';
        pi = 3.14;
        console.log(pi);
    }
```

- Error: Borrar variables, objetos o funciones. 

```javascript
    function estricto(){
        'use strict';
        pi = 3.14;
        delete pi
    }
```

- Error: Duplicar parámetros

```javascript
    function estricto(){
        'use strict';
        function x (p1, p1){
            // código
        }
    }
```

- Error: Al usar carácteres escapados
 
```javascript
    function estricto(){
        'use strict';
        var x = \010; 
    }
```

Error: Al usar *writable:false*

```javascript
    function estricto(){
        'use strict';
        var obj = {};
        Object.defineProperty(obj, "x", {value:0, writable:false});
        obj.x = 3.14;
    }
```

Error: Al usar *with* 

```javascript
    function estricto(){
        'use strict';
        with(document.getElementById('elemento').style) {
            backgroundColor = 'black';
            color = 'red';
            font_Size = '32px'; // Crea una variable global
        }
    }
```

Error: Al usar *eval()* por seguridad

```javascript
    function estricto(){
        'use strict';
        eval ("var x = 2");
        console.log(x);
    }
```



Otras palabras reservadas en modo estricto:
- implements
- interface
- let
- package
- private
- protected
- public
- static
- yield


### Ejercicios

**1 -** Diseña un algoritmo que lea dos números y realice los siguientes cálculos:
- Valor de su suma
- Valor de su resta
- Valor de su division
- Valor de su producto

```javascript
	function calculosVarios(valor1, valor2){
		console.info("El valor de la suma es:", valor1+valor2);
		console.info("El valor de la resta es:",valor1-valor2);
		console.info("El valor de la división es:", valor1/valor2);
		console.info("El valor de la división es:", valor1*valor2)
	};
	
	calculosVarios(5,5);
```

**2 -** Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
	- Calcular porcentajes (segmento*100)/total

```javascript
	function porcentajeAlumnos(totalHombres, totalMujeres){
		var totalAlumnos = totalHombres + totalMujeres;
		var porcentajeMujeres = (totalMujeres*100)/totalAlumnos;
		var porcentajeHombres = (totalHombres*100)/totalAlumnos;
		
		console.info("El total de alumnos es:", totalAlumnos)
		
		console.log("El total de mujeres es:", totalMujeres);
		console.info("El % de mujeres es:", porcentajeMujeres);
		
		console.log("El total de hombres es:", totalHombres);
		console.info("El % de hombres es:", porcentajeHombres);
	};
	
	porcentajeAlumnos(6,2);
```


### Comparadores básicos

```javascript
var mayorQue = 100 > 10;
var menorQue = 10 < 100;
var mayorIgual = 100 >= 10;
var menorIgual = 10 <= 100;
var igual = 10 == 10;
var igualTotalmente = 10 === 10;
var noIgual = 100 != 10;

function comparar (dato) {
    console.log(dato);
};
```


### Comparadores complejos
- **AND(&&)**
```javascript
    var comparacion;
    comparacion = true && true; // true
    comparacion = true && false // false
    comparacion = false && false // false
    comparacion = false && true // false
```

- **OR(||)**
```javascript
    var comparacion;
    comparacion = true || true; // true
    comparacion = true || false // true
    comparacion = false || false // false
    comparacion = false || true // true
```

- Ejemplos:
```javascript
var ex1 = true && true; // true
var ex2 = (2 == 2) && (3 >= 6); // false
var ex3 = (2>3) || (17 <= 40); // true
var ex4 = false || false; // false

function condicionalAvanzado ( paraComparar ) {
    if (paraComparar) {
        console.log("Verdadero!");
    } else {
        console.log("falso!");
    };
};
```

### Otros datos

- Valor *real* es *true*:
```javascript
console.log("valor boleano de \"Fictizia\":", Boolean("Fictizia")  );
console.log("valor boleano de 1235:", Boolean(1235));
console.log("valor boleano de -1235:", Boolean(-1235));
console.log("valor boleano de un objeto:", Boolean({saludo: "hola"}));
console.log("valor boleano de un array:", Boolean(["platano", -1, false]));
console.log("valor boleano de un array:", Boolean(function(){}));
```

- Sin valor *real* es *false*:
```javascript
console.log("valor boleano de \"\":", Boolean("")  );
console.log("valor boleano de 0:", Boolean(0));
console.log("valor boleano de -0:", Boolean(-0));
console.log("valor boleano de null:", Boolean(null));
console.log("valor boleano de undefined:", Boolean(undefined));
console.log("valor boleano de NaN:", Boolean(NaN));
```