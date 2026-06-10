// BANCO DE PERGUNTAS

const perguntas = [
    {
        categoria: "Campeonato Inglês",
        texto: "Qual o maior vencedor da Premier League?",
        opcoes: ["Arsenal", "Manchester City", "Liverpool", "Manchester United"],
        correta: 3,
        explicacao: "O Manchester United conquistou 13 títulos, sendo o líder dessa lista.",
    },

    {
        categoria: "Champions League",
        texto: "Qual time nunca ganhou uma Champions League?",
        opcoes: ["Hamburgo", "Nottingham Forest", "Roma", "Porto"],
        correta: 2,
        explicacao: "Por incrível que parece o Roma nunca ganhou uma edição de Champions League.",
    },

    {
        categoria: "Jogadores",
        texto: "Em que ano Ibrahimovic se aposentou?",
        opcoes: ["2022", "2024", "2025", "2023"],
        correta: 3,
        explicacao: "Ibrahimovic se aposentou em 2023.",
    },

    {
        categoria: "Premier League",
        texto: "Bruno Fernandes bateu o recorde de assistências na Premier League na temporada 25/26, quantas assistências ele deu?",
        opcoes: ["22", "21", "19", "24"],
        correta: 1,
        explicacao: "Bruno Fernandes deu incríveis 21 assistências.",
    },

    {
        categoria: "Origem do futebol",
        texto: "Qual país criou o futebol?",
        opcoes: ["Inglaterra", "Escócia", "Brasil", "Indonésia"],
        correta: 0,
        explicacao: "O futebol foi criado na Inglaterra em 1863.",
    },

    {
        categoria: "Copa do Mundo",
        texto: "Qual seleção ganhou a primeira edição da Copa do Mundo?",
        opcoes: ["Argentina", "Itália", "Alemanha", "Uruguai"],
        correta: 3,
        explicacao: "Uruguai ganhou a primeira edição da Copa do Mundo em 1930.",
    },

    {
        categoria: "Premier League",
        texto: "Qual clube ficou 30 anos sem vencer a Premier League?",
        opcoes: ["Manchester City", "Liverpool", "Manchester United", "Chelsea"],
        correta: 1,
        explicacao: "Liverpool ficou sem ganhar a Premier League de 1990 a 2020.",
    },

    {
        categoria: "Conhecimentos básicos",
        texto: "Quantos metros tem da marca do pênalti até a goleira?",
        opcoes: ["10 metros", "9 metros", "7 metros", "11 metros"],
        correta: 3,
        explicacao: "A distância da marca do pênalti até a goleira é de 11 metros.",
    },

    {
        categoria: "Copa do Mundo",
        texto: "Quem marcou o gol da semifinal de 2002, Brasil 1 x 0 Turquia",
        opcoes: ["Rivaldo", "Roberto Carlos", "Ronaldo", "Ronaldinho"],
        correta: 2,
        explicacao: "Ronaldo marcou o gol que classificou o Brasil para a final.",
    },

    {
        categoria: "Copa do Mundo",
        texto: "Quais seleções disputaram a final da Copa do Mundo de 2002?",
        opcoes: ["Brasil x Itália", "Alemanha x Itália", "Alemanha x Brasil", "Brasil x Espanha"],
        correta: 2,
        explicacao: "A final foi disputada entre Brasil e Alemanha.",
    }

]

// ESTADO DO JOGO

let indiceAtual = 0;
let pontos = 0;
let acertos = 0;
let respostas = [];

// ELEMENTOS

const telaInicio = document.getElementById("tela-inicio");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");

const btnComecar = document.getElementById("btn-comecar");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

const numeroPergunta = document.getElementById("numero-pergunta");
const placarAtual = document.getElementById("placar-atual");
const barraFill = document.getElementById("barra-fill");
const categoriaBadge = document.getElementById("categoria-badge");
const textoPergunta = document.getElementById("texto-pergunta");
const opcoesContainer = document.getElementById("opcoes-container");
const feedback = document.getElementById("feedback");
const feedbackIcone = document.getElementById("feedback-icone");
const feedbackTexto = document.getElementById("feedback-texto");

// FUNÇÕES

function mostrarTela(tela) {
    // seleciona tudo que tem na classe 'tela'
    document.querySelectorAll(".tela").forEach((t) => t.classList.remove("ativa"));
    tela.classList.add("ativa");
}

function carregarPergunta() {
    const pergunta = perguntas[indiceAtual];

    // Atualiza header
    numeroPergunta.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    placarAtual.innerHTML = `<i class="fas fa-star"></i> ${pontos} pts`;
    barraFill.style.width = `${(indiceAtual / perguntas.length) * 100}%`;

    // Atualiza pergunta
    categoriaBadge.textContent = pergunta.categoria
    textoPergunta.textContent = pergunta.texto

    // Limpa opções e feedback
    opcoesContainer.innerHTML = "";
    feedback.classList.add("escondido");
    btnProxima.classList.add("escondido");

    // Cria botões de opção
    pergunta.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.classList.add("opcao-btn");
        btn.innerHTML = `<span class="opcao-letra">${i + 1}</span> ${opcao}`;
        btn.addEventListener("click", () => responder(i, btn));
        opcoesContainer.appendChild(btn);
    });
}

function responder(indiceEscolhido, btnClicado) {
    const pergunta = perguntas[indiceAtual];
    const acertou = indiceEscolhido === pergunta.correta

    // Desabilita todos os botões
    document.querySelectorAll(".opcao-btn").forEach((btn, i) => {
        btn.disabled = true;
        if (i === pergunta.correta) btn.classList.add('correta');
        if (i === indiceEscolhido && !acertou) btn.classList.add("errada");
    });

    // Atualiza pontos e registro
    if (acertou) {
        pontos += 10;
        acertos++;
    }
    respostas.push({ pergunta, escolhida: indiceEscolhido, acertou });

    // Mostra feedback
    feedback.classList.remove("escondido", "feedback-certo", "feedback-errado");
    if (acertou) {
        feedback.classList.add("feedback-certo");
        feedbackIcone.innerHTML = "✅";
        feedbackTexto.textContent = `Correto! ${pergunta.explicacao}`;
    } else {
        feedback.classList.add("feedback-errado");
        feedbackIcone.innerHTML = "❌";
        feedbackTexto.textContent = `Errado! ${pergunta.explicacao}`;
    }

    btnProxima.classList.remove("escondido");

    // Última pergunta: muda texto do botão
    if (indiceAtual === perguntas.length - 1) {
        btnProxima.innerHTML = `Ver Resultado <i class="fas fa-flag-checkered"></i>`;
    } else {
        btnProxima.innerHTML = `Próxima <i class="fas fa-arrow-right"></i>`;
    }
}

function proximaPergunta() {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    mostrarTela(telaResultado);
    barraFill.style.width = "100%";

    const erros = perguntas.length - acertos;
    const porcentagem = (acertos / perguntas.length) * 100;

    // Emoji e mensagem
    const resultadoEmoji = document.getElementById("resultado-emoji");
    const resultadoTitulo = document.getElementById("resultado-titulo");
    const resultadoDescricao = document.getElementById("resultado-descricao");

    if (porcentagem === 100) {
        resultadoEmoji.textContent = "🏆";
        resultadoTitulo.textContent = "Perfeito!";
        resultadoDescricao.textContent = "Você acertou tudo! Incrível!";
    } else if (porcentagem >= 70) {
        resultadoEmoji.textContent = "🎉";
        resultadoTitulo.textContent = "Muito bem!";
        resultadoDescricao.textContent = "Você foi muito bem! Continue assim!";
    } else if (porcentagem >= 40) {
        resultadoEmoji.textContent = "📒";
        resultadoTitulo.textContent = "Quase lá!";
        resultadoDescricao.textContent = "Revise o conteúdo e tente novamente!";
    } else {
        resultadoEmoji.textContent = "💪";
        resultadoTitulo.textContent = "Continue estudando!";
        resultadoDescricao.textContent = "Revise o conteúdo e tente novamente!";
    }

    document.getElementById("acertos-numero").textContent = acertos;
    document.getElementById("pontos-numero").textContent = pontos;
    document.getElementById("erros-numero").textContent = erros;

    // Revisão
    const revisaoLista = document.getElementById("revisao-lista");
    revisaoLista.innerHTML = "";
    respostas.forEach((r, i) => {
        const item = document.createElement("div");
        item.classList.add("revisao-item", r.acertou ? "revisao-certa" : "revisao-errada");
        item.innerHTML = `
        <span class="revisao-icone">${r.acertou ? "✅" : "❌"}</span>
        <div>
         <strong>Q${i + 1}:</strong> ${r.pergunta.texto}
         ${!r.acertou ? `<br><small>Resposta certa: <b>${r.pergunta.opcoes[r.pergunta.correta]}</b></small>` : ""}
        </div>
        `;
        revisaoLista.appendChild(item);
    });
}

function reiniciar() {
    indiceAtual = 0;
    pontos = 0;
    acertos = 0;
    respostas = [];
    barraFill.style.width = "0%";
    mostrarTela(telaInicio);
}

// EVENTOS

btnComecar.addEventListener("click", () => {
    mostrarTela(telaQuiz);
    carregarPergunta();
});

btnProxima.addEventListener("click", proximaPergunta);
btnReiniciar.addEventListener("click", reiniciar);