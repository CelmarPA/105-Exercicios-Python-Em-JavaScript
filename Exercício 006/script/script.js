// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelectorAll("h3")
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// Adiciona evento para click no btnCalcular
form.btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    // Obtém o número
    const num = Number(form.inNum.value);

    // Calcula o dobro, o triplo e a raiz quadrada
    const dobro = num * 2;
    const triplo = num * 3;
    const raiz = Math.sqrt(num);

    // Monta as strings com os resultados
    const resultados = [
        `O dobro de ${num} é igual a ${dobro}.`,
        `O triplo de ${num} é igual a ${triplo}.`,
        `A raiz quadrada de ${num} é igual a ${raiz.toFixed(2)}.`
    ]

    // Exibe os resultados
    resp.forEach((resposta, index) => {
        resposta.innerText = resultados[index];
    })

    form.inNum.value = "";
    form.inNum.focus();
});

// Adiciona evento  para reset
form.addEventListener("reset", () => {
    resp.forEach((resposta, index) => {
        resposta.innerText = "";
    });

    form.inNum.focus();
});