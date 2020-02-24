var nameElement = document.getElementById('nameField')
var email = document.getElementById('email')
var country = document.getElementById('country')
var username = document.getElementById('username')
var key = document.getElementById('key')

//Etiqueta p
const descTextElement = document.getElementById('descText')

function save(event) {
     event.preventDefault();
     //mi objeto con los datos del formulario
     const data = {
         name: nameElement.value,
         email: email.value,
     }
     //console.log (`El nombre del usuario es ${nameElement.value}, su email es ${email.value}. Vive en ${country.value} y sus datos de acceso son: usuario ${username.value} y contraseña ${key.value}`)


//metemos el texto en mi etiqueta p
descTextElement.innerText = data.desc
}