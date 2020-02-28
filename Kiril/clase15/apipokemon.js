


console.log("created");

let proceso = [];
let listap = document.getElementById("proceso")


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




refrescarlistas();

/* Hacemos una funcion para poder llamarla y poder refrescar las listas las veces que quiera */
async function refrescarlistas(){ 
    /* Aqui tenemos que vaciar la lista, porque si no cada vez que entremos  se nos acumularia lo 
    que tenemos de la otra  vez*/
    listap.innerHTML = "" 
   
    /* Con await  nos esperamos a que resuelta la promesa y nos devuelve el resultado. Objeto. */
    proceso = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=999")
        .then(response => response.json())
            .then(result => result.results); 


    proceso.forEach(item => {
        /* 1.-Crear un li ---- let li = document.createelement("li")  */
        let lip = document.createElement("li");
        /* 2. Añadir texto ---- li.innerHTML = element */
        lip.innerHTML = item.name;
        /* 3.- Asignamos las clases, para dar formato al ul y li*/
        listap.setAttribute("class", "result-list");
        lip.setAttribute("class", "result-list-itemP");
        /* 4.- Añadir li al ul ---- ul.uppendChild(li) */
        listap.appendChild(lip);
    
    });

}
/* Declaro una variable para seleccionar la clase "cont_principal", El problema es que nos devuelve un elemento HTML
lo tratariamos como un ARRAY, aunque solo tenga un elemento*/

var a = document.getElementsByClassName("cont_principal");
function cambiarFondo() {
    // color = 'rgb(255,0,255'
    var color = 'rgb(' + Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ')';
    a[0].style.backgroundColor = color;

}



/* Esta es otra forma, porque result.results existe solo en la peticion, asi que le decimos
que con await espere para resolver la promesa y luego lo almacenamos en una variable. Tambien 
añadimos async para hacer la funcion asincrona
 */


fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9")
    .then(response => response.json())
        .then(result => tratarResult(result.results)); 

function tratarResult(lista){
    console.log(lista);
};



 var imagenes = [
    "https://pokeapi.co/api/v2/pokemon/1/",
    "https://pokeapi.co/api/v2/pokemon/2/"

];

imagenes.forEach(item => {
    const img = document.createElement("img");
    img.setAttribute("src",item);
    document.body.appendChild(img);

})