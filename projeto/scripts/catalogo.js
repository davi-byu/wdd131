const produtos = [
    {
        id: 1,
        nome: "Notebook",
        preco: 3500
    },
    {
        id: 2,
        nome: "Mouse Gamer",
        preco: 120
    },
    {
        id: 3,
        nome: "Teclado Mecânico",
        preco: 250
    }
];

const listaProdutos = document.querySelector("#lista-produtos");
const campoPesquisa = document.querySelector("#pesquisa");

function exibirProdutos(produtosFiltrados) {
    listaProdutos.innerHTML = "";

    produtosFiltrados.forEach(produto => {
        listaProdutos.innerHTML += `
            <div class="produto">
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