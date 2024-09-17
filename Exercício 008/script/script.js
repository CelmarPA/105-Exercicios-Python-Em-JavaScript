// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria ouvinte para evento submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém a entrada do usuário
    const medida = Number(form.inMedida.value);

    // Inicializa um arre com resultados
    const resultados = [];

    // Calcula as conversões
    const km = medida / 1000,
          hm = medida / 100,
          dm = medida / 10,
          dam = medida * 10,
          cm = medida * 100,
          mm = medida * 1000;

    // Exibe a resposta
    resp.innerText = `A medida ${medida.toFixed(1)} metros corresponde a:\n`;
    resp.innerText += `${km}km\n`;
    resp.innerText += `${hm}hm\n`;
    resp.innerText += `${dm}dm\n`;
    resp.innerText += `${dam}dam\n`;
    resp.innerText += `${cm}cm\n`;
    resp.innerText += `${mm}mm`;

    // Limpa o form e foca
    form.inMedida.value = "";
    form.inMedida.focus();
});

// Adiciona ouvinte para evento reset
form.addEventListener("reset", () => {
    resp.innerText = "";
    form.inMedida.focus();
});
