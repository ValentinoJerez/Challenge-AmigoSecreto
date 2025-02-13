let amigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo.trim() === "") {
        alert("¡Por favor, ingresa un nombre válido!");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("¡Ese amigo ya está en la lista!");
        return;
    }

    amigos.push(nombreAmigo);
    actualizarListaAmigos(); // Actualizar la lista
    document.getElementById("amigo").value = "";
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        const nombreAmigo = amigos[i];
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombreAmigo;
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("¡Necesitas al menos dos amigos para hacer el sorteo!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <li class="result-item">
            <span class="result-name">${amigoSecreto}</span>
        </li>
    `;
}