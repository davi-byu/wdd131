const produtos = [
    {
        id: 1,
        nome: "Chuteira Adidas",
        preco: 100,
        imagem: "imagens/chuteira-adidas.webp"
    },
    {
        id: 2,
        nome: "Chuteira Nike",
        preco: 100,
        imagem: "imagens/chuteira-nike.webp"
    },
    {
        id: 3,
        nome: "Chuteira Society Nike",
        preco: 100,
        imagem: "imagens/chuteira-nike-botinha.webp"
    },
    {
        id: 4,
        nome: "Chuteira Society Nike CR7",
        preco: 100,
        imagem: "imagens/chuteira-nike-cr7.webp"
    }
];

const listaProdutos = document.querySelector("#lista-produtos");
const campoPesquisa = document.querySelector("#pesquisa");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function atualizarContadorCarrinho() {
    const contadorCarrinho = document.querySelector("#contador-carrinho");

    contadorCarrinho.textContent = carrinho.length;
}

function exibirProdutos(produtosFiltrados) {
    listaProdutos.innerHTML = "";

    produtosFiltrados.forEach(produto => {
        listaProdutos.innerHTML += `
            <div class="produto">
                <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>

                <button class="btn-carrinho" data-id="${produto.id}">
                    Adicionar ao carrinho
                </button>
            </div>
        `;
    });

    adicionarEventosCarrinho();
}

function adicionarEventosCarrinho() {
    const botoes = document.querySelectorAll(".btn-carrinho");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const idProduto = Number(botao.dataset.id);

            const produto = produtos.find(
                produto => produto.id === idProduto
            );

            carrinho.push(produto);

            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            atualizarContadorCarrinho();

            alert(`${produto.nome} foi adicionado ao carrinho!`);
        });
    });
}

function pesquisarProdutos() {
    const termo = campoPesquisa.value.toLowerCase();

    if (termo === "") {
        exibirProdutos(produtos);
        return;
    }

    const resultado = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termo)
    );

    exibirProdutos(resultado);
}

campoPesquisa.addEventListener("input", pesquisarProdutos);

exibirProdutos(produtos);

atualizarContadorCarrinho();