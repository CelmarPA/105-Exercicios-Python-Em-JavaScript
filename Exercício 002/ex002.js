/*
                    ______ Exercício 002 ______

 Faça um programa que leia o nome da pessoa e motre a menssagem de boas-vindas.

*/
// Seleciona o campo de entrada
let nome = document.querySelector("#nome");
let result = document.querySelector("#saudacao");

// Adiciona um evento de escuta para o evento 'keydow'
nome.addEventListener("keydown", function (event) {
    // Verifica se a tecla pressionada foi Enter (código 13)
    if (event.keyCode === 13) {
        // Exibe uma mensagem personalizada
        result.innerHTML = `É um prazer te conhecer, <strong>${nome.value}</strong>!`;
    }
});
