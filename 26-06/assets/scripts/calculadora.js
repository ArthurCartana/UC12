const numeros = document.querySelectorAll(".numero");
const opercaoes = document.querySelector(".operacao");
const texto = document.querySelector("h1");
const visor = document.querySelector(".item")


let primeiroNumero = "";
let segundoNumero = "";
let numeroVazio = false;
let operacao = "";
let valorAtual = "";


numeros.forEach(botao => {
    botao.addEventListener("click", () => {
        if (!numeroVazio) {
            primeiroNumero += botao.textContent
            visor.textContent = primeiroNumero
        } else {
            segundoNumero += botao.textContent
            visor.textContent = primeiroNumero + operacao + segundoNumero
        }
    })
});

document.getElementById("btn+").addEventListener("click", () => {
    operacao = "+";
    numeroVazio = true;
})

document.getElementById("btn-").addEventListener("click", () => {
    operacao = "-";
    numeroVazio = true;
})

document.getElementById("btn*").addEventListener("click", () => {
    operacao = "*";
    numeroVazio = true;
})

document.getElementById("btn/").addEventListener("click", () => {
    operacao = "/";
    numeroVazio = true;
})

document.getElementById("btnC").addEventListener("click", () => {
    primeiroNumero = "";
    segundoNumero = "";
    numeroVazio = false;
    operacao = "";
    valorAtual = "";
    visor.textContent = "0"
})

document.getElementById("btn=").addEventListener("click", () => {

    const num1 = Number(primeiroNumero)
    const num2 = Number(segundoNumero)
    
    let resultado;
    switch(operador){
        case "+":
            
            resultado = num1 + num2
            break
        case "-":
            resultado = num1 - num2
            break
        case "*":
            resultado = num1*num2
            break
        case "/":
            if(num2 == 0){
                resultado = "Erro"
                
            }else{
                resultado = num1/num2
            }
            break

            default:
                resultado = "Erro"
                
}

    visor.textContent = resultado

    primeiroNumero = resultado.toString()
    segundoNumero = ""
    operador = ""
    numeroVazio = false
})