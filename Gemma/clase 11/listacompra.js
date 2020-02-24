var listaFrutas = ['Plátanos', 'Uvas', 'Kiwis', 'Cerezas', 'Fresas', 'Manzanas'];
var listaComida = ['Leche', 'Huevos', 'Pescado', 'Queso', 'Pan'];


let ul = document.getElementById ('lista1');

listaFrutas.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = item;
    li.setAttribute('class', 'red')
    ul.appendChild(li);
    
});

ul.addEventListener('click', e => {
    console.log(e.target.innerHTML);
    
    listaComida.push(e.target.innerText);
    
    var index = listaFrutas.indexOf(e.target.innerText);
    listaFrutas.splice(index,1);
    
    refrescarListas()
});

let ul2 = document.getElementById ('lista2');

listaComida.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = item;
    li.setAttribute('class', 'green')
    ul2.appendChild(li);
});


ul2.addEventListener('click', e => {
    console.log(e.target.innerHTML);
    
    listaFrutas.push(e.target.innerText);
    
    var index = listaComida.indexOf(event.target.innerText);
    listaComida.splice(index,1);
    
    refrescarListas()
});


function refrescarListas(){
    ul.innerHTML = '';
    ul2.innerHTML = '';
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







// const titleElement = document.getElementById ('lista1');
// titleElement.addEventListener ('click', e => {
//     console.log(`target ${e.target.innerText}`);
//     console.log(`currentTarget ${e.currentTarget}`);
//     listaFrutas.push();

//     var index = listaComida.indexOf
//     listaComida.splice(index, 1);

    

// }
// )

//splice & indexOf innerText
/*
lista1.push()
var index = lista2.indexOf(e.target.innerTExt)
lista2.splice(index, 1)

*/