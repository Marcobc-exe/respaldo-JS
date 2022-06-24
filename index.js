// Archivo sobre asincronias en JavaScript

const doAsyncStuffWithCallback = (num1, num2, callback) =>{
    const result = num1 + num2;
    return setTimeout(() => {
        callback(result)
    }, 500)
}

const doAsyncStuffWithPromises = (num1, num2) => {
    const result = num1 + num2;
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(result)
        }, 500)
    })
}

doAsyncStuffWithCallback(1, 3, (result) => {
     console.log(result);
});

doAsyncStuffWithPromises(1, 3)
    .then(result => console.log(result))

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const multiplicados = numeros.map(x => x * 2)

multiplicados.forEach(x => {
    console.log(x)
});