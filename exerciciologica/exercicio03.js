/*
Escreva uma função que recebe um número e
retorne o seguinte;
Número é divisivgel po 3 = Fizz
Número é divizivel  por 5 = Buzz
NúMERO É DIVIZIVEL POR 3 E 5  = fizzBuzz
Número NÃO é divizivel por 3 e 5 = Retorna o próprio númeor
Checar se o número é realmente tm número
Use  a função com numeros de 0  a 100
*/


function fizzBuzz(numero){
    if(typeof  numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0)return 'FizzBuzz';
    if (numero % 3 === 0)return 'Fizz';
    if (numero % 5 === 0)return 'Buzz';
    return numero;

     
}

for ( let i  = 0 ; i <= 100 ; i++){
    console.log(i, fizzBuzz(i))
}
