/*
                
                ______ Exercício 003 ______

 Crie um programa que leia dois número e mostre a soma entre eles.

*/

// Seleciona os campos de botão e resultado
let btn = document.querySelector("#calcular");
let result = document.querySelector("#resultado");

// Adiciona um evento de escuta para o evento 'click'
btn.addEventListener("click", () => {
    // Seleciona os campos de entrada
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);
    let soma = n1 + n2;

    // Mostra o resultado na tela
    result.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <strong>${soma}</strong>.`;
});
