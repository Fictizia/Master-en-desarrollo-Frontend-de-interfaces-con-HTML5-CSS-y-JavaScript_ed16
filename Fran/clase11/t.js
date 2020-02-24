
let lista1 = ["platanos","manzanas","peras","kiwis"]
let lista2 = []

const lista1Element = document.getElementById("lista1");
const lista2Element = document.getElementById("lista2");

refrescarListas()

const titleHTMLElement = document.getElementById("title")


lista1Element.addEventListener("click", (e) => {
    lista2.push(e.target.innerText)
    lista1.splice(lista1.indexOf(e.target.innerText), 1)
    refrescarListas()
})

lista2Element.addEventListener("click", (e) => {
    lista1.push(e.target.innerText)
    var index = lista2.indexOf(e.target.innerText)
    lista2.splice(index, 1)
    refrescarListas()
})

 function cambiarFondo() {
		// color = 'rgb(0-255,0-255,0-255'
		var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
		color += Math.floor((Math.random() * 255)) + ',';
		color += Math.floor((Math.random() * 255)) + ')';
		document.body.style.backgroundColor= color;
		console.info("Nuevo color:", color);
}

function refrescarListas(){
    lista1.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        li.setAttribute("class", "red")
        lista1Element.appendChild(li);
    })
    
    lista2.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        li.setAttribute("class", "green")
        lista2Element.appendChild(li);
    })
} 


var pepito = document.getElementById("name")
var surname = document.getElementById("surname")
var desc = document.getElementById("desc")

function save(e){
    e.preventDefault()
    console.log(
        {
        name: pepito.value,
        surname: surname.value,
        desc: desc.value
    })
}
