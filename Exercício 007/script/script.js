// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Adiciona event para btnMedia
form.btnMedia.addEventListener("click", (e) => {
    e.preventDefault(); // evita o envio do form

    // Obtém as notas
    const nota1 = Number(form.inNota1.value);
    const nota2 = Number(form.inNota2.value);

    // Calcula a média 
    const media = (nota1 + nota2) / 2;

    // Exive a resposta
    resp.innerText = `A média calculada para ${nota1} e ${nota2} é igual a ${media.toFixed(2)}`;

    form.inNota1.value = "";
    form.inNota2.value = "";
    form.inNota1.focus();
});

// Adiciona event para reset
form.addEventListener("reset", () => {
    resp.innerText = "";
    form.inNota1.focus();
});
