var nombre = document.getElementById("nombre");
var raza = document.getElementById("raza");
var ref = document.getElementById("ref");
var color = document.getElementById("color");
//Elemento p del html donde quiero pintar el dato
const descTextElement =document.getElementById('descText')

function save(){

    //mi ibjeto con los datos del formulario
    const data ={
        name: nombre.value,
        type: raza.value,
        numRef: ref.value,
        color: color.value
        }

};
/*
    const data = {
        name: nombre,
        type: raza,
        numRef: ref,
        color: color
        }
     */
        descTextElement.innerText = data.desc
     //metemos el texto en mi etiqueta psdfdvsdvfvsd