/*
Crea un objeto que sea un animal y añadale algunas propiedades.
Imprime por conosla un tesxto con todas sus propiedades.


*/
var animal = function (familia,raza,edad,color){

    this.familia = familia;
    this.raza = raza;
    this.edad = edad;
    this.color = color;
    this.detalles = function(){
        console.log("Tu animal es un "+this.familia+"de raza"+this.raza+" con "+this.edad+" años, y color "+this.color);
      }
};
var mianimal = new animal ("perro", "pastor aleman", 3, "negro",);
mianimal.detalles();


/*
Crea una clase que sea un animal y cree una instancia con ella.
Imprime por consola algunas de sus propiedades.


*/