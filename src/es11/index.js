// Una de las adiciones en esta versión de ecmascript es el dymanic import, que somo su nombre lo die, nos permitira importar codigo de forma dinamica

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js") // Utilizamos este await para que espere cuando el addEvenListener se ejecute, ya cuando le de click ahi si realizará el import dinamico
    module.hello(); // Acá lo que hacemos es llamar a nuestra funcion, y acceder ya a la otra funión que esta dentro de esta gracias a nuestro import, entonces se accede a ella y se declara
});
