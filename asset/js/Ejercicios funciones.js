//función idCard
function idCard(){
let nombre = `Ezequiel`;
let ubicacion = `Boca del río`;
let pasatiempo = `ver formula uno`;
return `Hola, mi nombre es ${nombre}, Vivo en ${ubicacion}, y disfruto ${pasatiempo}.`;
}

//Ejercicio 2
//funcion calcMascotAge
console.log(idCard());
function calcDogAge (dogName = `tu perro`, humanYears = NaN) {
    let dogEq = 7;
    let dogYears = humanYears * dogEq;
    return `La edad de ${dogName} es ${dogYears} años perro`;
}

console.log(calcDogAge(`Shit-tzu`,7));
console.log(calcDogAge());

//arrow fn
const dogAge = (dogName, humanYears) => `${dogName} tiene ${humanYears * 7} años perros`;
console.log(dogAge(`Benito`,5));