

/*Assing */
/*
const produto = { nome:'Produto', preco: 1.8};
const caneca = Object.assign({},produto,{material:'porcelana'});

caneca.nome='Outro nome';
caneca.preco= '2.5';
console.log(caneca);
console.log(produto);
*/

/* freeze */

/*
const produto = { nome:'Produto', preco: 1.8};
Object.freeze(produto);
produto.nome = 'Outro nome';
const caneca = {nome:produto.nome, preco: produto.preco};
console.log(produto);
*/


/*getOwnPropertyDescriptor*/
/*
const produto = { nome:'Produto', preco: 1.8};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
*/


/*value*/
/*
const produto = { nome:'Produto', preco: 1.8};
console.log(Object.values(produto, 'nome'));
*/

/*entries*/
/*
const produto = { nome:'Produto', preco: 1.8, material:'porcelana'};
for(let[chave,valor]of Object.entries(produto)){

console.log(valor,chave);
}

*/