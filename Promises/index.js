/**
 * O que são Promises em JavaScript?
Promises em JavaScript são objetos que representam o resultado de uma operação assíncrona, podendo estar em um dos três estados:

Pending (Pendente) – Estado inicial, antes da operação ser concluída.
Fulfilled (Resolvida) – A operação foi concluída com sucesso.
Rejected (Rejeitada) – A operação falhou.
 */


/**
 * Criando uma Promise
Uma Promise é criada usando o construtor Promise, que recebe uma função com dois parâmetros (resolve e reject):
 */

const minhaPromise = new Promise((resolve, reject) => {
    let sucesso = true; // Simulando um resultado

    setTimeout(() => {
        if (sucesso) {
            resolve("Deu certo!");
        } else {
            reject("Algo deu errado.");
        }
    }, 2000); // Simula um atraso de 2 segundos
});

/**Consumindo uma Promise
Para lidar com o resultado de uma Promise, usamos .then() e .catch(): */

minhaPromise
    .then(resultado => {
        console.log(resultado); // "Deu certo!"
    })
    .catch(erro => {
        console.log(erro); // "Algo deu errado."
    });

/**Encadeando Promises
Podemos encadear várias Promises para executar operações assíncronas em sequência: */
function primeiraOperacao() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Passo 1 concluído"), 1000);
    });
}

function segundaOperacao(mensagem) {
    return new Promise(resolve => {
        setTimeout(() => resolve(mensagem + " -> Passo 2 concluído"), 1000);
    });
}

primeiraOperacao()
    .then(segundaOperacao)
    .then(resultadoFinal => {
        console.log(resultadoFinal); // "Passo 1 concluído -> Passo 2 concluído"
    });
