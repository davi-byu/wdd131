const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');

const li = document.createElement('li');
const botaoExcluir = document.createElement('button');

li.textContent = input.value;

botaoExcluir.textContent = '❌';

botaoExcluir.setAttribute(
    'aria-label',
    `Excluir ${input.value}`
);

li.append(botaoExcluir);
lista.append(li);