var listaFrutas = ['Plátanos', 'Uvas', 'Kiwis', 'Cerezas', 'Fresas', 'Manzanas'];


let ul = document.getElementById ('lista1');

listaFrutas.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = item;
    li.setAttribute('class', 'red')
    ul.appendChild(li);
    
});

ul.addEventListener('click', e => console.log(e.target));

var listaComida = ['Leche', 'Huevos', 'Pescado', 'Queso', 'Pan'];

let ul2 = document.getElementById ('lista2');

listaComida.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = item;
    li.setAttribute('class', 'green')
    ul2.appendChild(li);
});

function refrescarListas(){
    
    listaFrutas.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = item;
        li.setAttribute('class', 'red')
        ul.appendChild(li);
    });

    listaComida.forEach(item =>{
        let li = document.createElement('li');
        li.innerHTML =item;
        li.setAttribute('class', 'green')
        lista2.appendChild(li);
});
}







const titleElement = document.getElementById ('title');
titleElement.addEventListener ('click', e => {
    console.log(`target${e.target}`);
    console.log(`currentTarget${e.currentTarget}`); 
}
)

//splice & indexOf innerText
/*
var lista 1 = ['banana', 'cebolla', 'perejil', 'pimientos']
lista1.push()
var index = lista2.indexOf(e.target.innerTExt)
lista2.splice(index, 1)

*/