function handleSent(event) {
    event.preventDefault();
    const lista = document.querySelector(".lista");

    const itemLista = document.createElement("li");
    itemLista.textContent = event.target[0].value;

    event.target[0].value = "";

    lista.appendChild(itemLista);
}

const lista = document.querySelector(".lista");

lista.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});
