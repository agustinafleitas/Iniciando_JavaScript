// Accedemos a los elementos del DOM y los almacenamos en una variable
const parrafo = document.getElementById("parrafo");
const btnTexto = document.getElementById("btnTexto");
const btnColor = document.getElementById("btnColor");
const btnSaludo = document.getElementById("btnSaludo");

// Botón 1: Cambiar texto del párrafo
btnTexto.addEventListener("click", function() {
    parrafo.textContent = "¡El texto ha sido cambiado!";
});

// Botón 2: Cambiar color del párrafo
btnColor.addEventListener("click", function() {
    parrafo.style.color = "blue";
});

// Botón 3: Pedir el nombre y mostrar saludo
btnSaludo.addEventListener("click", function() {
    let nombre = prompt("¿Cómo te llamas?");

    // Si el usuario ingresó algo, mostramos saludo
    if (nombre) {
        parrafo.textContent = "¡Hola, " + nombre + "!";
        parrafo.style.color = "green";
    } else {
        // Si no ingresó nada
        parrafo.textContent = "No ingresaste ningún nombre.";
        parrafo.style.color = "red";
    }
});