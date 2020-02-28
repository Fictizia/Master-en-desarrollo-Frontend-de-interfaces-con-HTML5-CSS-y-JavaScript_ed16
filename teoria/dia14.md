# Clase 14

### Funciones Avanzadas

- Anónimas (expresiones):
    ```javascript
  var sumaCuadrados = function (a, b) {
    return (a*a) + (b*b);
  };
    
    console.log("El .name de sumaCuadrados es "+sumaCuadrados.name)
    ```

- Funciones como dato:
    ```javascript
  function saludo () {
    console.log("hola!");
  };

  function lanzar (funcion){
    funcion();
  };
    ```

- Funciones anónimas autoejecutables:
    ```javascript
  (function() {
    console.log("hola Amigo/a")

  }) (); //ex:Jquery
    ```


- Funciones anónimas con parámetros:
    ```javascript
  ( function(quien){
     console.log("hola " + quien);
  })("Amigo/a");
    ```


- Función que devuelve una función anónima:
  - Asignando una variable:
    ```javascript
    function saludo(quien){
        return function(){
            alert("hola " + quien);
        }
    }

    var saluda = saludo("Amigo/a");
    saluda();
    ```

  - Sin asignar una variable:
    ```javascript
    function saludo(quien){
        return function(){
            alert("hola " + quien);
        }
    }

    saludo("Amigo/a")();
    ```


### Funciones Avanzadas: Anidación

**Con variables**
```javascript
function saludar(quien){
    function alertasaludo(){
            console.log("hola " +  quien);
    }
    return alertasaludo;
}
var saluda = saludar("Amigo/a");
saluda();
```

**Ejecución directa**
```javascript
function saludar(quien){
    function alertasaludo(){
            console.log("hola " +  quien);
    }
    return alertasaludo;
}
saludar("Amigo/a")();
```
    
### Funciones Avanzadas: Recursión

- Calcular el [factorial](https://www.wikiwand.com/es/Factorial).
  
    ```javascript
    function factorial(n){
      return n <= 1 ? 1 : n * factorial(n-1);
    }
    
    factorial(0); // n! = 1
    factorial(1); // n! = 1
    factorial(2); // n! = 2
    factorial(3); // n! = 6 (3*2*1)
    factorial(4); // n! = 24 (4*3*2*1)
    factorial(5); // n! = 120 (5*4*3*2*1)
    factorial(6); // n! = 720 (...)
    // ...
    ```

### Funciones Avanzadas: Closures

> Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado.

> No es aconsejable crear innecesariamente funciones dentro de otras funciones si no se necesitan los closures para una tarea particular ya que afectará negativamente el rendimiento del script tanto en consumo de memoria como en velocidad de procesamiento.
> [Closures MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

- Fábrica de función:
    ```javascript
  function sumador(x) {
    return function(y) {
      return x + y;
    };
  }

  var sum1 = sumador(10); //Closure
  var sum2 = sumador(30); //Closure

  console.log(sum1(2)); // Devuelve 12
  console.log(sum2(2)); // Devuelve 32
  console.log(sumador(20)(2)); //Devuelve 22
    ```

- Otro ejemplo, ahora temporizado:
    ```javascript
  function saludar(segundos){
    var hola = "Hola, Hola!";

    setTimeout(function(){
      console.info(hola);
    },segundos*1000);
  }

  saludar(2);
    ```

- Otro ejemplo... más útil:
    ```javascript
      var varGlobal = "Soy un dato Global";
      var burbuja;

      function nivel1() {
        var varInterna = "Soy un dato interno. -> nivel1";

        function nivel2() {
          console.log("Estoy dentro de la funcion -> nivel2")
          console.log("Estoy dentro de la funcion -> nivel2 y puedo acceder al nivel1: "+varInterna)
        }

        burbuja = nivel2;

      }

      nivel1();

      burbuja();
      console.log("Burbuja recuerda su contexto original")
    ```

### Funciones Avanzadas: Callbacks

> En programación de computadoras, una devolución de llamada o retrollamada (en inglés: callback) es una función "A" que se usa como argumento de otra función "B". Cuando se llama a "B", ésta ejecuta "A". Para conseguirlo, usualmente lo que se pasa a "B" es el puntero a "A".
> [Callbacks en Wikiwand](https://www.wikiwand.com/es/Callback_(inform%C3%A1tica))

- Ejemplo condensado:
    ```javascript
  var quieroCallback = function(parametro, callback){
      if ((callback) && (typeof callback === 'function')){
          callback(parametro);
      }
      else
          console.log(parametro, callback);
  }
   
  quieroCallback('a', 'b');
   
  quieroCallback('a', function(val){
      console.log(val);
  });
    ```


- Ejemplo con Jquery:
    ```javascript
    $('#elemento').fadeIn('slow', function() {
      // código del callback
  });
    ```


- Otro ejemplo:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      callback();
  }

  comerSandwich('jamón', 'queso', function() {
      console.info('Ya terminé...');
  });
    ```


- Ejemplo con Callback opcional:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      
      if (callback) {
          callback();
      }

  }

  comerSandwich('jamón', 'queso');
    ```


- Sanitizar el Callback:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
      
      if (callback && typeof(callback) === "function") {
          callback();
      }

  }

  comerSandwich('jamón', 'queso');
    ```


### Funciones Avanzadas: Asincronia
```javascript
	    function comerSandwich(elemento1, elemento2, callback) {
	      console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    
	    setTimeout(alarma, 5000);
	    function alarma(){
	      console.log("ring! ring!.. pasaron los 5 segundos!");
	    };
	
	    
	      if (callback && typeof(callback) === "function") {
	          callback();
	      }
	  }
	
	  comerSandwich('jamón', 'queso', function() { 
	      console.log('Ya terminé...');
	  });
```


- Más información: 
  - [Callback Functions in JavaScript de Louis Lazaris](http://www.impressivewebs.com/callback-functions-javascript/)
  - [Creando y utilizando callbacks de Pablo Novas en fernetjs](https://fernetjs.com/2011/12/creando-y-utilizando-callbacks/)


### Funciones Avanzadas: Funciones anónimas autoejecutadas

- **Sintaxis:**
```javascript
    (function(){
      console.log('Hola Mundo!');
    })();
```

- **Incluyendo referencias y manipulando otros elementos:**
```javascript
    var myApp = myApp || {};
    
    (function(w, doc, ns){
      
      ns.accesoWindow = function(){
        return w === window;
      };
      ns.accesoDocument = function(){
        return doc === document;
      };
      ns.confirmacion = function(){
        console.log('Hola Mundo! Mis caracteristicas son: \n Acceso a Window: '+this.accesoWindow()+'\n Acceso a Document: '+this.accesoDocument());
      }
    })(window, document, myApp);

    
    // myApp.confirmacion()
```

### Ejercicios

#### Trenes

**1 -** Hagamos una lista de pasajeros efectiva usando Arrays e imprimamos cada pasajero de la lista y su número de asiento (basado en el orden del índice).
*Nota: El primer asiento del tren es el 1 y no el 0.*

```javascript
    var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

    function listaPasajeros(){
    	pasajeros.forEach(function(pasajero, posicion){
            console.log("El pasajero "+pasajero+" tiene reservado el asiento "+(posicion+1));
    	})
    };
```

- Respuesta esperada (consola):
```
	El pasajero Alicia Gutierrez tiene reservado el asiento 1
	El pasajero Alfonso Gomez tiene reservado el asiento 2
	El pasajero Luis Navarro tiene reservado el asiento 3
	El pasajero Oscar Garcia tiene reservado el asiento 4
	El pasajero Andres Fernandez tiene reservado el asiento 5
	El pasajero Lucia Mellado tiene reservado el asiento 6
```


**2 -** Necesitamos una función para agregar y otra para borrar pasajeros de la lista.
*Nota: Pensemos que a la larga pueden existir más listas.*

```javascript
    var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	function agregarPasajero(nombre, lista) {
		lista.push(nombre);
	};

	function quitarPasajero(nombre, lista) {
		if (lista.length == 0) {
			console.log("La lista \""+lista+"\" esta vacía.");
		} else {
			var posicion = lista.indexOf(nombre);
			
			if(posicion !== -1){
				console.log("El pasajero \""+lista[posicion]+"\" será eliminado!")
				lista.splice(posicion, 1);
			} else {
				console.log("El pasajero \""+nombre+"\" no encontrado!")
			}
		};
	};
```


**3 -** La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula un o varios billetes.
*Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.*

```javascript
    var pasajeros = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	function agregarPasajero(nombre, lista) {
		var vacante = lista.indexOf(undefined);
		vacante === -1 ? lista.push(nombre) : lista[vacante] = nombre;
	};

	function quitarPasajero(nombre, lista) {
		if (lista.length == 0) {
			console.log("La lista \""+lista+"\" esta vacía.");
		} else {
			var posicion = lista.indexOf(nombre);
			
			if(posicion !== -1){
				console.log("El pasajero \""+lista[posicion]+"\" será eliminado!")
				lista[posicion] = undefined;
			} else {
				console.log("El pasajero \""+nombre+"\" no encontrado!")
			}
		};
	};
```


**4 -** Una de las vías principales esta en obras. Así que nuestra compañía decidió usar antiguas vías para hacer transbordos directos entre las estaciones afectadas.

Nuestra Misión es añadir el tiempo estimado en los billetes para las estaciones afectadas Tetuán,
Moncloa y Hortaleza. Es necesario incluir un texto informativo y el nombre del usuario también en el billete.

*Nota: Intenta utilizar Closures*

Info: 	
	- Tetuán (12)
   	- Moncloa (19)
   	- Hortaleza (21)

```javascript
	var nuevasRutas = [ ["Tetuán", 12], ["Moncloa", 19], ["Hortaleza", 21] ];

	function constructorDeTickets (estacion, tiempo) {
		return function (nombre) {
			console.log("Sr/a. "+nombre+".\n Muchas gracias por adquirir este ticket gratuito en el "+estacion+" express.\n El tiempo estimado de llegada es de "+tiempo+" minutos.\n Estamos trabajando en la mejora de nuestra vía principal, disculpe las molestias!");
		};
	}

	var tetuanExpress = constructorDeTickets ("Tetuán", 12);
	var moncloaExpress = constructorDeTickets (nuevasRutas[1][0], nuevasRutas[1][1]);
	var hortalezaExpress = constructorDeTickets (nuevasRutas[2][0], nuevasRutas[2][1]);

	tetuanExpress ("Pepe");
	moncloaExpress ("Luis");
	hortalezaExpress ("Hector");
```

### Callbacks

> Los callbacks son la pieza clave para que Javascript pueda funcionar de forma asíncrona. De hecho, el resto de patrones asíncronos en Javascript está basado en callbacks de un modo u otro, simplemente añaden azúcar sintáctico para trabajar con ellos más cómodamente.
> [Callbacks en Wikiwand](https://www.wikiwand.com/es/Callback_(inform%C3%A1tica))

Fíjate en el siguiente ejemplo sencillo utilizando un callback:


```javascript
    setTimeout(function(){
        console.log("Hola Mundo con retraso!");
    }, 1000)
```

Si lo prefieres, el callback puede ser asignado a una variable con nombre en lugar de ser anónimo:

```javascript
    const myCallback = () => console.log("Hola Mundo con retraso!");
    setTimeout(myCallback, 1000);
```

### setTimeOut 

setTimeout es una función asíncrona que programa la ejecución de un callback una vez ha transcurrido, como mínimo, una determinada cantidad de tiempo (1 segundo en el ejemplo anterior). A tal fin, dispara un timer en un contexto externo y registra el callback para ser ejecutado una vez que el timer termine. En resumen, retrasa una ejecución, como mínimo, la cantidad especificada de tiempo.

Es importante comprender que, incluso si configuramos el retraso como 0ms, no significa que el callback vaya a ejecutarse inmediatamente. Atento al siguiente ejemplo:

```javascript
    setTimeout(function(){
        console.log("Esto debería aparecer primero");
    }, 0);
    
    console.log("Sorpresa!");

    // Sorpresa!
    // Esto debería aparecer primero
```

Recuerda, un callback que se añade al loop de eventos debe esperar su turno. En nuestro ejemplo, el callback del setTimeout debe esperar el primer tick. Sin embargo, la pila esta ocupada procesando la línea console.log("Sorpresa!"). El callback se despachará una vez la pila quede vacía, en la práctica, cuando Sorpresa! haya sido logueado.

### Callback Hell

Los callbacks también pueden lanzar a su vez llamadas asíncronas, asi que pueden anidarse tanto como se desee. Inconveniente, podemos acabar con código como este:

```javascript
  setTimeout(function(){
    console.log("Etapa 1 completada");
    setTimeout(function(){
      console.log("Etapa 2 completada");
      setTimeout(function(){
        console.log("Etapa 3 completada");
        setTimeout(function(){
          console.log("Etapa 4 completada");
          // Podríamos continuar hasta el infinito...
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
```


Éste es uno de los inconvenientes clásicos de los callbacks, además de la indentación, resta legibilidad, dificulta su mantenimiento y añade complejidad ciclomática. Al Callback Hell también se le conoce como Pyramid of Doom o Hadouken.

### Promesas

una promesa es un objeto al que le adjuntamos callbacks, en lugar de pasarlos directamente a la función asíncrona. La forma en que registramos esos dos callbacks es mediante el método .then(resolveCallback, rejectCallback). En terminología de promesas, decimos que una promesa se resuelve con éxito (resolved) o se rechaza con fallo (rejected). Echa un vistazo al siguiente ejemplo:

```javascript
    const currentURL = document.URL.toString();
    const promise = fetch(currentURL);
    promise.then(result => console.log(result),
    e => console.log(`Error capturado:  ${e}`));
```


Es más legible si lo expresamos de la siguiente manera:

```javascript
    fetch(document.URL.toString())
    .then(result => console.log(result),
        e => console.log(`Error capturado:  ${e}`));
```

Una característica interesante de las promesas es que pueden ser encadenadas. Esto es posible gracias a que la llamada .then() también devuelve una promesa. Esta nueva promesa devuelta será resuelta con el valor que retorne el callback de resolución original (el que hemos pasado al primer then()):

```javascript
fetch(document.URL.toString())
  .then(result => {
    console.log(result);
    return "Primer Then";
  },
    e => console.log(`Error capturado:  ${e}`))
  .then(result => console.log(`Segundo Then despues de ${result}: La página ya ha debido ser mostrada`),
    e => console.log(`Error capturado:  ${e}`));
```


Para evitar verbosidad, podemos encadenar las promesas de un modo mas corto, empleando el método .catch(rejectCallback) para catpurar cualquier rechazo que ocurra en cualesquiera de las promesas encadenadas. catch(rejectCallback) es equivalente a .then(null, rejectCallback). Solo se necesita una única sentencia catch() al final de una cadena de promesas:

```javascript
    fetch(document.URL.toString())
    .then(result => console.log(result))
    .then(() => console.log(`Fetch completado, página mostrada`))
    .catch(e => console.log(`Error capturado:  ${e}`));
```

Ejemplo petición fetch:

```javascript
    fetch("URL")
        .then( response => response.json() )
            .then( result => console.log(result) )
```


## Composición de Promesas

Es muy frecuente consumir más de una promesa a la vez y habitualmente es deseable que se ejecuten en paralelo. Es decir, lanzamos varias tareas asíncronas al mismo tiempo y recogemos sus correspondientes promesas a la espera de que una, o todas, se resuelvan. Para estos casos contamos con dos herramientas de composición de gran utilidad: Promise.all() y Promise.race().

### Promise.all()

Promise.all() acepta un array de promesas y devuelve una nueva promesa cuya resolución se completará con éxito una vez que todas las promesas originales se hayan resuelto satisfactoriamente, o en caso de fallo, será rechazada en cuanto una de las promesas originales sea rechazada. Esta promesa compuesta, además, nos devolverá un array con los resultados de cada una de las promesas originales. Veamos un sencillo ejemplo:

```javascript
    const p1 = fetch("URL1_Aqui");
    const p2 = fetch("URL2_Aqui");
    const p3 = fetch("URL3_Aqui");

    Promise.all([p1, p2, p3])
    .then(resultArray => console.log(resultArray))
    .catch(e => console.log(`Error capturado:  ${e}`));
```

### Promise.race()

El mecanismo de Promise.race() es similar con la diferencia de un pequeño matiz. La promesa compuesta que devuelve .race() será resuelta tan pronto como se resuelva alguna de las promesas originales, ya sea con éxito o fallo. De ahí el nombre del método, es una competición, la primera en terminar gana. Puedes comprobar tu mismo con el ejemplo anterior cual de las 3 URLs tarda menos en cargar:

```javascript
    Promise.race([p1, p2, p3])
        .then(winnerResult => console.log(winnerResult))
        .catch(e => console.log(`Error capturado:  ${e}`));
```

### Creando Promesas

Una promesa se crea instanciando un nuevo objeto Promise. En el momento de la creación, en el constructor, debemos especificar un callback que contenga la carga de la promesa, aquello que la promesa debe hacer. Este callback nos provee de dos argumentos: resolveCallback y rejectCallback. Te suenan, ¿verdad? Son los dos mismos callbacks registrados al consumir la promesa. De este modo, depende de ti como desarrollador llamar a resolveCallback y rejectCallback cuando sea necesario para señalizar que la promesa ha sido completada con éxito o con fallo.

Una plantilla típica para la creación de promesas es la siguiente:

```javascript
    const myAsyncFunction = () => {
        return new Promise((resolve, reject) => {

            // Carga de la promesa (normalmente tareas asíncronas).

            if ( /* evalúa condición */ ) {
            resolve(`Éxito!`);
            } else {
            reject(`Fallo!`);
            }
        });
    }
```

Un ejemplo sencillo podría ser:

```javascript
    const checkServer = (url) => {
        return new Promise((resolve, reject) => { 
            fetch(url)
            .then(response => resolve(`Estado del Servidor: ${response.status === 200 ? "OK" : "NOT OK"}`))
            .catch(() => reject(`Error al localizar URL`));
        });
    }

    checkServer(document.URL.toString())
    .then(result => console.log(result))
    .catch(e => console.log(e));
```

Las promesas son muy útiles para envolver antiguas APIs asíncronas que funcionan a través de callbacks puros. De esta forma podemos hacerlas funcionar via promesas:

```javascript
    const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));

    delay(3000)
        .then(() => console.log(`Este es un retardo de al menos 3 segundos`))
        .catch(() => console.log(`Retardo fallido`));
```


## Async / Await

La etiqueta async declara una función como asíncrona e indica que una promesa será automáticamente devuelta. Podemos declarar como async tanto funciones con nombre, anónimas, o funciones flecha. Por otro lado, await debe ser usado siempre dentro de una función declarada como async y esperará automáticamente (de forma asíncrona y no bloqueante) a que una promesa se resuelva.

Mucho mejor si vemos un ejemplo:

```javascript
    const checkServerWithSugar = async (url) => {
        const response = await fetch(url);
        return `Estado del Servidor: ${response.status === 200 ? "OK" : "NOT OK"}`;
    }

    checkServerWithSugar(document.URL.toString())
        .then(result => console.log(result));
```

### Manejo de Errores

Si una promesa gestionada por await es rechazada o un error se dispara dentro de la función declarada como async, la promesa que automáticamente devuelve la función async también será rechazada. En este caso, podemos encadenar un .catch() para notificar el error:

```javascript
    checkServerWithSugar(document.URL.toString())
        .then(result => console.log(result))
        .catch(e => console.log(`Error Capturado Fuera de la función async: ${e}`));
```   

Pero si necesitáramos gestionar estos erroes internamente, en la propia función async, deberemos envolver nuestro código con un try / catch del siguiente modo:

```javascript
    const checkServerWithSugar = async (url) => {
        try {
            const response = await fetch(url);
            return `Estado del servidor: ${response.status === 200 ? "OK" : "NOT OK"}`;
        } catch (e) {
            throw `Manejo intero del error. Error original: ${e}`;
        }
    }

    checkServerWithSugar(document.URL.toString())
        .then(result => console.log(result))
        .catch(e => console.log(`Error Capturado Fuera de la función async: ${e}`));
```

### Multiples awaits

Mira el siguiente ejemplo:

```javascript
    async function wait() {
        await delay(500);
        await delay(500);
        return "Ha transcurrido, como mínimo, 1 segundo.";
    };
```   

Solo cuando el primer delay() haya sido resuelto, se llamará al segundo delay(). Apilar varios await implica una espera síncrona entre ellos. Sin embargo, podemos hacer una espera en paralelo del siguiente modo:

```javascript
    async function wait() {
        const d1 = delay(500);
        const d2 = delay(500);
        await d1;
        await d2;
        return "Ha transcurrido, como mínimo, 500ms.";
    };
```    
Es una solución mucho más interesante ya que ambas llamadas a delay() serán lanzadas, y una vez iniciadas nos quedamos a la espera de su resolución. De este modo, permitimos que las llamadas asíncronas a delay() sucedan de forma concurrente y progresen a la vez.

¿Recuerdas cuando dijimos que async / await era puro azúcar sintáctico sobre promesas? Fíjate en esta equivalencia al ejemplo anterior:

```javascript
    async function wait() {
        const d1 = delay(500);
        const d2 = delay(500);
        await Promise.all([d1, d2]);
        return "Ha transcurrido, como mínimo, 500ms.";
    };
```