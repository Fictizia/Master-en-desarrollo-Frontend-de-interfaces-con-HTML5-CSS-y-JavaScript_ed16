console.log("created");

let proceso = ["Platano", "Manzanas", "Kiwi", "Melocoton", "Fresas", "Pomelo"];
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
    console.log (evento.target);
    
    listat.push(evento.target.innerText);
    posicion = listap.indexOf(evento.target.innerText);
    listap.splice(posicion,1);
    refrescarlistas();

});

listat.addEventListener("click", evento => {
    console.log (evento.target);

    listap.push(evento.target.innerText);
    posicion = listap.indexOf(evento.target.innerText);
    listat.splice(posicion, 1);
    refrescarlistas();

});

refrescarlistas();



/* Hacemos una funcion para poder llamarla y poder refrescar las listas las veces que quiera */
function refrescarlistas(){ 
    
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