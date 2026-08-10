document.addEventListener("DOMContentLoaded", () => {
    console.log("Página inicial carregada!");

    const mensagemBoasVindas = document.createElement("p");

    mensagemBoasVindas.textContent =
        "Bem-vindo ao nosso catálogo de vendas!";

    document.querySelector("main").appendChild(mensagemBoasVindas);
});
