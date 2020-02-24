var lista1 = ['banana','naranja','kiwi','pera'];
var lista2 = [];


var ul = document.getElementById("listafrutas")
var ul2 = document.getElementById("listafrutas2")

ul.addEventListener("click", e => {
    console.log(e.target.innerText)
    lista2.push(e.target.innerText)
    var index = lista1.indexOf(e.target.innerText)
    lista1.splice(index,1)
    refrescarlistas()
})

ul2.addEventListener("click", e => {
    console.log(e.target.innerText)
    lista1.push(e.target.innerText)
    var index = lista2.indexOf(e.target.innerText)
    lista2.splice(index,1)
    refrescarlistas()
})



refrescarlistas()

function refrescarlistas(){
    ul.innerHTML = ""
    ul2.innerHTML = ""
    lista1.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item;
        li.setAttribute ("class","rojo")
        ul.appendChild(li);
    }) 
        
    lista2.forEach(item => {
        let li = document.createElement("li")
        li.innerHTML = item;
        li.setAttribute ("class","verde")
        ul2.appendChild(li);
    }) 
}




    





/*function cambiarFondo() {
    // color = 'rgb(0-255,0-255,0-255'
    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
    color += Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ')';
    document.body.style.backgroundColor= color;
    console.info("Nuevo color:", color);
}*/




const titleHTMLElemnt = document.getElementById("Mititulo")

titleHTMLElemnt.addEventListener('click', e => {
   console.log (e.target)
   console.log (e.currentTarget)

})