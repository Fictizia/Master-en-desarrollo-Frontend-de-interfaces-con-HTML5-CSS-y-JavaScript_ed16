console.log("created");



/* Selecciono el elemento de cada input y lo almaceno en una variable */
let nombre = document.getElementById("field1");
let raza = document.getElementById("field2");
let color = document.getElementById("field3");
let edad = document.getElementById("field4");
let observaciones = document.getElementById("field5");

const descmascota = document.getElementById("mascota");
const titulomascota = document.getElementById("resumen_mascota");

//console.log (nombre.value);




function valores(event) {
    /* event, significa que cuando hacemos click en el html llamamos a este event, y 
    le digo preventDefault que lo que hace es quitar el comportamiento del submit 
    por defecto (actualiar y recoger los datos) */
    console.log(event);
    /* Muestro el evento entero */
    event.preventDefault();
    /* Muestro los campos que quiero solo  */
    console.log(nombre.value);
    console.log(raza.value);
    console.log(color.value);
    console.log(edad.value);
    console.log(observaciones.value);
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
    //descmascota.innerText = mascota.nombre;
    /* Pinto el objeto entero */
    console.log(mascota);
    /* Pinto solo la edad */
    console.log(mascota.edad);

    /* Llamo la funcion de insertar que con ellas creo una lista desordenada en el HTML y voy 
    insertando los campos que quiero */

    titulodatos();
    insertar(nombre.value);
    insertar(raza.value);
    insertar(color.value);
    insertar(edad.value);
    insertar(observaciones.value);


}




/* -------------------------------Funciones------------------------------------------------------ */
function titulodatos() {
    var node = document.createElement("h2");
    var textnode = document.createTextNode("Los datos de la mascota son");
    node.appendChild(textnode);
    document.getElementById("resumen_mascota").appendChild(node);

};

/* La funcion insertar para crear la lista con los datos del formulario, 
la tengo que pasar el valor que quiero que pinte */
function insertar(item) {
    //descmascota.innerHTML="";
    var node = document.createElement("LI"); // Create a <li> node
    var textnode = document.createTextNode(item); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById("mascota").appendChild(node);
    /* 3.- Asignamos las clases, para dar formato h2*/
    titulomascota.setAttribute("class", "result-list");
    cambiarFondo();


};

function cambiarFondo() {
    // color = 'rgb(255,0,255'
    var color = 'rgb(' + Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ')';
    resumen_mascota.style.backgroundColor = color;

}

