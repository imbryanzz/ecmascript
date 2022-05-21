// Una de las adiciones en esta versión de ecmascript es el dymanic import, que somo su nombre lo die, nos permitira importar codigo de forma dinamica

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js") // Utilizamos este await para que espere cuando el addEvenListener se ejecute, ya cuando le de click ahi si realizará el import dinamico
    module.hello(); // Acá lo que hacemos es llamar a nuestra funcion, y acceder ya a la otra funión que esta dentro de esta gracias a nuestro import, entonces se accede a ella y se declara
});

// Otra de las actualizacines fue crear una herramienta que nos permita trabajar con numeros enteros muy grandes como por ejemplo 2^53 y que los datos sean mas fiables

const bigNumber = 900719954740991n;
const anotherBigNumber = BigInt(900719954740991);

console.log(bigNumber);
console.log(anotherBigNumber);

// Otra adición a esta actualización fue promise.AllSetLed, lo cual nos devolverá una promesa despues de que todas las promesas se hayan cumplido o rechazado en una serie de objetos donde se describe el resultado de cada promesa

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response))

// Otro elemento añadido es el globalThis el cual nos proporciona una forma estandar de acceder a nuestro valor global

console.log(window);
console.log(globalThis);

// otra adición fue el operador null el cual es un operador logico que nos devuelve su operando deel lado derecho cuando el operador del lado izquierdo es nulo o indefinido y devuelte el operador del lado izquierdo

const fooo = null ?? 'default string'; // Se utiliza doble signo de pregunta para usar este nuevo perador
console.log(fooo);

//También se agregó el Optional chaining, con esta herramienta vamos a poder trabajar dierentes niveles de recursos como arreglos, objetos y listas entre otros

const user = {};
console.log(user?.profile?.email); // se le asignan estos signos de interrogación a la ruta, para que si no se encuentra el valor pedido o necesitado, no se rompa la ejecución de nuestro cogido

if (user?.profile?.email) { // se ponen los signos de interrogación en la ruta hasta llegar a lo que quieres manejar
    console.log('email');
} else {
    console.log('fail');
};



