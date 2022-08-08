//const nineros = false;
//const hambre = true;

//alert(nineros == hambre); //false

//alert(nineros || hambre); //true

// AND
// Todas las condiciones deben ser true
// true && true  => true
// true  && false => false
// false && false => false


//OR
//Solo una condicion debe ser true
//true || true = true
//true || false = true
//false || false = false

//NOT
//es la negacion a la condicion
// true -> false, false -> true


var hora = 8;

if (hora == 8) {
	console.log("Buen dia");
}

var hora = 3;

if (hora != 8) {
	console.log("Buen dia");
}

var hungry = false;

if (hungry == true) {
	alert("Tengo mal del porky");
} else {

	alert("Two mimir");
}
var hour = 20;

if (hour < 18) {
 alert("Good day");
} else {
  alert("Tardes, ya");
}

var edad =21;

if (edad >= 18){
    alert("Crear cuenta");
} else {
    alert("bai bai");
}

var hora = 12;

if (hora <= 7 && hora > 0) {
    alert("Buenas madrugadas");
}   else {
    alert("Que tenga un buen día");
}


var hora = 12;

if (hora > 0) {

	if (hora <= 7) {
    	alert("Buenas madrugadas");
    } else {
    	alert("Que tenga un buen dia");
    }
    
} else {

	alert("Su hora no existe");
    
}
//ejemplo
var hora = 12;
//verificar 24 >= hora > 0
if (hora > 0 && hora <= 24) {
//código
	if (hora <= 7) {
    	alert("Buenas madrugadas");
    } else {
    	alert("Que tenga un buen dia");
    }
    
} else {

	alert("Su hora no existe");    
}

var nineros = prompt("Ingresar tus nineros")

    if (nineros <=10) {
        alert("Concha de Vainilla y 4 picafresas");
    }else if (nineros <=50){
        alert("Tacos al vaporwave y una agua de horchata");
    }else if (nineros <=129) {
        alert("Pizza de liru sisa sin piña combo fiesta");
    }else if (nineros <=500) {
        alert("Bonnels+ aros de cebolla + papas gajo + tarro");
    }else {
        alert("compra 3 casas, renta 2 y vive en una");
    }


    //ejercicios por 1 y 2 
    //ejercicio 1
    var num = prompt("Dijite un número")
    if (num % 2 == 0) {
        alert("Su número es par");
        } else {
            alert ("Su numero es impar")
        }

        //ejercicio 2
        let nacimiento = prompt("Ingresa tu año de nacimiento");

        if (nacimiento <= 2004) {
            alert("Eres mayor de edad");
        } else {
            alert("Estás muy pequeñ@");
        }
        
        //////////////////////////

        // Switch

// Obtener la fecha actual

var fecha = new Date();

//numero del día
var fecha = new Date().getDate();
alert (fecha);


// var dia = new Date().getDay();

var dia = -1;
function evalDate(day) {
	switch(day){
	case 0:
		return "Domingo";
        break;
    case 1:
    	return "Lunes";
        break;
    case 2:
    	return "Martes";
        break;
    case 3:
    	return "Miercoles";
        break;
    case 4:
    	return "Jueves";
        break;
    case 5:
    	return "Viernes";
        break;
    case 6:
    	return "Sabado";
        break;
    default:
    	return "Su fecha no es válida";
	}
}

var nineros = prompt("Ingrese su deposito");

function miCarrito(dinero) {
    switch(true) {
        case (dinero <= 10):
            return "Churrumais";
            break;
        case (dinero <= 50):
            return "McTrio";
            break;
        case (dinero <= 100):
            return "Chilaquiles verdes c/ poio y 1/2L de naranja";
            break;
        case (dinero <= 500):
            return "1/2kg de chicharrones y 1 boleto al cine";
            break;
        default:
            return "No hay nineros";
    }
}

alert(miCarrito(nineros));
//si queremos hacer siwtch, debemos usar true