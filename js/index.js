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
/* saludo = 'hola pepe '
pregunta = '¿como estas?'

name = "Marco Bravo"

frase = `Soy ${name} y estoy estudiando JS`

// document.write(frase);

title = `
    <h2>Hello world!</h2>
    <p>este es un texto de prueba.</p>
`;
 */
//document.write(title)

/* let num1 = 20;
let num2 = 3; */

// document.write(num1 == num2)
// document.write(num1 != num2)
// document.write(num1 === num2)
// document.write(num1 < num2)

/**
 * * for of crea un ciclo donde se guarda el contenido de la arrayNumber
 * * en number.
 */
/* for (const number of arrayNumber) {
    document.write(`\n${number}`)
} */

let valor1 = true;
let valor2 = false;

// let resultado = valor1 && valor2

// el símbolo ! es para invertir el booleano, solo booleanos
// document.write(!resultado)

// ? Condicionales If else 

// nombre = "bravo";
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

const pc = {
    nombre: "marco@dev",
    cpu: "Ryzen 5 2600",
    ram: "16GB 3200Mhz",
    gpu: "Radeon RX 470 4GB",
    almacenamiento: "1TB"
}

let nombre = pc["nombre"]
let cpu = pc["cpu"]
let ram = pc["ram"]
let gpu = pc["gpu"]

let descripcion = `El nombre de mi pc: ${nombre}
RAM: ${ram}
CPU: ${cpu}
GPU: ${gpu}`;

// ? bucles for, while, do while y +

/* let numero = 0;

do {
    console.log(numero)
    numero++
} while (numero < 5)

while (numero < 1000) {
    if (numero == 100) break;
    if (numero != 100) console.log(numero);
    numero++ 
} */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let fruitsName = ["Apple", "Orange", "Strawberry", "Pinapple", "Tomato", "Banana"]

// ? Funciones 

// * for of recolecta la info del array
function collectingIndices () {
    for ( fruits of fruitsName ) {
        console.log(fruits)
    }
}

// * for in recolecta los indices del array
function collectingContent () {
    for ( fruits in fruitsName ) {
        console.log(fruits)
    }
}

// collectingContent()
// collectingIndices()

function saludar () {
    console.log("Holaaaa")
    return "La función se ejecutó correctamente."
}

let saludo = saludar()

console.log(saludo)
