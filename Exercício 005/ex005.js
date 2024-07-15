/*
                    ______ Exercício 005 ______

 Faça um programa que leia um número inteiro e mostre a na tela seu sucessor e antecessor.

*/
// Seleciona o campo de entrada e saida
let input = document.querySelector("#entrada");
let output = document.querySelector("#resultado");

input.addEventListener("keydown", (event) => {
    let num = Number(input.value);

    if (event.key === "Enter") {
        output.innerHTML = `Analisando o valor <strong>${num}</strong>, seu antecessor é <strong>${num - 1}</strong> e seu sucessor é <strong>${num + 1}</strong>!`;
    }
});
