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

// function saludar (nombre) {
//     let saludo = `Holaa ${nombre}`
//     return saludo
// }

// const saludar = (nombre) => {
//     let saludo = `Hola ${nombre} como estas?`
//     return saludo
// }

// let saludo = saludar("pepeeeee")

// console.log(saludo)

const saludar = nombre => console.log(`Hola ${nombre} que hay?`)

// let hola = saludar("Pepito")

// ? clases en Javascript

class animal {
    
    constructor(especie, edad, color) {
        this.especie = especie
        this.edad = edad
        this.color = color
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }

    verInfo() {
        console.log(this.info)
    }
}

let perro = new animal("perro", 2, "cafe")
let gato = new animal("gato", 3, "blanco")

// perro.verInfo()
// gato.verInfo()

// ? Métodos de cadenas

// let cadena = "cadena de prueba prueba prueba prueba prueba";
// let cadena = "abc ";
let cadena = "  hola  ";
let numero = 234
let cadena2 = " ";

let resultado = cadena.concat(cadena2) // une cadenas
let resultado2 = cadena.startsWith(cadena2) // (boolean)
let resultado3 = cadena.endsWith(cadena2) // (boolean)
let resultado4 = cadena.includes(cadena2) // (boolean), pregunta si esta cadena de caracteres se encuentra dentro de la otra

// IndexOf = (integer), retorna la posición en donde se encuentrea 'p' en la cadena (10), 
// si devuelve un -1 es porque no encontro la cadena
let resultado5 = cadena.indexOf("prueba") 
let resultado6 = cadena.lastIndexOf("prueba") 
let resultado7 = cadena.padStart(50, "tarado") // agrega al inicio el dato una cantidad de veces (50)
let resultado8 = cadena.padEnd(50, "tarado") // agrega al fianl el dato una cantidad de veces (50)
let resultado9 = cadena.repeat(5)
let resultado10 = cadena.split(" ") // separa y crea una array de la cadena por el 'espacio'
let resultado11 = cadena.substring(0, 19)
let resultado12 = cadena.toLowerCase()
let resultado13 = cadena.toUpperCase()
let resultado14 = numero.toString()
// console.log(2 + resultado14)
let resultado15 = cadena.trim()
// let resultado16 = cadena.
// let resultado17 = cadena.
// let resultado18 = cadena.

console.log(resultado15)