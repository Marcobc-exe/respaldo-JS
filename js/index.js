// NaN not a number
//let name = prompt("nombre?");
//alert("Holaa " + name);

// let num = 10
// num += 5 // suma
// num -= 5 // resta
// num *= 5 // multi
// //num /= 5  división
// num %= 6 // diferencia entre 10 * 6 = 2

//document.write(num); escribe en la pantalla
saludo = 'hola pepe '
pregunta = '¿como estas?'

name = "Marco Bravo"

frase = `Soy ${name} y estoy estudiando JS`

// document.write(frase);

title = `
    <h2>Hello world!</h2>
    <p>este es un texto de prueba.</p>
`;

//document.write(title)

/* let num1 = 20;
let num2 = 3; */

// document.write(num1 == num2)
// document.write(num1 != num2)
// document.write(num1 === num2)
// document.write(num1 < num2)

arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

/**
 * * for of crea un ciclo donde se guarda el contenido de la arrayNumber
 * * en number.
 */
/* for (const number of arrayNumber) {
    document.write(`\n${number}`)
} */

let valor1 = true;
let valor2 = false;

let resultado = valor1 && valor2

// el símbolo ! es para invertir el booleano, solo booleanos
// document.write(!resultado)

// ? Condicionales If else 

nombre = "bravo";
function condicionales () {
    if(nombre == "marco"){
        alert(`Tu nombre es ${nombre}`)
    } else if (nombre == "bravo"){
        alert(`Tu nombre es ${nombre}`)
    } else {
        alert(`Como cresta te llamai?`)
    }
}

// condicionales()
console.log("Hola mundo")
console.log("Hola marcoDesk")