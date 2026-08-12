const produtos = [
    {
        id: 1,
        nome: `Chuteira Adidas`,
        preco: 100,
        imagem: `imagens/chuteira-adidas.webp`
    },
    {
        id: 2,
        nome: `Chuteira Nike`,
        preco: 100,
        imagem: `imagens/chuteira-nike.webp`
    },
    {
        id: 3,
        nome: `Chuteira Society Nike`,
        preco: 100,
        imagem: `imagens/chuteira-nike-botinha.webp`
    },
    {
        id: 4,
        nome: `Chuteira Society Nike CR7`,
        preco: 100,
        imagem: `imagens/chuteira-nike-cr7.webp`
    }
];

const listaProdutos = document.querySelector(`#lista-produtos`);
const campoPesquisa = document.querySelector(`#pesquisa`);
const contadorCarrinho = document.querySelector(`#contador-carrinho`);

let carrinho =
    JSON.parse(localStorage.getItem(`carrinho`)) || [];

function atualizarContadorCarrinho() {
    if (contadorCarrinho) {
        contadorCarrinho.textContent = `${carrinho.length}`;
    }
}

function exibirProdutos(produtosFiltrados) {
    listaProdutos.innerHTML = produtosFiltrados
        .map(
            produto => `
                <article class="produto">
                    <img
                        src="${produto.imagem}"
                        alt="${produto.nome}"
                        loading="lazy"
                        width="300"
                        height="220"
                    >

                    <h2>${produto.nome}</h2>

                    <p class="preco">
                        R$ ${produto.preco
                            .toFixed(2)
                            .replace(`.`, `,`)}
                    </p>

                    <button
                        type="button"
                        class="btn-carrinho"
                        data-id="${produto.id}"
                    >
                        Adicionar ao carrinho
                    </button>
                </article>
            `
        )
        .join(``);

    adicionarEventosCarrinho();
}

function adicionarEventosCarrinho() {
    const botoes =
        document.querySelectorAll(`.btn-carrinho`);

    botoes.forEach(botao => {
        botao.addEventListener(`click`, () => {
            const idProduto =
                Number(botao.dataset.id);

            adicionarProdutoAoCarrinho(idProduto);
        });
    });
}

function adicionarProdutoAoCarrinho(idProduto) {
    const produto =
        produtos.find(
            produto => produto.id === idProduto
        );

    if (produto) {
        carrinho.push(produto);

        localStorage.setItem(
            `carrinho`,
            JSON.stringify(carrinho)
        );

        atualizarContadorCarrinho();

        alert(
            `${produto.nome} foi adicionado ao carrinho!`
        );
    }
}

function pesquisarProdutos() {
    const termo =
        campoPesquisa.value
            .toLowerCase()
            .trim();

    if (termo === ``) {
        exibirProdutos(produtos);
        return;
    }

    const resultado =
        produtos.filter(
            produto =>
                produto.nome
                    .toLowerCase()
                    .includes(termo)
        );

    exibirProdutos(resultado);
}

campoPesquisa.addEventListener(
    `input`,
    pesquisarProdutos
);

exibirProdutos(produtos);
atualizarContadorCarrinho();