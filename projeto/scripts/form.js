const formulario = document.querySelector(`#contatoForm`);
const mensagemSucesso = document.querySelector(`#mensagem-sucesso`);
const currentYear = document.querySelector(`#current-year`);

function salvarContato(contato) {
    localStorage.setItem(
        `ultimoContato`,
        JSON.stringify(contato)
    );
}

function mostrarMensagem(nome) {
    mensagemSucesso.textContent =
        `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
}

function atualizarAno() {
    if (currentYear) {
        currentYear.textContent =
            `${new Date().getFullYear()}`;
    }
}

formulario.addEventListener(`submit`, event => {
    event.preventDefault();

    const nome =
        document.querySelector(`#nome`).value.trim();

    const email =
        document.querySelector(`#email`).value.trim();

    const assunto =
        document.querySelector(`#assunto`).value;

    const mensagem =
        document.querySelector(`#mensagem`).value.trim();

    if (
        nome === `` ||
        email === `` ||
        assunto === `` ||
        mensagem === ``
    ) {
        mensagemSucesso.textContent =
            `Por favor, preencha todos os campos.`;

        return;
    }

    const contato = {
        nome,
        email,
        assunto,
        mensagem
    };

    salvarContato(contato);
    mostrarMensagem(nome);

    formulario.reset();
});

atualizarAno();