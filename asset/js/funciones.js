//Mejores prácticas
//Simplificar func. lo mas que se pueda

//1. Utilizar keyword function
// 2. Nombrar nuestra function
// 3. Utilizar () y abrir y cerrar la función { }

function myFunction() {
    //aquí va el cuerpo de la función
//    console.log("Hola Mundo");

}

myFunction();


function myName() {
    let name = "Ezequiel Lagunes";
//    console.log(name);
}


//myName();

function scopeFunction () {
    let local = "Esto se encuentrea dentro de la función"
//    console.log(local);
}

//scopeFunction();
//console.log(local);

var nombre ="Ezequiel Lagunes"

function globalScope () {
//    console.log(nombre);
}
globalScope();

//scope de variables
//LET
//Scope global

//console.log(a);
let a = "Hoisting let";


//VAR
//scope global, local
//Hosting no se puede utilizar a invocar antes de declararla
//console.log(x);
var x = "hola";

//CONST
//Scope global, local
//Hoisting: no se puede utilizar.no existe para nuestro interprete de JS.

//console.log(c);
const c= "Hoisting const";




//Input
const miNombre = "Ezequiel";
function fuifui(x){
//    console.log(x);
//    console.log(y);
}
//Parametro declarado en varaiable 
fuifui(miNombre);
//parametro aleatorio
fuifui("Ezequiel Lagunes");
fuifui(2);

function dosParam(x, y) {
    console.log(x + y);
}

//Invocacion con 2 parametros aleatorios
dosParam("Hola", "Mundo");

function tresparam(x, y, z) {
    console.log(x + y + z);
}
tresparam("Hola", "Soy", "Ezequiel");

////////////////////////////////////////////////

//OUTPUT
function out () {
    let x = "Hola";
    return x; 
}
// podemos recibir el dato de forma dorecta
//console.log(out());
//Podemos guardar el output en una varaible y la podemos utilizar despues
const receive = out();

//console.log(receive);

//funcion con parametro y return
function areaCuadrado(b, a) {
    var resultado = b *a;
    return resultado;
}

console.log( areaRectangulo(6, 3) );

function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));

//objeto
const conejo = {
    "nombre": "Griselo",
    "edad": 27,
    "color": "Gris",
    "peso": 500
}
    const myFunc = () => {
    }