function Produto (nome,preco){
    this.nome = nome;
    this.preco = preco ;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.descontp = function(quantia){
    this.preco -= quantia;
}

function  Camiseta(nome,preco,cor){
    Produto.call(this, nome,preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual){
this.preco = this.preco + (this.preco * (percentual * 100))
}


const preoduto = new Produto('Gen',111);
const camiseta = new Camiseta('Regata',7.5, 'Preta');
camiseta.aumento(10);
console.log(camiseta);