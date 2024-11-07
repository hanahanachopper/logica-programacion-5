// El número secreto es 8 y cualquier número del 1 al 100 que contenga un 8
const numeroSecreto = 8;

// Función para verificar si el número contiene el dígito 8
function contieneEl8(numero) {
    return numero.toString().includes('8'); // Comprobamos si el número contiene '8'
}

// Función principal del juego
function adivinanza() {
    const input = document.getElementById("userInput");
    let numeroUsuario = parseInt(input.value); // Convertir el valor ingresado a número
    const messageDiv = document.getElementById("messages");

    // Validamos si el valor ingresado es un número
    if (isNaN(numeroUsuario)) {
        messageDiv.innerHTML = "<p class='error'>Por favor, ingresa un número válido.</p>";
        input.value = ""; // Limpiar el campo de entrada
        return; // Si no es un número, no hacer nada más
    }

    // Validamos que el número esté entre 1 y 100
    if (numeroUsuario < 1 || numeroUsuario > 100) {
        messageDiv.innerHTML = "<p class='error'>Por favor, ingresa un número entre 1 y 100.</p>";
        input.value = ""; // Limpiar el campo de entrada
        return;
    }

    // Si el número contiene el dígito 8, el usuario gana
    if (contieneEl8(numeroUsuario)) {
        messageDiv.innerHTML = `<p class='success'>¡Felicidades! Has ganado.</p>`;

        // Mostrar el GIF de victoria
        const gif = `<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZrNHAwbDBqenltb21zMnowN3gwbXh4bXpkd2p5ZmJ5eGVhZzl4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.webp" alt="GIF de victoria" width="300" />`;
        messageDiv.innerHTML += gif;

        input.disabled = true; // Deshabilitar el input una vez adivinado
        document.querySelector("button").disabled = true; // Deshabilitar el botón
    } else {
        // Si el número no contiene el dígito 8, dar feedback y pedir otro intento
        messageDiv.innerHTML = `<p class='error'>Ups! Vuelve a intentarlo.</p>`;
        input.value = ""; // Limpiar el campo de entrada
        input.focus(); // Enfocar el input para el siguiente intento
    }
}