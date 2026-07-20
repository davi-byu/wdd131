const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");
const windChill = document.getElementById("windChill");


currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;


const temperature = 8;
const windSpeed = 10;

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return (
        13.12 +
        0.6215 * temperatura -
        11.37 * Math.pow(velocidadeVento, 0.16) +
        0.3965 * temperatura * Math.pow(velocidadeVento, 0.16)
    );
}

if (temperature <= 10 && windSpeed > 4.8) {
    const sensacao = calcularSensacaoTermica(temperature, windSpeed);
    windChill.textContent = `${sensacao.toFixed(1)} °C`;
} else {
    windChill.textContent = "N/A";
}