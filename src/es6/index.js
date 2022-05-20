function newFunction (name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6

function newFunction2 (name = 'oscar', age = 32, country = 'MX') {
     console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo',23, 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello  +   ' '  + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);

// Los templates literals sirven para concatenar variables y su sintaxis es ${}

let lorem = "Qui consequatur. Commodi. Ipsum velduis yet minima \n" +   "otra frase epica que necesitamos.";

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX',
}

// console.log(person.name, person.age);

// let { name, age, country} = person;

// console.log(name, age, country);


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2]; // Al usar los tres puntos, lo que estamos haciendo es crear una nueva lista con el valor ingresado y con los valores de las listas pasadas

console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

// Es mas recomendale en un bloque, usar las variables let y const, ya que, no se pueden redefinir por otro valor. En cambio el var si puede ser redefinido por otro valor, haciendo que reemplace el anterior y pueda ocasionar un error

const a = 'b';
a = 'a';

let name = 'Bryan';
let age = 18;

// es5
Obj = { name: name, age: age};

// es6
obj2 = { name, age};

console.log(obj2);

const names = [
    {name: 'Sofia',
      age: 17,},

      {name: 'Bryan',
      age: 18,}
]

let lisOfNames = names.map( function (item) {
    console.log(item.name);
})

let lisOfNames2 = names.map(item => console.log(item.name));

// Esta es otra forma de hacerlo con una funcion flecha y una funcion anonima
const lisOfNames3 = (name, age, country) => {
    // ... Aca el bloque de codigo
}

// Si solo se pasara un dato se puede ver también asi

const lisOfNames4 = name => {
    // ... y aca el bloque de codigo
}

// Esta forma es mucho mas amigable con arrow function
const square = num => num* num;


// Acá trabajaré con las promseas, la cual su función sera que ejecute una acción en un futuro
const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(response =>console.log(response))
.then(() => console.log('Hola'))
.catch(error => console.log(error));


// Acá veremos como crear una calculadora mediante una clase usandola y en ella creando un metodo
class calculator {
    constructor() { // La palabra constructor es escencial para crear una clase
        this.valueA = 0;
        this.valueB = 0;
    }
    // Este es el metodo
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA  +   this.valueB;
    }
}

const calc = new calculator ();

console.log(calc.sum(2,2));

//Acá estamos probando el import y export de otr archivo js
import { hello } from './module';

hello();

// los generators son una función especial que retorna una serie de valores segun el algoritmo definido
function* helloWorld () { // el * es clave para decirle a la terminal que este es un generator
    if (true) {
        yield 'Hello,';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);