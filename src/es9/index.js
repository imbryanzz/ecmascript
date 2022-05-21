// Una de las principales adiciones a esta version fue el operador de reposo, el cual puede extraer las propiedad de un objeto que aun no se ha construido

// const obj = {
//     name: 'Bryan',
//     age: 18,
//     country: 'COL',
// };

// let { name, ...all} = obj;
// console.log(name, all);

// Si quiero simplemente suprimir algo de mi objeto, se hace lo siguiente

// const obj = {
//     name: 'Bryan',
//     age: 18,
//     country: 'COL',
// };

// let { country, ...all} = obj; // Se escribe el objeto a suprimir
// console.log(all); // Solo se llama el resto del objeto



// Si queremos anidar dos o mas objetos, solo se le agrega al objeto el operador de propagación como se ve a continuación
 const obj = {
     name: 'Bryan',
     age: 18,
 };

 const obj1 = {
     ...obj,
     country: 'COL',
 }

 console.log(obj1);

// En esta versión de ecmascript se agregó tambien el promise.finally que es para saber cuando ha terminado un llamado y poder ejecutar una función o logica de codigo dependiendo el caso
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'),3000)
        : reject (new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error =>console.log(error))
.finally(() => console.log('Finalizó'));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);


