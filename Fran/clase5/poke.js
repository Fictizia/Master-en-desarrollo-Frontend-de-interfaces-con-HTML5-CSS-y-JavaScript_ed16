var lista = document.getElementById("lista")
fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=999%22")
    .then(resp => resp.json())
        .then(result => result.results.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(element.name));
            lista.appendChild(li);

            fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
                .then(resp => resp.json())
                    .then(result => {
                        var img = document.createElement("img");
                        img.src = result.sprites.front_default
                        lista.appendChild(img);
                    })
            }))

        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Four"));