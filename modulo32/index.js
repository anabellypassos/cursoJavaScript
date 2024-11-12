// for in -> lê os indices ou chaves do objeto


const pessoa = {
    nome:'Luiz',
    sobrenome:'Otavio',
    idade: 30
};


for(let chave in pessoa){
    console.log(chave,pessoa[chave]);
}

// for in -> lê os indices ou chaves do objeto