# Clase 8

### Arrays

- Creando un array:
    ```javascript
	var arreglo = [];
	arreglo = [1, "platano", "piscina", "manzana", true];
    ```

- Usando el Índice:
    ```javascript
	arreglo[1];
    ```

- Cambiar un valor del Índice:
    ```javascript
	arreglo[0] = "fresa";
	arreglo[4] = "pera";
	arreglo[2] = "limón";
    ```

- delete *sobrescribe a undefined*
    ```javascript
    delete arreglo[0];
    ```

- Elementos vacios:
    ```javascript
    arreglo[0] = undefined;
    ```

**Propiedades**

- Índice total:
    ```javascript
    	arreglo.length;
    ```

- Usando el Índice total en un bucle:
    ```javascript
	var numeros = [1, 2, 3, 4, 5];
	for (var i = 0; i < numeros.length; i++) {
	  numeros[i] *= 10;
	}
    ```

**Métodos**

- .push() *Añadir elemento al índice*:
    ```javascript
	arreglo.push("nuevo");
    ```

- .pop() *Eliminar el último elemento del índice*:
    ```javascript
    	arreglo.pop();
    ```

- .shift() *Eliminar el primer elemento*:
    ```javascript
    	arreglo.shift();
    ```

- .splice() *Borrar*:
    ```javascript
    	var manzana = arreglo.splice(3, 1);
    ```

- .map():
    ```javascript
	var arreglo = ["plátano", "fresa", "lima", "manzana"];
	var resultado = arreglo.map(function (elemento){return elemento + " modificado!"});
	console.log(resultado);
    ```
    
- .isArray():
    ```javascript
    	var arreglo = [1,2,3]
    	
    	// true
    	Array.isArray([1]);
    	Array.isArray(arreglo);
    	
    	// false
    	Array.isArray();
	Array.isArray({});
	Array.isArray(null);
	Array.isArray(undefined);
    ```

- .concat() *Retorna un nuevo Array con los Arrays especificados concatenados*:
   - Dos Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    
    	var nuevaArray = arreglo.concat(arreglo2);

	console.log(nuevaArray); 
    ```
   - Múltiples Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    	var otroArreglo = ['abc', 1, false]
    
    	var nuevaArray = arreglo.concat(arreglo2, [5.25, 100], otroArreglo);

	console.log(nuevaArray);
    ```

- .every() *verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada:*
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].every(tamañoValido);   // false
	[12, 54, 18, 130, 44].every(tamañoValido); // true    
    ```

- .filter() *Crea un nuevo array con aquellos elementos que cumplan la condición*:
    ```javascript
	function tamañoValido(elemento) {
	  return elemento >= 10;
	}
	var filtrados = [true, 134, 10, 0, null, "Hola"].filter(tamañoValido);
    ```

- .forEach() *Se ejecuta la función por cada elemnto del array*:
    ```javascript
	function logger(element, index, array) {
	    console.log("array[" + index + "] = " + element);
	}
	[2, 5, 9].forEach(logger);
    ```

- .indexOf() *Devuelve la posición donde se escuentra el elemnto o -1 si no lo encuentra*:
    ```javascript
	var array = [2, 5, 9];
	var index = array.indexOf(9); // 2
	var index = array.indexOf(12); // -1
    ```

- .join() *Une todos los elementos en una cadena*:
    ```javascript
	var array = ['dato1', 2, , 'masDatos'];
	var datosJuntos = array.join();      // 'dato1,2,masDatos'
	var datosJuntos2 = array.join('');    // 'dato12masDatos'
	var datosJuntos3 = array.join(' + '); // 'dato1 + 2 + masDatos'
    ```

- .lastIdexOf() *Devuelve la posición del último elemento que coincide o -1 si no lo encuentra*:
    ```javascript
	var array = [7, 1, 3, 7];
	array.lastIndexOf(7); // 3
	array.lastIndexOf(2); // -1
    ```

- .reduce() *Aplica una función a un acumulador y a cada valor de un vector para reducirlo a un único valor*:
    ```javascript
	var reduce = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indice, vector){
	  return valorAnterior + valorActual;
	});
	console.log(reduce); // 10
    ```

- .reduceRight() *Aplica una función a un acumulador y a cada valor (de izq. a dcha.) de un vector para reducirlo a un único valor*:
    ```javascript
  	var reduceRight = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indice, vector){
	  return valorAnterior + valorActual;
	});
	console.log(reduceRight); // 10
    ```

- .reverse() *Invierte el orden de un Array*:
    ```javascript
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.reverse(); 
	console.log(miArray) // ["más datos...", true, 2, "uno"]
    ```

- .slice() *Devuelve un nuevo Array con un segmento determinado del Array original*:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	var citricos = frutas.slice(1, 3);
	console.info(citricos);
    ```

- .some() *Verifica si alguno de los elementos en el arreglo pasan la prueba implementada por la función dada:*:
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].some(tamañoValido);   // true
	[12, 54, 18, 130, 44].some(tamañoValido); // true
    ```

- .sort() **:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	frutas.sort(); // ["Limón", "Mango", "Manzana", "Naranja", "Platano"]
	
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.sort(); // [2, "más datos...", true, "uno"]
    ```

- .toLocalString() *Retorna como string (configuración regional) todos los elementos*:
    ```javascript
	var numero = 1337.89;
	var fecha = new Date();
	var miArray = [numero, fecha, 'más datos'];
	
	var arrayConvertida = miArray.toLocaleString(); 
	console.log(arrayConvertida);     
    ```

- .toString() *Retorna una cadena de texto con todos los nombres*:
    ```javascript
	var amigos = ['Luis', 'Carlos', 'Marco', 'Eduardo'];
	console.log(amigos.toString());
    ```

- .unShift() *Añade nuevos elementos al principio del array y devuelve la longitud actualizada*:
    ```javascript
	var miArray = [1, 2];
	
	miArray.unshift(true, "otros datos...");
	console.log(miArray);
    ```

### Ejercicios

**1 -** Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

```javascript
	function cuantasVeces (letra, texto) {
		
		var totalVeces = 0;
		var seleccionTexto = texto.split("");
		
		for (var i = 0; i <= seleccionTexto.length; i++) {
			
			if (seleccionTexto[i] === letra){
				totalVeces++
			};
			
		};
		
		return {
			letra: letra, 
			totalVeces: totalVeces, 
			texto: texto
		}
	}

var nombreVar = cuantasVeces ("h", "hola");


if(nombreVar.totalVeces > 0){
	console.log("Tenemos resultados....")
}

console.log("Se repite "+nombreVar.letra+" "+nombreVar.totalVeces+" veces... en "+nombreVar.texto)
```

**2 -** Junta estos tres Arrays *["Oscar", ...], [9897667, ...], [false, ...]* de tal forma que construyan un único Array anidado *[["Oscar", 9897667, false], [etc...]]* 

- Opcional: Ordena los números pares e impares en sus respectivos arrays

```javascript
	var arreglo1 = ["Oscar", "Pedro", "Marco", "Juana"],
		arreglo2 = [9897667, 81721623, 91823871, 71236123],
		arreglo3 = [false, true, true, false];
	
	var anidacion = [];
	
	for (var i = 0; i <= arreglo1.length; i++){
		var resumen = [arreglo1[i], arreglo2[i], arreglo3[i]];
		anidacion.push(resumen);
	}
	
	console.log("El resultado es %O", anidacion);
```

- Variante (Diferentes longitudes)
```javascript
	var arreglo1 = ["Oscar", "Pedro", "Marco", "Juana", true, 4, 12, 12],
	    arreglo2 = [9897667, 81721623, 91823871, 71236123],
	    arreglo3 = [false, true, true, false];
	
	// Saber valor Máximo
	var maximo = Math.max(arreglo1.length, arreglo2.length, arreglo3.length);
	
	// Nivelar - Fase 1:
	arreglo1[maximo] = "";
	arreglo2[maximo] = "";
	arreglo3[maximo] = "";
	
	// Fix
	arreglo1.pop();
	arreglo2.pop();
	arreglo3.pop();
	
	
	var anidacion = [];
	
	for (var i = 0; i < arreglo1.length; i++){
	    anidacion.push([arreglo1[i], arreglo2[i], arreglo3[i]]);
	}
	
	console.log("El resultado es %O", anidacion); 
```

**3 -** Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.

- Opcional: Ordena los números pares e impares en sus respectivos arrays

```javascript
	var arrayPares = [], arrayImpares = [];
	
	for (var i = 0; i<100; i++){
		var random = Math.floor((Math.random() * 6) + 1)
		if(random % 2 !== 0){
			arrayImpares.push(random);
		} else {
			arrayPares.push(random);
		}
	}
	
	// Opcional
	arrayPares = arrayPares.sort();
	arrayImpares = arrayImpares.sort();
```


**4 -** Vamos a gestionar la lista de asistentes de un evento. 

- Características:
	- Cada asistente recibirá el identificador de su posición en el Array.
	- El identificador no puede cambiar una vez reservado el asiento.
	- Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
	- Los nuevos asistentes seran asigandos primero a asientos desocupados. 

- Opcional:
	- Verifica antes de asignar un asistente que no se registro previamente. 
```javascript
	var lista = [];
	
	function asignar(nombre) {
	    var registrado = false;
	    var vacante = false;
	
	    for (var i = 0; i < lista.length; i++) {
	        if (lista[i] === undefined) {
	            vacante = i;
	        }
	        if (lista[i] === nombre) {
	            registrado = i;
	        }
	    }
	
	    if (registrado || registrado === 0) {
	        console.warn("Ya estabas registrado!");
	        console.info("Eres el asistente número", registrado);
	    } else {
	        if (vacante || vacante === 0) {
	            lista[vacante] = nombre;
	            console.info("Eres el asistente número", vacante);
	            console.info("Felicidades! has ocupado un asiento que estaba vacio.");
	        } else {
	            lista.push(nombre);
	            console.info("Eres el asistente número", lista.length - 1);
	            console.info("No quedan asientos vacios antes que el tuyo.");
	        }
	    }
	
	}
	
	function quitar(nombre) {
	    var registrado = false;
	
	    for (var i = 0; i < lista.length; i++) {
	        if (lista[i] === nombre) {
	            registrado = i;
	        }
	    }
	
	    if (registrado || registrado === 0) {
	        lista[registrado] = undefined;
	        console.info("El asistente " + nombre + " ha sido eliminado.");
	        console.info("El asiento " + registrado + " esta vacio.");
	    } else {
	        console.warn("El asistente " + nombre + "... no existe!");
	    }
	}
	
	// Test:
	asignar("Fran");
	/*
	Eres el asistente número 0
	No quedan asientos vacios antes que el tuyo.
	*/
	asignar("Yo mismo");
	/*
	Eres el asistente número 1
	No quedan asientos vacios antes que el tuyo.
	*/
	quitar("fran"); // El asistente fran... no existe!
	quitar("Fran");
	/*
	El asistente Fran ha sido eliminado.
	El asiento 0 esta vacio.
	*/
	asignar("Carlos"); // Eres el asistente número 0
	asignar("Carlos");
	/*
	Ya estabas registrado!
	Eres el asistente número 0
	*/
```

**Arreglos avanzados**
```javascript
var arreglo1 = ["plátano", "fresa", "lima", "manzana"];
var arreglo2 = ["entrante", "primero", "segundo", "postre"];

var juntandoArreglos = [arreglo1, arreglo2];

function testArreglos () {
    console.log(juntandoArreglos[0][0]);
    console.log(juntandoArreglos[1][3]);
};
```
