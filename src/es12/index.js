// Una de las caracteristicas añadidas a esta versión es el .replaceAll y lo que hace es reemplazar el valor pedido en todo el string, no solo una vez( como lo hace el promise.replace)
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console. log(replacedString2);

// Acá se comienzan a implementar metodos privados, los cuales se pueden utilizar dentro de las clases, asi que gracias a esto nos permitira definir que ese metodo seria privado y no se puede acceder como al metodo interno de una clase

class Message {
    #show(val) { // El simbolo que hace que el metodo sea privado es el numeral(#)
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!');

// Acá manejaremos el promise.any que es un objeto global de promise, cuyo argumento va a ser la forma de un array de promesas que vamos a pasarle, gestionando y capturando la respuesta de la primera promesa que sea resuelta de forma satisfactoris

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

// Acá Usaremos el WeakRef que nos permite mantener una referencia debil  a otr objeto sin evitar que ese objeto sea pasado o recogido por el garbage collector 

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}

// Nuevas asignaciones, acá haremos ejemplos

let isTrue = true;
let isFalse = false
console.log(isTrue &&= isFalse);

let itsTrue = true;
let itsFalse = false
console.log(itsTrue ||=  itsFalse);

let itIsTrue = undefined;
let itIsFalse = false
console.log(itIsTrue ??=  itIsFalse);

