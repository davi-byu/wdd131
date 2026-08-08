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

let numeroAvaliacoes = Number(
localStorage.getItem("numeroAvaliacoes")
) || 0;

numeroAvaliacoes++;

localStorage.setItem(
"numeroAvaliacoes",
numeroAvaliacoes
);

console.log(
"Número de avaliações:",
numeroAvaliacoes
);

const produtoTexto = document.querySelector("#produto");
const classificacaoTexto = document.querySelector("#classificacao");
const instalacaoTexto = document.querySelector("#instalacao");
const recursosTexto = document.querySelector("#recursos");
const comentarioTexto = document.querySelector("#comentario");
const usuarioTexto = document.querySelector("#usuario");
const contadorAvaliacoes = document.querySelector("#contadorAvaliacoes");

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

contadorAvaliacoes.textContent =
`Avaliações concluídas: ${numeroAvaliacoes}`;

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
lastModified.textContent =
`Última modificação: ${document.lastModified}`;
}
