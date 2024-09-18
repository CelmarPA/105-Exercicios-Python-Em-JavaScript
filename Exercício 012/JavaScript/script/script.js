// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria ouvinte para event submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o valor do produto
    const valor = Number(form.inValor.value);

    // Calcular o valor com desconto
    const valorComDesconto = valor - (valor * 5 / 100);

    // Exibe o resultado
    resp.innerText = `O produto que custava R$${valor.toFixed(2)}, com desconto de 5% passa a custar R$${valorComDesconto.toFixed(2)}.`;

    // Limpar  o form e foca
    form.inValor.value = "";
    form.inValor.focus();
});

// Cria ouvinte para evento reset
form.addEventListener("reset", () => {
    form.inValor.value = "";
    resp.innerText = "";
    form.inValor.focus();
});
