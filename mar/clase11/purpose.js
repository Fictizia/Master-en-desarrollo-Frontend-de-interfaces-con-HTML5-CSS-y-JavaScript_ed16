var list1 = ['Ir al gimnasio', 'Mejorar mi inglés', 'Viajar a Miami', 'Dejar de fumar', 'Cambiar de trabajo', 'Ir a más conciertos'];
var list2 = [];

let ulpurpose = document.getElementById('list1');
let ulCheck = document.getElementById('list2');

function cambiarFondo() {
    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
    color += Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ')';
    document.body.style.backgroundColor= color;
    console.info("Nuevo color:", color);
}

refrescarListas();

function refrescarListas(){
    ulpurpose.innerHTML = "";
    list1.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        li.setAttribute("class", "red");
        ulpurpose.appendChild(li);
    })
    
    ulCheck.innerHTML ="";
    list2.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        li.setAttribute("class", "green");
        ulCheck.appendChild(li);
    })
}

ulpurpose.addEventListener('click', function (e) {
    if(e.srcElement.tagName === "LI"){
        var itemSelected = e.target.innerText;
        list2.push(itemSelected);
        var itemClick = list1.indexOf(itemSelected);
        list1.splice(itemClick,1);
        refrescarListas();
    }
})

ulCheck.addEventListener('click', function (e) {
    if(e.srcElement.tagName === "LI"){
    var itemSelected = e.target.innerText;
    list1.push(itemSelected);
    var itemClick = list2.indexOf(itemSelected);
    list2.splice(itemClick,1);
    refrescarListas();
    }
})



//truco: push, inner text, index off,  splice 