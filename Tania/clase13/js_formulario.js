const nombre = document.getElementById("nombre");
const surname = document.getElementById("surname");
const date = document.getElementById("date");
const email = document.getElementById("email");

const etiquetahtml = document.getElementById("xxxxxx")

function save(event){
    event.preventDefault()
    const data = {
        name: nombre.value,
        surname: surname.value,
        date: date.value,
        email: email.value,
    }

    etiquetahtml.innerText = data.name
}