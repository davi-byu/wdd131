const anoAtual = document.querySelector("#anoatual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

const dataAtual = new Date();

anoAtual.textContent = dataAtual.getFullYear();

ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;