var list1 = ['Ir al gimnasio', 'Mejorar mi inglés', 'Viajar a Miami', 'Dejar de fumar', 'Cambiar de trabajo', 'Ir a más conciertos'];
var list2 = ['Ir al gimnasio', 'Dejar de fumar'];

let ul = document.getElementById('list1');

list1.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;
    ul2.appendChild(li);
})


