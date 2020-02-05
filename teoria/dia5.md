# Clase 5
    
### If... else

- Estructura:
    ```javascript
    /* IF ...ELSE
    if (-algo verdadero-) {
        -ejecutaremos este código-
    } else {
        -Si lo anterior no era verdadero, se ejecutara este código-
    };
    */
    ```

- Documentación:
    - [If... else en w3schools](http://www.w3schools.com/js/js_if_else.asp)
    - [If... else en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

- Ejemplo:
    ```javascript
    if (true) {
        console.log("true, por eso me ejecuto");
    } else {
        console.log("false, por eso me ejecuto");
    }
    ```


### Else if...

```javascript
function testCondiccion (condicion){
    if (condicion == 1) {
        console.log("1, por eso me ejecuto");
    } else if (condicion == 2){
        console.log("2, por eso me ejecuto");
    } else {
        console.log("no es 1 o 2, por eso me ejecuto");
    }
}
```


### Switch

- Estructura:
    ```javascript
    /* Switch
	switch(expresión) {
	    case n:
	        //Código
	        break;
	    case n:
	        //Código
	        break;
	    default:
	        //Código
	}
    */
    ```

- Documentación:
    - [Switch en w3schools](http://www.w3schools.com/js/js_switch.asp)
    - [Switch en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch)

- **Casos únicos:**
    ```javascript
	var nombre = "";
	switch (nombre) {
	  case "Pepe":
	    console.log("Hola Pepe");
	    break;
	  case "Luis":
	    console.log("Hola Luis");
	    break;
	  case "Antonio":
	    console.log("Hola Antonio");
	    break;
	  default:
	    console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

- **Multiples coincidencias:**
    ```javascript
	var nombre = "";
	switch (nombre)
	{
	   case "Pepe":
	   case "Luis":
	   case "Antonio":
	       alert('Hola '+nombre);
	       break;

	   default:
	       console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

### Operador Ternario (?:)

- Estructura:
    ```javascript
    /* 
    -- Una operación por caso --
	condicion ? expresion1 : expresion2 
    
    -- Multiples Operaciones por caso --
	condicion ? (
		operacion1,
		operacion2,
		otraoperacion
	) : ( 
		operacion1,
		operacion2,
		otraoperacion
	);

    -- Evaluaciones multiples --
    	condicion ? expresion1 : condicion2 ? expresion1 : expresion2;
    */
    ```

- Una operación por caso:
```javascript
	var esMiembro = true;
	console.info("El pago son  " + (esMiembro ? "20.00€" : "50.00€"));
```

- Evalución múltiple:
```javascript
	var esMiembro = true;
	var esAdulto = true;
	console.info(esMiembro ? "El pago son 20.00€" : esAdulto ? "Puedes enviar la solicitud cuando quieras" : "Tines que esperar aún. Lo siento.");
```

- Múltiples Operaciones:
```javascript
	var mensaje,
	esMiembro = true;
	
	esMiembro ? (
		mensaje = "El pago son 20.00€",
		console.info(mensaje)
	) : (
		mensaje = "El pago son 50.00€",
		console.info(mensaje)
	);
```

### Operadores Lógicos

- AND (&&) lógico
```javascript
    a1 = true  && true      // t && t regresa true
    a2 = true  && false     // t && f regresa false
    a3 = false && true      // f && t regresa false
    a4 = false && (3 == 4)  // f && f regresa false
    a5 = "Cat" && "Dog"     // t && t regresa "Dog"
    a6 = false && "Cat"     // f && t regresa false
    a7 = "Cat" && false     // t && f regresa false
```

- OR (||) lógico
```javascript
    o1 = true  || true       // t || t regresa true
    o2 = false || true       // f || t regresa true
    o3 = true  || false      // t || f regresa true
    o4 = false || (3 == 4)   // f || f regresa false
    o5 = "Cat" || "Dog"      // t || t regresa "Cat"
    o6 = false || "Cat"      // f || t regresa "Cat"
    o7 = "Cat" || false      // t || f regresa "Cat"
```

- Logical NOT (!)
```javascript
    n1 = !true              // !t regresa false
    n2 = !false             // !f regresa true
    n3 = !"Cat"             // !t regresa false
```

### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de condicionales (If...else, Switch, operador ternario )

**1 -** Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

- Usando *if...else*
```javascript
	function compararNumeros (valor1, valor2) {
		if (valor1 > valor2) {
			console.info(valor1, "es mayor.")
		} else if (valor1 < valor2){
			console.info(valor2, "es mayor.")
		} else {
			console.info("Son iguales")
		};
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function compararNumeros (valor1, valor2) {
		(valor1 > valor2) ? console.info(valor1, "es mayor.") 
			: (valor1 < valor2) ? console.info(valor2, "es mayor.") 
			: console.info("Son iguales");
	}
```

- Usando *Switch*
```javascript
	function compararNumeros (valor1, valor2) {
		switch (true){
			case (valor1 > valor2):
				console.info(valor1, "es mayor.");
				break;
			case (valor1 < valor2):
				console.info(valor2, "es mayor.");
				break;
			default:
				console.info("Son iguales");
		}
	}
```

**2 -** Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

- Usando *if...else*
```javascript
	function compararVariosNumeros (valor1, valor2, valor3) {
		if (valor1 > valor2 && valor1 > valor3) {
			console.info(valor1, "es mayor.")
		} else {
			if(valor2 > valor3){
				console.info(valor2, "es mayor.")
			} else {
				console.info(valor3, "es mayor.")
			}
		};
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function compararVariosNumeros (valor1, valor2, valor3) {
		(valor1 > valor2 && valor1 > valor3) ? console.info(valor1, "es mayor.") 
			: (valor2 > valor3) ? console.info(valor2, "es mayor.") 
			: console.info(valor3, "es mayor.");
	}
```

- Usando *Switch*
```javascript
	function compararVariosNumeros (valor1, valor2, valor3) {
		switch (true){
			case (valor1 > valor2 && valor1 > valor3):
				console.info(valor1, "es mayor.");
				break;
			case (valor2 > valor3 && valor2 > valor1):
				console.info(valor2, "es mayor.");
				break;
			default:
				console.info(valor3, "es mayor.")
		}
	}
```


**3 -** Diseña un script que siga el siguiente proceso:
- Si el primero es negativo, debe sumar los otros dos
- Sino multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.

- Usando *if...else*
```javascript
	function jugandoConNumeros (valor1, valor2, valor3) {
		if (valor1 < 0) {
			console.log("El resultado de la suma es", valor2+valor3)
		} else {
			console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3)
		};
	}

```

- Usando *Operador Ternario (?:)*
```javascript
	function jugandoConNumeros (valor1, valor2, valor3) {
		(valor1 < 0) ? console.log("El resultado de la suma es", valor2+valor3) 
			: console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3);
	}
```

- Usando *Switch*
```javascript
	function jugandoConNumeros (valor1, valor2, valor3) {
		switch(true){
			case (valor1 < 0):
				console.log("El resultado de la suma es", valor2+valor3)
				break;
			default:
				console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3);
		}
	}
```


**4 -** Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.

- Usando *if...else*
```javascript
	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
			
			if(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo"){
				console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio);
			} else {
				console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento);
			}

		} else {
			console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
		};

	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		(mes === "Diciembre" || mes === "Enero" || mes === "Febrero") ? 
				(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo") ?
				 console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio)
				 : console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento)
		: console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
	}
```

- Usando *Switch*
```javascript
	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		switch (true) {
			case ((mes === "Diciembre" || mes === "Enero" || mes === "Febrero") && (diaSemana !== "Viernes" && diaSemana !== "Sabado" && diaSemana !== "Domingo")):
				console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento);
				break;
			case (mes !== "Diciembre" && mes !== "Enero" && mes !== "Febrero"):
				console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
				break;
			default:
				console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio);
		}

	}
```

**5 -** Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.

- Usando *if...else*
```javascript
	function esPositivo (numero) {

		if(numero < 0){
			console.info(numero, " es negativo");
		} else {
			console.info(numero, " es positivo");
		}

	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function esPositivo (numero) {
		(numero < 0) ? console.info(numero, " es negativo")
			: console.info(numero, " es positivo");
	}
```

- Usando *Switch*
```javascript
	function esPositivo (numero) {

		switch(true){
			case (numero < 0):
				console.info(numero, " es negativo");
				break;
			default:
				console.info(numero, " es positivo");
		}

	}
```

**6 -** Diseña un algoritmo que al introducir un número nos diga si es par o impar.

- Usando *if...else*
```javascript
	function esPar (numero) {

		if(numero %2 === 0 ){
			console.info(numero, " es par");
		} else {
			console.info(numero, " es impar");
		}
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function esPar (numero) {
		(numero %2 === 0) ? console.info(numero, " es par")
			: console.info(numero, " es impar");
	}
```

- Usando *Switch*
```javascript
	function esPar (numero) {

		switch(true){
			case (numero %2 === 0):
				console.info(numero, " es par");
				break;
			default:
				console.info(numero, " es impar");
		}

	}
```


**7 -** Diseña un algoritmo que nos confirme si un [año es bisiesto](https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto) o no.
- Caracteristicas de un año bisiesto:
	- Tiene que ser divisible entre 4
	- No tiene que ser divisible entre 100
	- Puede ser divisble entre 100 y entre 400

- Usando *if...else*
```javascript
	function esBisiesto (year) {
		
		if (year % 4 === 0 && year % 100 !== 0) {
			console.info("Amigo, el año " +year+ " es bisiesto!");
		} else if (year % 400 === 0 && year % 100 === 0) {
			console.info("Amigo, el año " +year+ " es bisiesto!");
		} else {
			console.warn("Amigo, el año " +year+ " NO es bisiesto!");
		};

	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function esBisiesto (year) {
		(year % 4 === 0 && year % 100 !== 0) 
			? console.info("Amigo, el año " +year+ " es bisiesto!")
			: (year % 400 === 0 && year % 100 === 0) 
			? console.info("Amigo, el año " +year+ " es bisiesto!")
			: console.warn("Amigo, el año " +year+ " NO es bisiesto!");
	}
```

- Usando *Switch*
```javascript
	function esBisiesto (year) {

		switch(true){
			case (year % 4 === 0 && year % 100 !== 0):
			case (year % 400 === 0 && year % 100 === 0):
				console.info("Amigo, el año " +year+ " es bisiesto!");
				break;
			default:
				console.warn("Amigo, el año " +year+ " NO es bisiesto!");
		}

	}
```

### Apoyo...

- [JavaScript, ¡Inspírate!](https://leanpub.com/javascript-inspirate)


### While

- Estructura:
    ```javascript
    /*  --while--
    while (-Condición-) {
        -Instrucciones-
    };
    */
    ```

- Documentación:
    - [While en w3schools](http://www.w3schools.com/js/js_loop_while.asp)
    - [While en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

- Bucle infinito:
    Este es un error muy común.

    ```javascript
    while (true) {
        console.log("Este texto se imprime hasta el infinito...");
    };
    ```

- Bucle que no se ejecutará:
    ```javascript
    while (false) {
        console.log("Este texto jamas se imprimirá...");
    };
    ```

- Ejemplo:
    ```javascript
    var control = 1;
    while (control <= 10) {
        console.log(control);
        control++;
    };
    ```


### For

- Estructura:
    ```javascript
    /*  --for--
    for (-Expresión inicial-; -Condición-; -Expresión Actualización-) {
        -Instrucciones-
    };
    */
    ```

- Documentación:
    - [For en w3schools](http://www.w3schools.com/js/js_loop_for.asp)
    - [For en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
    - [Dominando el rendimiento](https://web.archive.org/web/20141205235948/https://blogs.oracle.com/greimer/entry/best_way_to_code_a)


- Ejemplo clásico:
    ```javascript
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    ```


### Do... While

- Estructura:
    ```javascript
    /* --Do...while--
    do{
       -Instrucciones-
    } while (-Condición-);
    */
    ```

- Documentación:
    - [Do... While en w3schools](http://www.w3schools.com/js/js_loop_while.asp)
    - [Do... While en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

- Ejemplo:
    ```javascript
    var i = 0;
    do {
       i++;
       console.log(i);
   } while (i < 10);
    ```

- Al menos se ejecutará una vez, aunque la premisa no sea verdadera.

    ```javascript
    do{
       console.warn("me ejecuto")
    } while (false);
    ```

### Break y Continue

- *Continue* nos permite saltar parte del bucle.
```javascript
for (var i = 0; i < 10; i++) {
    
    // Salta el 5 y sigue...
    if (i === 5) { 
    	continue; 
    }
    
    console.log("El valor de i es "+i);
}
```

- *Break* nos permite salir del bucle.
```javascript
for (var i = 0; i < 10; i++) {
    
    // Llega a 5 y sale.
    if (i === 5) { 
    	break; 
    }
    
    console.log("El valor de i es "+i);
}
```

### Usos Avanzados

- Ejemplo usando decrecimiento:
    ```javascript
    for (var i = 10; i > 0; i--) {
        console.log(i);
    }    
    ```

- Ejemplo usando varios contadores:
    ```javascript
    for (var i = 0, x = 1, z = 2, tope = 10; i <= tope; x *= z, i++ ) {
        console.log("i vale "+i+", x vale "+x+", z vale "+z);
    }
    ```

### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de bucles (Do...While, For, While )

**1 -**  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.

- Usando *for*
```javascript
	function eureka() {

		var clave = "Fictizia mola mucho";
		var acierto = false;
		var contador = 0
		for (; contador < 3 & acierto === false; contador++) {
			
			var secreto = prompt("Dime el secreto:");

			if (secreto === clave) {
				acierto = true;
				console.info(secreto, "es la clave que esperaba!")
			} else {
				console.warn(secreto, " no es correcto.")
			}
		};


		if(contador >= 3){
			console.warn("Lo siento... pero has agotado los 3 intentos.")
		}


	}
```

- Usando *while* y *break*
```javascript
	function eureka() {

		var clave = "Fictizia mola mucho";

		var contador = 0


		while(contador < 3){
			var secreto = prompt("Dime el secreto:");

			if (secreto === clave) {

				console.info(secreto, "es la clave que esperaba!")
				break; // elimina más intentos
			} else {
				console.warn(secreto, " no es correcto.")
			}

			contador++;
		}

		if(contador >= 3){
			console.warn("Lo siento... pero has agotado los 3 intentos.")
		}


	}
```

- Usando *Do...While*
```javascript
	function eureka() {

		var clave = "Fictizia mola mucho";
		var acierto = false;
		var contador = 0

		do {
		    var secreto = prompt("Dime el secreto:");

			if (secreto === clave) {
				acierto = true;
				console.info(secreto, "es la clave que esperaba!")
			} else {
				console.warn(secreto, " no es correcto.")
			}

			contador++;

		} while (contador < 3 & acierto === false);
		

		if(contador > 3){
			console.warn("Lo siento... pero has agotado los 3 intentos.")
		}
	}
```


**2 -** Diseña un algoritmo que imprima los numeros del 1 al 100.

- Usando *for*
```javascript
	function contadorPositivo() {
		
		console.info("Empieza la cuenta!");

		for (var i = 1; i <= 100; i++) {
			console.log(i)
		};

		console.info("Terminó la cuenta mágica...");

	}
```

- Usando *while*
```javascript
	function contadorPositivo() {
		
		console.info("Empieza la cuenta!");
		
		var i = 1
		while (i <= 100) {
			console.log(i);
			i++;
		};

		console.info("Terminó la cuenta mágica...");

	}
```

- Usando *Do...While*
```javascript
	function contadorPositivo() {
		
		console.info("Empieza la cuenta!");
		
		var i = 1
		do {
			console.log(i);
			i++;
		} while (i <= 100);

		console.info("Terminó la cuenta mágica...");

	}
```


**3 -** Diseña un algoritmo que imprima los numeros del 100 al 0.

- Usando *for*
```javascript
	function contadorNegativo() {
		
		console.info("Empieza la cuenta!");

		for (var i = 100; i >= 0; i--) {
			console.log(i)
		};

		console.info("Terminó la cuenta mágica...");

	}
```

- Usando *while*
```javascript
	function contadorNegativo() {
		
		console.info("Empieza la cuenta!");
		
		var i = 100
		while (i >= 0) {
			console.log(i);
			i--;
		};

		console.info("Terminó la cuenta mágica...");

	}
```

- Usando *Do...While*
```javascript
	function contadorNegativo() {
		
		console.info("Empieza la cuenta!");
		
		var i = 100
		do {
			console.log(i);
			i--;
		} while (i >= 0);

		console.info("Terminó la cuenta mágica...");

	}
```


**4 -** Diseña un algoritmo que imprima los numeros pares entre 0 y 100.

- Usando *for*
```javascript
	function contadorPares() {
		
		console.info("Empieza la cuenta!");

		for (var i = 0; i <= 100; i += 2) {
			console.log(i)
		};

		console.info("Terminó la cuenta mágica...");

	}
```

- Usando *while*
```javascript
	function contadorPares() {
		
		console.info("Empieza la cuenta!");
		
		var i = 0
		while (i <= 100) {
			console.log(i);
			i += 2;
		};

		console.info("Terminó la cuenta mágica...");

	}
```

- Usando *Do...While*
```javascript
	function contadorPares() {
		
		console.info("Empieza la cuenta!");
		
		var i = 0
		do {
			console.log(i);
			i += 2;
		} while (i <= 100);

		console.info("Terminó la cuenta mágica...");

	}
```

**5 -** Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

- Usando *for* (desestructurado)
```javascript
	function contador50Impares(numero) {
		
		var impar = 0;
		
		console.info("Empieza la cuenta!");

		for ( ; impar <= 50 ; ) {
			
			if (numero % 2 !== 0){
				console.log(numero);
				impar++

			}

        numero++
			
		};

		console.info("Terminó la cuenta mágica...");

	}
```

- Usando *while*
```javascript
	function contador50Impares(numero) {
		
		console.info("Empieza la cuenta!");
		
		var i = 1
		while (i <= 50) {
			if (numero % 2 !== 0){
				console.log(numero);	
			}
			numero++
			i++;
		};

		console.info("Terminó la cuenta mágica...");

	}
```

- Usando *Do...While*
```javascript
	function contador50Impares(numero) {
		
		console.info("Empieza la cuenta!");
		
		var i = 1
		do {
			if (numero % 2 !== 0){
				console.log(numero);
				numero++
			} else (
				numero++
			)
			i ++;
		} while (i <= 50);

		console.info("Terminó la cuenta mágica...");

	}
```