// const { ayuda } = require('./helper.js')

const suma = (ns) => {
  let acumulado = 0;
  for (i = 0; i < ns.length; i++) {
    acumulado += ns[i];
  }
  ayuda()
  return acumulado;
} 

const numeros = [1, 2, 3, 4, 5];

const multiplicados = numeros.map(x => x * 2)

const frutas = [
    { nombre: 'Manzana' },
    { nombre: 'Pera' },
    { nombre: 'Platano' },
    { nombre: 'Naranja' },
    { nombre: 'Durazno' }
];

const parejas = numeros.map(x => [x, x])

const mascotas = [
  { nombre: 'Chanchito feliz', edad: 3, raza: 'perro' },
  { nombre: 'Pelusa', edad: 12, raza: 'gato' },
  { nombre: 'Puchini', edad: 12, raza: 'perro' },
  { nombre: 'Pulga', edad: 10, raza: 'perro' },
]
// edad promedio
const edades = mascotas.map(x => x.edad)
const resultado = suma(edades)
console.log(resultado / edades.length);
console.table(mascotas);
console.table(frutas);
console.table(numeros);
