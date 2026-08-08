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