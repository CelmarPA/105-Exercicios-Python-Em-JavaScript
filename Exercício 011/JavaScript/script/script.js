// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria ouvinte para evento submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém a largura e altura da parede
    const largura = Number(form.inLargura.value);
    const altura = Number(form.inAltura.value);
    
    // Calcula a área da parede e quantidade de tinta necessária
    const area = largura * altura;
    const tinta = area / 2;

    // Exibe a resposta
    resp.innerText = `Sua parede tem dimensões de ${largura} x ${altura} possuindo uma área de ${area.toFixed(2)}m².\n`;
    resp.innerText += `Serão necessários ${tinta.toFixed(2)} litros de tinta para pintá-la.`

    // Limpa os campos do form e foca
    form.inLargura.value = "";
    form.inAltura.value = "";
    form.inLargura.focus();
});

// Cria ouvinte para event reset
form.addEventListener("reset", () => {
    form.reset();
    resp.innerText = "";
    form.inLargura.focus();
});
