"use strict";

// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria ouvinte para evento submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o número
    const num = Number(form.inNumero.value);

    // Obtém a porção inteira
    const inteira = Math.floor(num);

    // Exibe o resultado
    resp.innerText = `O número ${num} tem a porção inteira ${inteira}.`

    // Limpa o form e foca
    form.inNumero.value = "";
    form.inNumero.focus();
});

// Cria ouvinte para evento reset
form.addEventListener("reset",  () => {
    form.inNumero.value = "";
    resp.innerText = "";
    form.inNumero.focus();
});
