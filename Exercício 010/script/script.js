// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria ouvinte para evento submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita envio do form

    // Obtém os dados de entrada
    const dinheiro = Number(form.inDinheiro.value);
    const valorDolar = Number(form.inDolar.value);

    // Calcular quantidade
    const usd = dinheiro / valorDolar;

    // Exibe a resposta
    resp.innerText = `Com R$${dinheiro.toFixed(2)} você pode adiquirir US$${usd.toFixed(2)}!`

    // Limpar o form
    form.inDinheiro.value = "";
    form.inDolar.value = "";
    form.inDinheiro.focus();    
});

// Cria ouvinte para evento reset
form.addEventListener("reset", () => {
    resp.innerText = "";
    form.inDinheiro.focus();
});
