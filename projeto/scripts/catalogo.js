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
        nome: "Chuteira Society Nike ",
        preco: 100,
        imagem: "imagens/chuteira-nike-botinha.webp"
    },
     {
        id: 4,
        nome: "Chuteira Society Nike CR7 ",
        preco: 100,
        imagem: "imagens/chuteira-nike-cr7.webp"
    }
];

const listaProdutos = document.querySelector("#lista-produtos");
const campoPesquisa = document.querySelector("#pesquisa");

function exibirProdutos(produtosFiltrados) {
    listaProdutos.innerHTML = "";

    produtosFiltrados.forEach(produto => {
        listaProdutos.innerHTML += `
            <div class="produto">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
            </div>
        `;
    });
}

function pesquisarProdutos() {
    const termo = campoPesquisa.value.toLowerCase();

    const resultado = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termo)
    );

    exibirProdutos(resultado);
}

campoPesquisa.addEventListener("input", pesquisarProdutos);

exibirProdutos(produtos);