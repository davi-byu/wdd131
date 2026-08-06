const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');

let arrayCapitulos = obterListaDeCapitulos() || [];

arrayCapitulos.forEach(capitulo => {
    exibirLista(capitulo);
});

botao.addEventListener('click', function () {

    if (input.value.trim() === '') {
        alert('Digite um livro e capítulo.');
        input.focus();
        return;
    }

    exibirLista(input.value.trim());

    arrayCapitulos.push(input.value.trim());

    definirListaDeCapitulos();

    input.value = '';
    input.focus();
});

function exibirLista(item) {

    const li = document.createElement('li');
    const botaoExcluir = document.createElement('button');

    li.textContent = item;

    botaoExcluir.textContent = '❌';
    botaoExcluir.classList.add('delete');

    botaoExcluir.setAttribute(
        'aria-label',
        `Excluir ${item}`
    );

    li.append(botaoExcluir);
    lista.append(li);

    botaoExcluir.addEventListener('click', function () {
        lista.removeChild(li);
        excluirCapitulo(li.textContent);
        input.focus();
    });
}

function definirListaDeCapitulos() {
    localStorage.setItem(
        'minhaListaFavoritosLDM',
        JSON.stringify(arrayCapitulos)
    );
}

function obterListaDeCapitulos() {
    return JSON.parse(
        localStorage.getItem('minhaListaFavoritosLDM')
    );
}

function excluirCapitulo(capitulo) {

    capitulo = capitulo.slice(0, capitulo.length - 1);

    arrayCapitulos = arrayCapitulos.filter(item => item !== capitulo);

    definirListaDeCapitulos();
}