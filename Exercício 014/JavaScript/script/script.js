// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria ouvinte para evento submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém a temperatura em graus Celsius
    const celsius = Number(form.inCelsius.value);

    // Converte a temperatura
    const fahrenheit = (celsius * 1.8) + 32;

    // Exibe o resultado
    resp.innerText = `A temperatura de ${celsius.toFixed(2)}°C corresponde a ${fahrenheit.toFixed(2)}°F.`

    // Limpa o form e foca
    form.inCelsius.value = "";
    form.inCelsius.focus();
});

// Cria ouvinte para evento reset
form.addEventListener("reset", () => {
    form.inCelsius.value = "";
    resp.innerText = "";
    form.inCelsius.focus();
})
