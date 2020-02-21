let lista1 = ["Manzanas", "Melocotones", "Plátanos", "Peras",]
let lista2 = []

const ulLista1 = document.getElementById("lista1");
const ulLista2 = document.getElementById("lista2");

ulLista1.addEventListener("click", e => {
    console.log(e.target);
})

ulLista2.addEventListener("click", e => {
    console.log(e.target);
})

refrescarListas()
const titleHTMLElement = document.getElementById("title");


function refrescarListas() {
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

