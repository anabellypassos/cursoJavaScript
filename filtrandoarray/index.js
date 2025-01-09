// Filter,map, reux

//Filter -> Sempre retornar um array , com a mesma quantidade de elementos
// ou menos.

//Retorna arrays maiores que o 10

const numeros = [5,50,80,1,2,3,5,8,7,11,22,27]; 
const numerosFiltrados = numeros.filter ((valor ,Indice,array ) =>{
 console.log(valor);
return  valor > 10;
});
console.log(numerosFiltrados);

// Retorne as pessoas que tem onome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorn as pessoas cujo nome termina com a 

const pessoas= [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
]
const pessoasComNomeGrande = pessoas.filter (obj => obj.nome.length >= 7);
const idadepessoas = pessoas.filter(obj=>obj.idade > 50 );
const terminaComA = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a');
})
    

console.log(pessoasComNomeGrande);
console.log(idadepessoas);




