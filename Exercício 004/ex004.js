/*
                    ______ Exercício 004 ______

 Faça um programa que leia algo pelo teclado e mostre na tela o seu tipo primitivo e todas as informações possíveis sobre ele.

*/
// Seleciona o campo de entrada e saida
let input = document.querySelector("#entrada");
let output = document.querySelector("#resultado");

// Adiciona um evento de escuta para o evento 'keydown'
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let entrada = input.value.trim();
        output.innerHTML = `
            <p>O tipo primitivo dessa entrada é: <strong>${typeof entrada}</strong></p>
            <p>Só tem espaços? <strong>${entrada === ""}</strong></p>
            <p>É um número? <strong>${!isNaN(entrada)}</strong></p>
            <p>É alfabético? <strong>${/^[a-zA-Z]+$/.test(entrada)}</strong></p>
            <p>É alfanumérico? <strong>${/^[0-9a-zA-Z]+$/.test(
                entrada
            )}</strong></p>
            <p>Está em maiúsculas? <strong>${
                entrada === entrada.toUpperCase()
            }</strong></p>
            <p>Está em minúsculas? <strong>${
                entrada === entrada.toLowerCase()
            }</strong></p>
            <p>Está capitalizada? <strong>${
                entrada.charAt(0).toUpperCase() +
                    entrada.slice(1).toLowerCase() ===
                entrada
            }</strong></p>
        `;
    }
});
