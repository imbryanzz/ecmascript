// En esta versión  nos permite devolver la clave y los valores de una matriz

// const data = {
//     frontend: 'Bryan',
//     BACKEND: ' Sofi',
//     design: 'Niña',
// }

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

// otra cosa que incluyeron en esta versión de ecmascript es el .values, y nos sirve para devolvernos los valores de un objeto a un arreglo
const data = {
    frontend: 'Bryan',
    BACKEND: ' Sofi',
    design: 'Niña',
}

const values = Object.values(data);
console.log(values)
console.log(values.length);

//
const string = 'Hello';
console.log(string.padStart(7,'Hi'));
console.log(string.padEnd(12, ' ------'));