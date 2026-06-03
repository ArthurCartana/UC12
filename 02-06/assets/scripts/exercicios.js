const texto = document.querySelector("h1")


// EXERCÍCIO 1
const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    texto.textContent = "funcionou"
})

// EXERCÍCIO 2
const btnClasse = document.getElementById("btnClasse")
btnClasse.addEventListener("click", () => {
    texto.classList.toggle("texto")
})

// EXERCÍCIO 3
const lista = document.querySelector("ul")
const btnLista = document.getElementById("btnLista")
const item = document.createElement("li")

item.textContent = "C"
btnLista.addEventListener("click", () => {
    lista.appendChild(item)
})

// EXERCÍCIO 4
const botaoRem = document.getElementById("btnListaRem")

botaoRem.addEventListener("click", () => {
    lista.remove("B")
})

// EXERCÍCIO 5
const input = document.getElementById("input")
const p = document.querySelector("p")
input.addEventListener("change", () => {
    p.textContent = input.value
})