function Pessoa (nome,sobrenome){
    this.nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = ()=> this.nome + ''+ this.sobrenome;
}

Pessoa.prototype.estouAqui ='HAHAHAH';
const pessoa1 = new Pessoa ('Luiz','0');
const data = new Date();


console.dir(pessoa1);
console.dir(data);
