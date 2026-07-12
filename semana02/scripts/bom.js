const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');

botao.addEventListener('click', function () {
    
    if (input.value.trim() === '') {
        alert('Digite um livro e capítulo.');
        input.focus();
        return;
    }

const li = document.createElement('li');
const botaoExcluir = document.createElement('button');

li.textContent = input.value.trim();

botaoExcluir.textContent = '❌';

botaoExcluir.setAttribute(
    'aria-label',
    `Excluir ${li.textContent}`
    );

li.append(botaoExcluir);
    lista.append(li);

    input.value = '';
    input.focus();

    botaoExcluir.addEventListener('click', function () {
        lista.removeChild(li);
        input.focus();
});
});