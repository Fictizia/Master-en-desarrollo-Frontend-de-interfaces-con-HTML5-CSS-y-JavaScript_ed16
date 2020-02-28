
var lista = document.getElementById('pokeList');


fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
        .then(result => {
            console.log(result.results)
            result.results.forEach(element =>{
                let li = document.createElement('li');
                li.innerHTML = element.name;
                lista.appendChild(li);
            })
                
           

        });
/*       
fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
            .then (result => tratarResults(result.results))
}
function tratarResults(lista)

img,ages.forEach(item =>{})
const img = document.createdElement('img')
img.setAttribute('src', item)
document.body.appendeChild(img)
})
*/