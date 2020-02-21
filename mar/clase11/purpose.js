var list1 = ['Ir al gimnasio', 'Mejorar mi inglés', 'Viajar a Miami', 'Dejar de fumar', 'Cambiar de trabajo', 'Ir a más conciertos'];
var list2 = ['Dejar de fumar'];

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
    list1.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        li.setAttribute("class", "red");
        ulpurpose.appendChild(li);
    })
    
    list2.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        li.setAttribute("class", "green");
        ulCheck.appendChild(li);
    })
}

ulpurpose.addEventListener('click', function (e) {
    console.log("Target: ", e.target);
})


//truco: push, inner text, index off,  splice 