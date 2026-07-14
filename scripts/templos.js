const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');

    const menuAberto = navigation.classList.contains('open');

    menuButton.setAttribute('aria-expanded', menuAberto);

    if (menuAberto) {
        menuButton.setAttribute('aria-label', 'Fechar menu de navegação');
    } else {
        menuButton.setAttribute('aria-label', 'Abrir menu de navegação');
    }
});

const anoAtual = document.querySelector('#anoatual');
anoAtual.textContent = new Date().getFullYear();

const ultimaModificacao = document.querySelector('#ultimaModificacao');
ultimaModificacao.textContent =
    `Última modificação: ${document.lastModified}`;