function dostatInput() {
    var textik = document.querySelector('input').value;
    document.getElementById('input').value = ' ';
    addDiv(textik);
}

function addDiv(textik){
    const todoList = document.getElementById("todoList")

    const polozka = document.createElement("div");
    polozka.innerHTML = textik;
    polozka.classList.add("polozka");
    todoList.appendChild(polozka);

    const tlacitko = document.createElement("button");
    tlacitko.classList.add("gombik");
    tlacitko.addEventListener('click', () => {
        polozka.remove();
    })
    polozka.appendChild(tlacitko);
}