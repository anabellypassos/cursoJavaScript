/*
Operadores de comparação


> maior que
< menor que
>= maior igual
<= menor igual
== igualdade (valor)
===  igualdade estrita (valor e tipo)
!= diferente
!== diferente estrito (valor e tipo)


*/
const num1 = 10;
const num2 = 11;
const comp = num1<num2;

console.log(comp);
=======
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
>>>>>>> 611e099540a1fa46dc7612e63a69633e4fed8344
