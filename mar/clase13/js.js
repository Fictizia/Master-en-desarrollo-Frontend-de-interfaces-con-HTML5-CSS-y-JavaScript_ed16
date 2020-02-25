var nameElement = document.getElementById('nameField')
var email = document.getElementById('email')
var country = document.getElementById('country')
var username = document.getElementById('username')
var key = document.getElementById('key')

const descTextElement = document.getElementById('descText')

function save(event) {
     event.preventDefault();
      const data = {
         name: nameElement.value,
         email: email.value,
         country: country.value,
         username: username.value,
         key: key.value
      }
descTextElement.innerText = (`Nombre del usuario: ${nameElement.value} \n\ Email: ${email.value} \n\ País: ${country.value} \n\ Username: ${username.value} \n\ Contraseña: ${key.value}`);
}



