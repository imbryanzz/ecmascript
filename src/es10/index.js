// Acá aprendimos a usar el .flat que nos sirve para devolver una matriz con cualquier sub-matriz aplanada, ver y entender como estan estructurados los elementos
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

let array1 = [1,2,3,4,5];

// Y acá aprendimos el .flatmap, que me permite mapear(o recorrer mi lista), despues pasarle una función y luego aplanarlo segun el resultado
console. log(array1.flatMap(value => [value, value * 2]));

// Como s epuede ver, acá usamos el .trimStart y el .trimEnd para eliminar espacios vacios en nuestro string(el .trimStrat elimina los espacios vacios al inicio y el .trimEnd elimina los espacios en blanco de el final de nuestro string)
let hello = '         hello world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello world         ';
console.log(hello2);
console.log(hello2.trimEnd());

// Acá aprenderemos a usar el '' el cual nossirve para poder pasar de forma opcional el parametro de error al valor de de cash
try {

}catch {
   error
}

// Acá usamos y aprendimos una herramienta muy util que es el .fromEntries, el cual se usa para convertir clave valor en un objeto como se muestra a continuación
let entries = [["name", "Bryan"], ["age",18]];
console.log(Object.fromEntries(entries));

// Esto nos sirve para regresarnos y ver el valor opcional( o descripción) del Symbol 
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);