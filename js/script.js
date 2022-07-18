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
// document.write(title)

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

// let valor1 = true;
// let valor2 = false;

// let resultado = valor1 && valor2

// el símbolo ! es para invertir el booleano, solo booleanos
// document.write(!resultado)

// ? Condicionales If else 

// nombre = "bravo";
// function condicionales () {
//     if(nombre == "marco"){
//         alert(`Tu nombre es ${nombre}`)
//     } else if (nombre == "bravo"){
//         alert(`Tu nombre es ${nombre}`)
//     } else {
//         alert(`Como cresta te llamai?`)
//     }
// }

// // condicionales()

// const pc = {
//     nombre: "marco@dev",
//     cpu: "Ryzen 5 2600",
//     ram: "16GB 3200Mhz",
//     gpu: "Radeon RX 470 4GB",
//     almacenamiento: "1TB"
// }

// let nombre = pc["nombre"]
// let cpu = pc["cpu"]
// let ram = pc["ram"]
// let gpu = pc["gpu"]

// let descripcion = `El nombre de mi pc: ${nombre}
// RAM: ${ram}
// CPU: ${cpu}
// GPU: ${gpu}`;

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
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let fruitsName = ["Apple", "Orange", "Strawberry", "Pinapple", "Tomato", "Banana"]

// ? Funciones 

// * for of recolecta la info del array
// function collectingIndices () {
//     for ( fruits of fruitsName ) {
//         console.log(fruits)
//     }
// }

// // * for in recolecta los indices del array
// function collectingContent () {
//     for ( fruits in fruitsName ) {
//         console.log(fruits)
//     }
// }

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

// const saludar = nombre => console.log(`Hola ${nombre} que hay?`)

// let hola = saludar("Pepito")

// ? clases en Javascript

// class animal {
    
//     constructor(especie, edad, color) {
//         this.especie = especie
//         this.edad = edad
//         this.color = color
//         this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }

//     verInfo() {
//         console.log(this.info)
//     }
// }

// let perro = new animal("perro", 2, "cafe")
// let gato = new animal("gato", 3, "blanco")

// perro.verInfo()
// gato.verInfo()

// ? Métodos de cadenas

// let cadena = "cadena de prueba prueba prueba prueba prueba";
// let cadena = "abc ";
// let cadena = "  hola  ";
// let numero = 234
// let cadena2 = " ";

// let resultado = cadena.concat(cadena2) // une cadenas
// let resultado2 = cadena.startsWith(cadena2) // (boolean)
// let resultado3 = cadena.endsWith(cadena2) // (boolean)
// let resultado4 = cadena.includes(cadena2) // (boolean), pregunta si esta cadena de caracteres se encuentra dentro de la otra

// // IndexOf = (integer), retorna la posición en donde se encuentrea 'p' en la cadena (10), 
// // si devuelve un -1 es porque no encontro la cadena
// let resultado5 = cadena.indexOf("prueba") 
// let resultado6 = cadena.lastIndexOf("prueba") 
// let resultado7 = cadena.padStart(50, "tarado") // agrega al inicio el dato una cantidad de veces (50)
// let resultado8 = cadena.padEnd(50, "tarado") // agrega al fianl el dato una cantidad de veces (50)
// let resultado9 = cadena.repeat(5)
// let resultado10 = cadena.split(" ") // separa y crea una array de la cadena por el 'espacio'
// let resultado11 = cadena.substring(0, 19)
// let resultado12 = cadena.toLowerCase() // Transforma toda la cadena a minusculas
// let resultado13 = cadena.toUpperCase() // Transforma toda la cadena a mayusculas
// let resultado14 = numero.toString() // lo Transforma a String
// let resultado15 = cadena.trim() // Elimina los espacios
// let resultado16 = cadena.trimEnd() // Elimina los espacios del final
// let resultado17 = cadena.trimStart() // Elimina los espacios del principio

// document.write(resultado14)

// ? Métodos de Arrays
// ! Transformadores

// let nombres = [ "Pepe", "Pelusa", "Marco", "Juanin", "Lucho", "Daniel" ];
// let number = [ 1, 5, 7, 6, 2, 3, 4 ]

// let out1 = nombres.pop() // Elimina el último elemento de un array y lo retorna 
// let out2 = nombres.shift() // Elimina el primer elemento de un array y lo retorna 

// Agrega un elemento al array al final de la lista y 
// retorna la nueva cantidad ("Integer") de elementos que tiene la array
// let out3 = nombres.push("Elizabeth", "Emilia")
// let out4 = nombres.reverse()
// let out5 = nombres.unshift() // Agrega elementos al inicio 
// let out6 = number.sort() // ordena la arrays de manera numerica o alfabeticamente
// let out7 = nombres.splice(2,4) // cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
// let result = nombres.padEnd(50, " patata ") // imprime la cantidad de indices del primer parametro y agrega el segundo parametro 

// document.write(out7)

// ! Accesores

// let out8 = number.join(" - ") // Une los elementos de un array en una cadena y la retorna
// let out9 = number.slice(0,-1) // Retorna una parte de la array, desde inicio a fin

// ! Repetidores

// Es una funcion flecha!!
// nombres.filter(name => document.write(name + "<br>"))
// resultado = nombres.filter(num => num.length > 5)

// document.write(resultado)

// ? FIN Métodos de Arrays

// ! Métodos Console

// console.log("Hola Emilia")
// console.assert(5 < 2) // Se muestra un msn de error en consola sí la info es false
// console.clear() // para limpiar la consola
// console.error("Error en el código")
// console.info("mensaje de información.com") // msn de informacion
// console.log("hola") // msn de depuracion
// console.count()
// console.countReset()
// console.count()

// ? FIN Métodos Console

// ? DOM - Document Object Model
/* 
    * Node en el DOM
    Un Nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el body o incluso las etiquetas de una lista.
    Pero a veces suelen ser otro tipo de elemento.

    * Tipo de Nodes
    1) Document: Es el nodo raíz, a partir del cual derivan el resto de nodos.
    2) Element Node: Los nodos definidos como etiquetas HTML.
    3) Text Node: El texto dentro de un 'element node' se considera un nuevo nodo hijo de tipo 'text node'
    4) Attribute Node: Los atributos de las etiquetas definen nodos.
    5) Comentarios y otros: Los comentarios también son nodes.

    * Document - Métodos de selección de elementos
    document.getElementBy() -> Obtener un elemento ID.
    document.getElementsByTagName() -> Obtener todos los elementos que coincidan con el nombre de la etiqueta especificada.
    document.querySelector() -> Devuelve el primer elemento que coincida con el grupo especificado de selectores.
    document.querySelectorAll() -> Devuelve todos los elementos que coincidan con el grupo especificado de selectores.
*/

// parrafo = document.getElementById("parrafo")
// parrafo = document.getElementsByTagName("p")
// parrafo = document.querySelector(".parrafo")
// rancio = document.querySelector("#rancio")
// parrafo = document.querySelectorAll(".parrafo")
// document.write(parrafo[5])
// document.write(rancio)

/*
    * Métodos para definir, obtener y eliminar valores de atributos.
    variableName.setAttribute() -> Modifica o agrega el valor de un atributo
    variableName.getAttribute() -> Obtiene el valor de un atributo
    variableName.removeAttribute() -> Remueve el valor de un atributo
*/

// const rangoEtario = document.querySelector(".rangoEtario");
// rangoEtario.setAttribute("type","color")
// rangoEtario.getAttribute("type")
// valorAtributo = rangoEtario.removeAttribute("type","")

/* 
    * Atributos Globales
    contentEditTable -> Indica sí el elemento puede ser modificable por el usuario
    dir -> Inidica la direccionalidad del texto - NO ME FUNCIONA
    hidden -> Oculta un elemento
    tabindex -> Indica sí el elemento puede obtener un focus de input
    title -> Contiene un texto con información relacionada al elemento al que pertenece.
*/

// const titulo = document.querySelector(".titulo")
// const btnMostrar = document.getElementById("btnMostrar")
// const btnOcultar = document.getElementById("btnOcultar")

// btnMostrar.setAttribute("disabled", "false")

// titulo.setAttribute("contentEditable", "false")
// titulo.setAttribute("dir", "ltr") // no funciona
// titulo.setAttribute("hidden", "true")
// titulo.setAttribute("title", "uwuuuu")

// const mostrarTitulo = () => titulo.removeAttribute("hidden")
// const ocultarTitulo = () => titulo.setAttribute("hidden", "true")

/* 
    * Atributos de Inputs
    className
    value
    type
    accept
    form
    minlenght
    placeholder
    required
*/

const input = document.querySelector(".input-normal")

// document.write(input.className) // mostrando el valor 'class'
// document.write(input.value) // mostrando el valor
// document.write(input.type = "range") // mostrando el tipo de input, o cambiandolo
// input.type = "file"
// input.accept = "image/png"
input.minLength = 4
input.maxLength = 8

// ? FIN - DOM