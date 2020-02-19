console.log("created");

let proceso = ["platano", "manzanas", "kiwi"];

let ul = document.getElementById("proceso")

/* ["banana", "naranja", kiwi].foreach(element => {
    1.-crear un li ---- let li = document.createelement("li")
    2. cañadir texto ---- li.innerHTML = element
    3.- añadir li al ul ---- ul.uppendChild(li)

)}
*/

proceso.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
    

});