let lista1 = ["Manzanas", "Melocotones", "Plátanos", "Peras",]
let lista2 = []

const ulLista1 = document.getElementById("lista1");
const ulLista2 = document.getElementById("lista2");

ulLista1.addEventListener('click', e => {
   lista2.push(e.target.innerText);
   var index = lista1.indexOf(e.target.innerText);
   lista1.splice(index, 1);
   refrescarListas();
})

ulLista2.addEventListener('click', e => {
    lista1.push(e.target.innerText);
    var index = lista2.indexOf(e.target.innerText);
    lista2.splice(index, 1);
    refrescarListas();
})

refrescarListas()
const titleHTMLElement = document.getElementById("title");


function refrescarListas() { 
    ulLista1.innerHTML = "";
    ulLista2.innerHTML = "";
    lista1.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        li.setAttribute("class", "red");
        ulLista1.appendChild(li);
    })

    lista2.forEach(item => {
        
        let li = document.createElement("li");
        li.innerHTML = item;
        li.setAttribute("class", "green");
        ulLista2.appendChild(li);
    })
}