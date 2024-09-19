"use strict";

// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria ouvinte para evento submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém os dados de entrada
    const dias = Number(form.inDias.value);
    const km = Number(form.inDistancia.value);

    // Calcular o valor total
    const valor = (dias * 60) + (km * 0.15);

    // Exibe o resultado
    resp.innerText = `O total a pagar por ${dias} dias de aluguel e ${km.toFixed(2)}km rodados é de R$${valor.toFixed(2)}.`

    // Limpa o form e foca
    form.inDias.value = "";
    form.inDistancia.value = "";
    form.inDias.focus();
});

// Cria ouvite para o evento reset
form.addEventListener("reset", () => {
    form.reset();
    resp.innerText = "";
    form.inDias.focus();
});
