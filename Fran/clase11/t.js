
let lista1 = ["platanos","manzanas","peras","kiwis"]
let lista2 = []

const lista1Element = document.getElementById("lista1");
const lista2Element = document.getElementById("lista2");

refrescarListas()

lista1Element.addEventListener("click", (e) =>
    console.log("target: ",e.target, " currentTarget: ", e.currentTarget))

lista1Element.addEventListener("click", (e) => {
    lista2.push(e.target.innerText)
    lista1.splice(lista1.indexOf(e.target.innerText), 1)
    refrescarListas()
})

lista2Element.addEventListener("click", (e) => {
    lista1.push(e.target.innerText)
    lista2.splice(lista2.indexOf(e.target.innerText), 1)
    refrescarListas()
})




function refrescarListas(){
    lista1Element.innerHTML = ''
    lista2Element.innerHTML = ''
    lista1.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        lista1Element.appendChild(li);
    })
    
    lista2.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        lista2Element.appendChild(li);
    })
}