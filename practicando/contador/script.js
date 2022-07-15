// Obtener los elementos ID
const counter = document.getElementById("counter")
let number = 0

const increaseCounter = () => {
    counter.innerHTML = (number += 1)
}

const decreaseCounter = () => {
    counter.innerHTML = (number -= 1)
}

const resetCounter = () => {
    counter.innerHTML = 0
}