// getElementById("id") captura um elemento via id
const btn = document.getElementById("btn");
// querySelector ("seletor") captura um elemento por tag, classe ou id
const div = document.querySelector("div");
const texto = document.querySelector("h1");
// querySelectorAll captura TODOS os elementos daquela tag ou classe
// ele armazena dentro de um array
const titulos = document.querySelectorAll("h2");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const link = document.querySelector("a");

// para dar função ao botão, adicionamos um evento a ele
// eventos podem ser de vários tipos, mas vamos usar um de clique
// addEventListener adiciona um evento ao elemento, e precisamos passar DOIS PARÂMETROS:
// o primeiro é qual ação vai disparar esse evento, sempre entre aspas
// o segundo é qual a função o evento vai disparar
btn.addEventListener("click", () => {
    if (div.style.backgroundColor == "grey") {
        div.style.backgroundColor = "white"
        texto.style.color = "black"
    } else {
        div.style.backgroundColor = "grey"
        texto.style.color = "white"
    }
});

btn2.addEventListener("click", () => {

    // for 'comum'
    /* for (let i = 0; i < titulos.length; i++) {
        titulos[i].style.color = "royalblue"
    } */

    // forEach
    /*  titulos.forEach((titulo) => {
         titulo.style.color = "blue"
     }); */

    // for of
    for (let titulo of titulos) {
        titulo.style.color = "blue"
    }
});

btn3.addEventListener("click", () => {
    // elemento.textContent serve para capturar OU alterar o texto PURO de um elemento
    /* if (texto.textContent == "Este texto vai ser trocado") {
        texto.textContent = "Trocou"
    } else {
        texto.textContent = "Este texto vai ser trocado"
    } */

    if (texto.innerHTML == "Este texto vai ser <span>trocado</span>") {
        texto.innerHTML = "O texto <span>mudou</span>"
    } else {
        texto.innerHTML = "Este texto vai ser <span>trocado</span>"
    }
});

btn4.addEventListener("click", () => {
    // getAttribute ("atributo") pega o valor de algun atributo
    // setAttribute ("atributo, novoAtributo") troca o atributo
    link.textContent = "Vá para o youtube"
    link.setAttribute("href", "http://youtube.com")
});