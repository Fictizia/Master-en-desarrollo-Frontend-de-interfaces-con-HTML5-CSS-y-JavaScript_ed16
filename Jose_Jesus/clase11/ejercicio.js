var arr = ['banana','naranja','kiwi']

let ul = document.getElementById ("listafrutas")
arr.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li)
});    