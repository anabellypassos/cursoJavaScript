

let varA = 'A';
let varB = 'B';
let varC = 'C';


var vartempA = varA;
let soma1 = varA = varB;
let soma2 = varB = varC;
let soma3 = varC = vartempA;

console.log(soma1,soma2,soma3);

//ou
[varA,varB,varC] = [varA,varB,varC]

console.log(varA,varB,varC);