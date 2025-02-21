class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// Variáveis a serem exportadas
const nome = 'Anabelly';
const sobrenome = 'Passos';

// Exportando a classe Pessoa e as variáveis
module.exports = {
    Pessoa,
    nome,
    sobrenome,
    outraCoisa: 'Outra coisa'
};
