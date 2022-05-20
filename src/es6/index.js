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

console.log(person.name, person.age);

let { name, age, country} = person;

console.log(name, age, country);


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



