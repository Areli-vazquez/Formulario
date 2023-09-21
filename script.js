let Enviarform = document.getElementById("Enviarform");
let Limpiarform = document.getElementById("Limpiarform");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

Enviarform.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Enviado";
    Limpiarform.classList.add("disable");
    Enviarform.classList.remove("disable");
}
Limpiarform.onclick = function() {
    nameInput.style.maxHeight = "60";
    title.innerHTML = "Campos Limpios";
    Limpiarform.classList.remove("disable");
    Enviarform.classList.add("disable");
}