const pessoal1 = {
nome: 'Luiz',
sobrenome: 'Miranda',
idade: 25,

 fala() {
console.log(`A minha idade atual é ${this.idade}.`);
 },
 incrementaIdade(){
this.idade++;
 }
};

pessoal1.fala();
pessoal1.incrementaIdade();
pessoal1.fala();
pessoal1.incrementaIdade();