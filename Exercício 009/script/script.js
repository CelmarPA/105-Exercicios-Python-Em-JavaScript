// Obter elementos da página
const form = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Adiciona ouvinte para evento submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém a entrada 
    const num = Number(form.inNum.value);

    // Calcula a tabuada
    const n1 = num * 1,
          n2 = num * 2,
          n3 = num * 3,
          n4 = num * 4,
          n5 = num * 5,
          n6 = num * 6,
          n7 = num * 7,
          n8 = num * 8,
          n9 = num * 9,
          n10= num * 10;

    // Exibe a tabuada
    resp.innerText = `${"-".repeat(15)}\n`;
    resp.innerText += `${num} x  1 =  ${n1}\n`;
    resp.innerText += `${num} x  2 =  ${n2}\n`;
    resp.innerText += `${num} x  3 =  ${n3}\n`;
    resp.innerText += `${num} x  4 =  ${n4}\n`;
    resp.innerText += `${num} x  5 =  ${n5}\n`;
    resp.innerText += `${num} x  6 =  ${n6}\n`;
    resp.innerText += `${num} x  7 =  ${n7}\n`;
    resp.innerText += `${num} x  8 =  ${n8}\n`;
    resp.innerText += `${num} x  9 =  ${n9}\n`;
    resp.innerText += `${num} x 10 = ${n10}\n`;
    
    // Limpa o form e foca
    form.inNum.value = "";
    form.inNum.focus();
});

// Adiciona ouvinte para evento reset
form.addEventListener("reset", () => {
    resp.innerText = "";
    form.inNum.focus();
});
