
let lista1 = ["platanos","manzanas","peras","kiwis"]
let lista2 = []

const lista = document.getElementById("lista1");

lista.addEventListener("click", (e) => console.log("target: ",e.target, " currentTarget: ", e.currentTarget))