const ulLista = document.getElementById("lista");
    
fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
        .then(result => createLi(result.results))

function createLi(list) {
    list.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item.name;
        ulLista.appendChild(li);
})


    
} 

/*
async function getPokemon(){
    const data = await fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
        .then(result => console.log(result.results))
}
*/