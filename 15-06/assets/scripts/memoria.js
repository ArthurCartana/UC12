// Lista das imagens (8 figurinhas diferentes, cada uma vai formar um par)
const figurinhas = [
    "alisson.webp",
    "cristiano.webp",
    "endrick.webp",
    "mbape.webp",
    "messi.webp",
    "neymar.webp"
];

const caminho = "assets/images/";
const cover = caminho + "cover.png";

let cartasViradas = [];
let bloqueado = false;
let jogadas = 0;
let pares = 0;

const cardsContainer = document.getElementById("cards");
const jogadas2 = document.getElementById("jogadas");
const pares2 = document.getElementById("pares");


function criarBaralho() {
    return [...figurinhas, ...figurinhas];
}


function renderizarCartas() {
    const baralho = criarBaralho();

    baralho.forEach((nomeImagem) => {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.dataset.figurinha = nomeImagem;

        carta.innerHTML = `
            <div class="carta-inner">
                <div class="carta-frente">
                    <img src="${cover}" alt="verso da carta">
                </div>
                <div class="carta-verso">
                    <img src="${caminho}${nomeImagem}" alt="figurinha">
                </div>
            </div>
        `;

        carta.addEventListener("click", () => virarCarta(carta));
        cardsContainer.appendChild(carta);
    });
}

function virarCarta(carta) {
    if (bloqueado) return;
    if (carta.classList.contains("virada")) return;
    if (carta.classList.contains("encontrada")) return;

    carta.classList.add("virada");
    cartasViradas.push(carta);

    if (cartasViradas.length === 2) {
        jogadas++;
        jogadas2.textContent = jogadas;
        verificarPar();
    }
}

function verificarPar() {
    bloqueado = true;
    const [carta1, carta2] = cartasViradas;
    const ehPar = carta1.dataset.figurinha === carta2.dataset.figurinha;

    if (ehPar) {
        carta1.classList.add("encontrada");
        carta2.classList.add("encontrada");
        pares++;
        pares2.textContent = `${pares}/8`;
        resetarJogada();

        if (pares === figurinhas.length) {
            setTimeout(() => alert("Parabéns! Você encontrou todos os pares!"), 300);
        }
    } else {
        setTimeout(() => {
            carta1.classList.remove("virada");
            carta2.classList.remove("virada");
            resetarJogada();
        }, 800);
    }
}

function resetarJogada() {
    cartasViradas = [];
    bloqueado = false;
}


renderizarCartas();