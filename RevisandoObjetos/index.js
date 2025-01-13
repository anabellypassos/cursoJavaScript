//Um ojeto é formado por par chave e valor
  /*const pessoa1 = new Object();
  pessoa1.nome = 'Luiz';
  pessoa1.sobrenome='Otávio ';
 pessoa1.idade = 30;
 pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando o seu nome.`);

 };
  pessoa1.getDtaNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  }
    

for (let chave in pessoa1){
    console.log(pessoa1 [chave]);
}

*/

//Factory function / Construtor functions / Classe
/*

function criaPessoas(nome,sobrenome){
    return{
        nome,
        sobrenome,
         nomeCompleto(){
return `${this.nome} ${this.sobrenome}`;
            }
    };
}
const p1 = criaPessoas('Luiz','Otavio');
console.log(p1.nomeCompleto());*/

function  Pessoa(nome, sobrenome){
    this.nome =this.nome;
    this.sobrenome = sobrenome;
}
const  p1 = new Pessoa('Luiz','Miranda');
console.log(p1);