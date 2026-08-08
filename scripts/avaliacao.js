const parametros = new URLSearchParams(window.location.search);


const produto = parametros.get("produto");
const classificacao = parametros.get("classificacao");
const instalacao = parametros.get("instalacao");
const comentario = parametros.get("comentario");
const usuario = parametros.get("usuario");
const recursos = parametros.getAll("recursos");


console.log("Produto:", produto);
console.log("Classificação:", classificacao);
console.log("Instalação:", instalacao);
console.log("Recursos:", recursos);
console.log("Comentário:", comentario);
console.log("Usuário:", usuario);


// ===============================
// SALVAR A AVALIAÇÃO
// ===============================

// Recupera as avaliações já existentes
let avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];


// Cria um ID único para a avaliação
const idAvaliacao = Date.now().toString();


// Cria a nova avaliação
const novaAvaliacao = {
    id: idAvaliacao,
    produto: produto,
    classificacao: classificacao,
    instalacao: instalacao,
    recursos: recursos,
    comentario: comentario,
    usuario: usuario
};


// Verifica se esta avaliação já foi processada nesta página
const avaliacaoAtual = sessionStorage.getItem("avaliacaoAtual");


if (avaliacaoAtual !== idAvaliacao) {

    avaliacoes.push(novaAvaliacao);

    localStorage.setItem(
        "avaliacoes",
        JSON.stringify(avaliacoes)
    );

    sessionStorage.setItem(
        "avaliacaoAtual",
        idAvaliacao
    );

    console.log("Nova avaliação salva!");
}


console.log("Todas as avaliações:", avaliacoes);


// ===============================
// EXIBIR A AVALIAÇÃO ATUAL
// ===============================

const produtoTexto = document.querySelector("#produto");
const classificacaoTexto = document.querySelector("#classificacao");
const instalacaoTexto = document.querySelector("#instalacao");
const recursosTexto = document.querySelector("#recursos");
const comentarioTexto = document.querySelector("#comentario");
const usuarioTexto = document.querySelector("#usuario");


produtoTexto.textContent = produto;

classificacaoTexto.textContent =
    "⭐".repeat(Number(classificacao));

instalacaoTexto.textContent = instalacao;

recursosTexto.textContent =
    recursos.join(", ");

comentarioTexto.textContent =
    comentario || "Nenhum comentário informado";

usuarioTexto.textContent =
    usuario || "Anônimo";