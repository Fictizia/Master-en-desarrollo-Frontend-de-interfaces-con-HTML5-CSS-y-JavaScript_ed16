fetch("https://pokeapi.co/api/v2/pokemon")
        .then( response => response.json() )
            .then( result => insertarElems(result.results) )

const miLista = document.getElementById('list_pokemon');

function insertarElems(results) {
    miLista.innerHTML = "";
    results.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item.name;
        li.setAttribute("class", "list_item");
        miLista.appendChild(li);
    })
  
}


//img

images.forEach(item => {
    const img = document.createElement("img")
    img.setAttribute("src", item)
    document.body.appendChild(img)
})


