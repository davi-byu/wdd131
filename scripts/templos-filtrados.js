const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', function () {
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

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Templo de San Antonio, Texas",
        localizacao: "San Antonio, Texas",
        consagracao: "2001, 24 de junho",
        area: 16800,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-antonio-texas-temple/san-antonio-texas-temple-34787.jpg"
    },
    {
        nomeDoTemplo: "Templo de Manhattan, Nova York",
        localizacao: "Manhattan, Nova York",
        consagracao: "2002, 7 de agosto",
        area: 20630,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080.jpg"
    },  
    {
        nomeDoTemplo: "Templo de Copenhague, Dinamarca",
        localizacao: "Copenhague, Dinamarca",
        consagracao: "1999, 17 de março",
        area: 25000,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-48068.jpg"
    }];

const galeria = document.querySelector(".galeria");
    
function exibirTemplos(listaTemplos) {

    // Limpa a galeria antes de exibir os templos
    galeria.innerHTML = "";

    listaTemplos.forEach(templo => {

        const card = document.createElement("article");

        const titulo = document.createElement("h3");
        titulo.textContent = templo.nomeDoTemplo;

        const localizacao = document.createElement("p");
        localizacao.innerHTML = `<strong>Localização:</strong> ${templo.localizacao}`;

        const consagracao = document.createElement("p");
        consagracao.innerHTML = `<strong>Consagração:</strong> ${templo.consagracao}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Área:</strong> ${templo.area.toLocaleString()} pés²`;

        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = `Templo de ${templo.nomeDoTemplo}`;
        imagem.loading = "lazy";
        imagem.decoding = "async";
        imagem.width = 400;
        imagem.height = 250;

        card.append(titulo, localizacao, consagracao, area, imagem);

        galeria.appendChild(card);
    });
}
        
exibirTemplos(templos);

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    exibirTemplos(templos);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();

    const antigos = templos.filter(templo =>
        Number(templo.consagracao.substring(0, 4)) < 1900
    );

    exibirTemplos(antigos);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();

    const novos = templos.filter(templo =>
        Number(templo.consagracao.substring(0, 4)) > 2000
    );

    exibirTemplos(novos);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();

    const grandes = templos.filter(templo =>
        templo.area > 90000
    );

    exibirTemplos(grandes);
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();

    const pequenos = templos.filter(templo =>
        templo.area < 10000
    );

    exibirTemplos(pequenos);
});