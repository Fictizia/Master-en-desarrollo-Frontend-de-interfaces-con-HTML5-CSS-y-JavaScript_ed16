console.log("created");

let proceso = ["Platano", "Manzanas", "Kiwi", "Melocoton", "Pomelo", "Sandia", "Melon", ];
let terminado = [];

let listap = document.getElementById("proceso")
let listat = document.getElementById("terminados")



/* ----------------------------------------------------------------------------------------------- */
const titleHTMLElement = document.getElementById("titulo");
/* Creamos un evento para que nos escuche lo al hacer click en el titulo  */
titleHTMLElement.addEventListener("click", evento =>console.log (evento));

/* Creamos un evento para que nos escuche, nos pinta por consola evento, target, current target */
titleHTMLElement.addEventListener("click", evento =>{
    console.log (evento);
    console.log (evento.target); /* Si añadimos el escuchador en el padre, el target nos dice quien a disparado 
    dicho evento, es decir que hijo lo ha disparado.  */
    console.log (evento.currentTarget);
    /* console.log (`Target: ${evento.target}`);
    console.log (`Current Target: ${evento.currentTarget}`); *//* Escrito con la nomenclatura de ECMA 6 */
});
/* ----------------------------------------------------------------------------------------------- */


/* lip/listap ==>> Hace referente a la lista pendiente */
/* lit/listat ==>> Hace referente a la lista terminados */


listap.addEventListener("click", evento => {
    /* Mostramos lo que capturamos */
    console.log (evento.target);
    console.log (evento.currentTarget);
    /* Insertamos en el array terminados el elemento, pero solo seleccionamos el innerText que es el texto*/
    /* Con el evento target vemos que nos trae el elemento, y vemos que solo nos interesa el texto del medio */
    terminado.push(evento.target.innerText);
    /* Determinamos la posicion en la que tenemos que eliminar el elemento del array (proceso) */
    posicion = proceso.indexOf(evento.target.innerText);
    /* Eliminamos el elemento del del array (proceso)*/
    proceso.splice(posicion, 1);
    refrescarlistas();

});

listat.addEventListener("click", evento => {
    console.log (evento.target);
    /* Insertamos en el array procesos el elemento, pero solo seleccionamos el innerText que es el texto*/
    /* Con el evento target vemos que nos trae el elemento, y vemos que solo nos interesa el texto del medio */
    proceso.push(evento.target.innerText);
    /* Determinamos la posicion del array posicion */
    posicion = terminado.indexOf(evento.target.innerText);
    /* Eliminamos el elemento del array (terminado) con la posicion que hemos sacado */
    terminado.splice(posicion, 1);
    refrescarlistas();

});

refrescarlistas();



/* Hacemos una funcion para poder llamarla y poder refrescar las listas las veces que quiera */
function refrescarlistas(){ 
    /* Aqui tenemos que vaciar la lista, porque si no cada vez que entremos  se nos acumularia lo 
    que tenemos de la otra  vez*/
    listap.innerHTML = "" 
    listat.innerHTML = ""
    /* ["banana", "naranja", kiwi].foreach(element => {
    )} */
proceso.forEach(item => {
    /* 1.-Crear un li ---- let li = document.createelement("li")  */
    let lip = document.createElement("li");
    /* 2. Añadir texto ---- li.innerHTML = element */
    lip.innerHTML = item;
    /* 3.- Asignamos las clases, para dar formato al ul y li*/
    listap.setAttribute("class", "result-list");
    lip.setAttribute("class", "result-list-itemP");
    /* 4.- Añadir li al ul ---- ul.uppendChild(li) */
    listap.appendChild(lip);
    
});


terminado.forEach(item => {
    /* 1.-Crear un li ---- let li = document.createelement("li")  */
    let lit = document.createElement("li");
    /* 2. Añadir texto ---- li.innerHTML = element */
    lit.innerHTML = item;
    /* 3.- Asignamos las clases, para dar formato al ul y li*/
    listat.setAttribute("class", "result-list");
    lit.setAttribute("class", "result-list-itemT");
    /* 4.- Añadir li al ul ---- ul.uppendChild(li) */
    listat.appendChild(lit);
    
});
}

function cambiarFondo() {
    // color = 'rgb(255,0,255'
    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
    color += Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ')';
    document.body.style.backgroundColor= color;
    console.info("Nuevo color:", color);
}