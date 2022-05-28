// * Practice with methods

let numeros = [0, 1, 2, 3, 4, 5, 6]
let numeros1 = [0, 9, 8, true, 6]
let numeros2 = ["hola", 9, 8, 7, 6]

let newNumeros = numeros.concat(numeros1[3], numeros2[0])

// console.log(newNumeros)

let name1 = "marco bravo castillo"
let name2 = "marco"

// let result = name1.startsWith("a", 1)
// let result = name1.endsWith("l", 18)
// let result = name1.includes("avo casti")
let indexName = `${name1.length}`
let patata = ` patata `
let cantidadPatata = 5
// console.log(indexName)
let result = name1.padEnd(20 + 8 * cantidadPatata, patata)
console.log(`${result.length}`)
console.log(result)