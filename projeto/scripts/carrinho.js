const itensCarrinho =
    document.querySelector(`#itens-carrinho`);

const contadorCarrinho =
    document.querySelector(`#contador-carrinho`);

const quantidadeTotal =
    document.querySelector(`#quantidade-total`);

const valorTotal =
    document.querySelector(`#valor-total`);

const mensagemCarrinho =
    document.querySelector(`#mensagem-carrinho`);

const botaoLimpar =
    document.querySelector(`#limpar-carrinho`);

const currentYear =
    document.querySelector(`#current-year`);

let carrinho =
    JSON.parse(localStorage.getItem(`carrinho`)) || [];

function formatarPreco(valor) {
    return `R$ ${valor.toFixed(2).replace(`.`, `,`)}`;
}

function exibirCarrinho() {
    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = ``;

        mensagemCarrinho.textContent =
            `Seu carrinho está vazio.`;

        atualizarResumo();

        return;
    }

    mensagemCarrinho.textContent = ``;

    itensCarrinho.innerHTML = carrinho
        .map(
            (produto, indice) => `
                <article class="item-carrinho">

                    <img
                        src="${produto.imagem}"
                        alt="${produto.nome}"
                        loading="lazy"
                        width="140"
                        height="110"
                    >

                    <div class="item-info">
                        <h2>${produto.nome}</h2>

                        <p>
                            ${formatarPreco(produto.preco)}
                        </p>
                    </div>

                    <button
                        type="button"
                        class="btn-remover"
                        data-indice="${indice}"
                        aria-label="Remover ${produto.nome} do carrinho"
                    >
                        Remover
                    </button>

                </article>
            `
        )
        .join(``);

    adicionarEventosRemover();

    atualizarResumo();
}

function adicionarEventosRemover() {
    const botoesRemover =
        document.querySelectorAll(`.btn-remover`);

    botoesRemover.forEach(botao => {
        botao.addEventListener(`click`, () => {
            const indice =
                Number(botao.dataset.indice);

            removerProduto(indice);
        });
    });
}

function removerProduto(indice) {
    carrinho.splice(indice, 1);

    salvarCarrinho();
    exibirCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem(
        `carrinho`,
        JSON.stringify(carrinho)
    );
}

function atualizarResumo() {
    const total = carrinho.reduce(
        (soma, produto) =>
            soma + produto.preco,
        0
    );

    contadorCarrinho.textContent =
        `${carrinho.length}`;

    quantidadeTotal.textContent =
        `${carrinho.length}`;

    valorTotal.textContent =
        `${formatarPreco(total)}`;
}

function limparCarrinho() {
    if (carrinho.length === 0) {
        mensagemCarrinho.textContent =
            `O carrinho já está vazio.`;

        return;
    }

    carrinho = [];

    salvarCarrinho();
    exibirCarrinho();
}

function atualizarAno() {
    if (currentYear) {
        currentYear.textContent =
            `${new Date().getFullYear()}`;
    }
}

botaoLimpar.addEventListener(
    `click`,
    limparCarrinho
);

exibirCarrinho();
atualizarAno();