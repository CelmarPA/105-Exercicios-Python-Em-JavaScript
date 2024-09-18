// Obtém os elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria ouvinte para evento submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o salário do funcionário
    const salario = Number(form.inSalario.value);

    // Calcula o novo salário 
    const novoSalario = salario + (salario * 15 /100);

    // Exibe a resposta
    resp.innerText = `O funcionário que ganhava R$${salario.toFixed(2)}, com aumento de 15%, passa a ganhar R$${novoSalario.toFixed(2)}.`;

    // Limpo o form e foca
    form.inSalario.value = "";
    form.inSalario.focus();
});

// Cria ouvinte para evento reset
form.addEventListener("reset", ()  => {
    form.inSalario.value = "";
    resp.innerText = "";
    form.inSalario.focus();
});
