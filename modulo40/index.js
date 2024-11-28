// Declaração de função (Function hoisting)

falaOi();
function falaOi(){
    console.log('Oie');
}


// First- class objetcs (Objetos de primeira classe)

// Fuction expression

const souUmDado = function (){
    console.log('Sou um dado.');
};
souUmDado();


//Arrow Function 

const funcaoArrow = () =>{
console.log('Sou uma arrow function')
};
funcaoArrow();
