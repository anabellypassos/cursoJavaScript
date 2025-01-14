// defineProperty 

/*


function Produto(nome,preco,estoque){
this.nome = nome;
this.preco = preco;
this.estoque = estoque;

Object.defineProperty(this,'estoque',{
enumerable:true, //mostra a chvae
value:estoque, // valor
writable:true, // pode alterar ou não 
configurable:true // Pode apagar a chave ou não 
});


Object.defineProperty(this,'estoque',{
    enumerable:false, //mostra a chave
    value:estoque, // valor
    writable:true, // pode alterar ou não 
    configurable:true // Pode apagar a chave ou não 
    });
}


   
const p1 = new Produto('camiseta',20,3);
console.log(Object.keys(p1));

*/


//- definePoperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperties(this, {
        nome: {
            enumerable:true, //mostra a chave
            value:nome, // valor
            writable:true, // pode alterar ou não 
            configurable:true // Pode apagar a chave ou não 
        },
        preco: {
            enumerable:true, //mostra a chave
            value:preco, // valor
            writable:true, // pode alterar ou não 
            configurable:true // Pode apagar a chave ou não 
        },
    });
}



const p1 = new Produto('camiseta', 20, 3);
console.log(p1);
