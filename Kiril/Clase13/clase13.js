console.log("created");



 /* Selecciono el elemento de cada input y lo almaceno en una variable */
let nombre = document.getElementById("field1");
let raza = document.getElementById("field2");
let color = document.getElementById("field3");
let edad = document.getElementById("field4");
let observaciones = document.getElementById("field5");

const descmascota = document.getElementById("mascota")

//console.log (nombre.value);



function valores (event){ 
/* event, significa que cuando hacemos click en el html llamamos a este event, y 
le digo preventDefault que lo que hace es quitar el comportamiento del submit 
por defecto (actualiar y recoger los datos) */
console.log (event);
/* Muestro el evento entero */
event.preventDefault();
/* Muestro los campos que quiero solo  */
console.log (nombre.value);
console.log (raza.value);
console.log (color.value);
console.log (edad.value);
console.log (observaciones.value);
/* Creo un objeto con los datos que capturo del formulario.  */
let mascota = {
    nombre: nombre.value,
    raza: raza.value,
    color: color.value,
    edad: edad.value,
    observaciones: observaciones.value,
    
    
    /* mostrar : function(){
        alert("El nombre de tu mascota es: " + this.mascota[0]);
    } */

};
descmascota.innerText = mascota.nombre;

/* Pinto el objeto entero */
console.log (mascota);
/* Pinto solo la edad */
console.log (mascota.edad);

}

