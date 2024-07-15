/**
             _____ Exercício 001 ______

 Crie um programa que escreva "Olá, Mundo!" na tela.
  
 */
let btn = document.querySelector("#saudar");

btn.addEventListener("click", () => {
    window.alert("Olá, Mundo!");
})