/*
Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

*/

// Aqui estamos importando o módulo readline, que permite capturar a entrada do usuário no terminal.
const readline = require("readline");

//👉 Criamos uma interface (rl) para ler e escrever no terminal:

//input: process.stdin → Captura o que o usuário digita.
//output: process.stdout → Mostra mensagens no terminal.


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Quantos anos você tem? ", (idade) => {
    idade = Number(idade);
    if (idade >= 18) {
        console.log(`Você tem ${idade} anos, então você é maior de idade.`);
    } else {
        console.log(`Você tem ${idade} anos, então você é menor de idade.`);
    }
    rl.close();
});
