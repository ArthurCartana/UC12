const h1 = document.querySelector("h1");
const btn0 = document.querySelector("button");
const div = document.querySelector("div");

btn0.addEventListener("click", () => {
    /*   Adiciona a classe escolhida ao elemento */
    h1.classList.add("texto")

    /* 
    elemento.classList.toggle("classe") adiciona uma classe SE o elemento NÃO TEM
    ELA AINDA, ou remove uma classe SE o elemento JÁ TEM ELA
    */
    h1.classList.toggle("texto")
    div.classList.toggle("esconder")
})

const menu = document.getElementById("menu-desktop");
const btn =document.getElementById("btn-menu")

btn.addEventListener("click", () => {
    menu.classList.toggle("menu-mobile")
})