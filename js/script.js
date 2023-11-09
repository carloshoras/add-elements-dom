 // Aquí tu código
const agregar = document.getElementById('agregar');
const ulLista = document.getElementById('lista');
agregar.addEventListener('click', function () {
    const texto = prompt('Qué elemento quieres introducir?');
    const ilElement = document.createElement('li');
    ilElement.textContent = texto;
    ulLista.appendChild(ilElement);
})