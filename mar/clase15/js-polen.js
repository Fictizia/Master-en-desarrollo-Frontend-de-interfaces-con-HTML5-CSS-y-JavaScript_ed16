
fetch("http://airemad.com/api/v1/pollen")
.then( response => response.json() )
    .then( result => insertarPolen(result) )



function insertarPolen(polen) {
    
        let parraf = document.createElement("p");
        const miDiv = document.getElementById('datos-polen');
        parraf.innerText = JSON.stringify(polen);
        miDiv.appendChild(parraf);

}
