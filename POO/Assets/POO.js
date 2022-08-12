/*

*Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

Elementos de la Programacion Orientada a Objetos

    - Clases: Plantilla que nos sirve para crear objetos. 
    - Objetos: Elementos creados a partir de la plantilla.
    - Propiedades o atributos: Informacion que tiene un elemento.
    - Metodos o funciones: Lo que hacen y como lo hacen. (accines que puede realizar)
    - Constructores: Son quienes construyen al objeto tomando en cuanta a la plantilla
    - Instanciar: Crear o materializar el objeto.
    

Ejemplo de los gatitos:

    - Mama y papa gatitos: Clase
    - Gatitos bebes: Objeto
    - Color de los gatitos: Atributos o caracteristicas
    - Maullar y ronronear: Metodos o funciones
    - Tener un gatito para darle todo nuestro amor: Instanciacion o materializacion


Ejemplo de las casas:
    
    - Plano de la casa: Clase o plantilla
    - Casitas: Objetos
    - Cantidad de niveles que hay en una casa: atributos
    - Abrir estacionamiento: Metodo o funcion
    - Personal de construccion: Constructores
    - Tener la casa lista para vivir: Instanciacion o materializacion


*/

//Ejemplo de gatitos
const gatito = {
    nombre: "Felix",
    color: "Naranja",
    peso: "10kg",
    edad: "5 años",
    colorOjos: "verdes",
    raza: "fold escoces",
    sexo: "hembra",
    vacunas: true,
    numeroBigotes: "20",
    tipoPelo: "largo",
    manchas: "true",
    imagen: "felix.jpg",

};


console.log(Felix); // tosal la info del gatito
console.log(Felix.nombre); // imprimo nombre
console.log(Felix.raza); // imprimo raza
console.log(Felix.vacunas); // imprimo vacunas
console.log(Felix.numeroBigotes); // imprimo raza


        

//1, defino mi platilla con las propiedades como variables, para despues agregar valores

class gatitos {
        nombre = "";
        color = "";
        edad = 0;
        raza = "";

//3. Crear un constructor
constructor(nombre, color, edad, raza){ //Necesitamos pasar los parametros
    this.nombre = nombre;
    this.color = color;
    this.edad = edad;
    this.raza = raza;
    }//fin del constructor 


//this nos va a indicar el lugar donde estamos ( ciudad o en el campo). Necesitamo saber que esta palabra es reservado, y nos ayuda a saber el aquí y el ahora. Hace referencia a la clase en la que estamos, y los objetos que estamos creando.


//platilla para crear muchos gatitos
//2.- Defino mis métodos como FUNCIONES, con estas funciones podemos realizar acciones.
maullar(maullar){
    maullar = console.log("Miauuuuuu");
}
dormir(dormir){
    dormir = console.log("Zzzzzzzz");
}
ronronear(ronronear){
    ronronear = console.log("Rrrrrrr");
}

imprimirInfo(div,bg){ //OPCIONAL, este metodo me permite imprimir la informacion de nuestros gatitos directamente en el front. Usamos una card de Bootstrap que vamos a insertar con el innerHTML directamente en un div vaciio de nuestro documento .html. Veremos que cierta informacion de esta tarjeta, esta reemplazada con la info que ya declaramos anteriormente dentro de la clase "gatitos"
    div.innerHTML += `<div class="card ${bg} mb-3" style="max-width: 18rem;"> 
    <div class="card-header">${this.nombre} <span class="badge badge-secondary">${this.color}</span></div>
    <div class="card-body">
      <h5 class="card-title">${this.edad}</h5>
      <p class="card-text">${this.raza}.</p>
    </div>
  </div>`; 
}

} //fin de la clase



//4.- crear gatitos
let contenido = document.getElementById("contenido");
let kitty = new gatitos ("kitty","blanco",666, "japonesa");
let garfield = new gatitos ("Garfield","Naranja", 15,"Persa");
let pepeElGato = new gatitos ("pepeElGato","azul",3,"nino");
let Tom = new gatitos ("Tom","gris",54,"equis");
let Jerry = new gatitos ("Jerry","oro", 9,"jess");


console.log(kitty);
console.log(garfield);
console.log(pepeElGato);
console.log(Tom);
console.log(Jerry);

kitty.maullar();
garfield.dormir();
pepeElGato.maullar();
Tom.dormir();
Jerry.maullar();

//Puedo usar el metodo "imprimirInfo" para poder mostrar la informacion de mis gatitos directamente en el front (documento .html). Para esta funcion, es necesario pasarle dos parametros, el primero es la variable "contenido" que declaramos mas arriba, para poder "aterrizar" ahi la informacion. La segunda variable, es el color de Bootstrap que usamos para los botones, aunque siempre podemos cambiar por otro color.

kitty.imprimirInfo(contenido, "bg-primary");
garfield.imprimirInfo(contenido, "bg-secondary");
pepeElGato.imprimirInfo(contenido, "bg-secondary");
Tom.imprimirInfo(contenido, "bg-secondary");
Jerry.imprimirInfo(contenido, "bg-secondary");

