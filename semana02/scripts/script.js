const DIAS = 6;
const LIMITE = 30;

let relatorioEstudante = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < relatorioEstudante.length; i++) {
    let valor = relatorioEstudante[i];

    if (valor < LIMITE) {
        console.log(valor);
    }
}

let i = 0;

while (i < relatorioEstudante.length) {
    let valor = relatorioEstudante[i];

    if (valor < LIMITE) {
        console.log(valor);
    }

    i++;
}

relatorioEstudante.forEach((valor) => {
    if (valor < LIMITE) {
        console.log(valor);
    }
});

for (let indice in relatorioEstudante) {
    let valor = relatorioEstudante[indice];

    if (valor < LIMITE) {
        console.log(valor);
    }
}

let diasSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
];

let hoje = new Date();
let diaAtual = hoje.getDay();

for (let i = 0; i < DIAS; i++) {
    let indiceDia = (diaAtual + i) % 7;

    console.log(diasSemana[indiceDia]);
}