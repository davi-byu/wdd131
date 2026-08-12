document.addEventListener(`DOMContentLoaded`, () => {
    console.log(`Página inicial carregada!`);

    const currentYear =
        document.querySelector(`#current-year`);

    const main =
        document.querySelector(`main`);

    function updateYear() {
        if (currentYear) {
            currentYear.textContent =
                `${new Date().getFullYear()}`;
        }
    }

    function showWelcomeMessage() {
        const mensagemBoasVindas =
            document.createElement(`p`);

        mensagemBoasVindas.classList.add(
            `welcome-message`
        );

        mensagemBoasVindas.textContent =
            `Bem-vindo ao nosso catálogo de vendas!`;

        main.appendChild(mensagemBoasVindas);
    }

    updateYear();
    showWelcomeMessage();
});