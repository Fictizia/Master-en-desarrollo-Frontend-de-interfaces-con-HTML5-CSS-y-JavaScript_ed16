var lista = ['Plátanos', 'Uvas', 'Kiwis', 'Cerezas', 'Fresas'];

let ul = document.getElementById ('lista1')

lista.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
});




