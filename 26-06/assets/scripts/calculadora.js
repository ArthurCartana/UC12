//---------------- Números ----------------------------
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
//---------------- Operações --------------------------
const btnClear = document.getElementById("btnC");
const btnVezes = document.getElementById("btn*");
const btnDividir = document.getElementById("btn/");
const btnMais = document.getElementById("btn+");
const btnMenos = document.getElementById("btn-");
const btnIgual = document.getElementById("btn=");

const texto = document.querySelector("h1");

const resultado = document.querySelector(".visor")


const operadores = [
    {name: btn0, type: "numero", value: "0"},
    {name: btn1, type: "numero", value: "1"},
    {name: btn2, value: "2"},
    {name: btn3, value: "3"},
    {name: btn4, value: "4"},
    {name: btn5, value: "5"},
    {name: btn6, value: "6"},
    {name: btn7, value: "7"},
    {name:btn8, value: "8"},
    {name: btn9, value: "9"},
    {name: btnClear, value: "clear"},
    {name: btnVezes, value: "*"},
    {name: btnDividir, value: "/"},
    {name: btnMais, value: "+"},
    {name: btnMenos, value: "-"},
    {name: btnIgual , value: "="}

]

let valorAtual = ""


operadores.forEach((botao) => {
    console.log(botao)

    botao.name.addEventListener("click", () => {
        resultado.innerHTML = botao.value

        if(botao.type === "numeros") {
            valorAtual += botao.value
            resultado.innerHTML = valorAtual
            console.log(valorAtual)

        }
    })
})
