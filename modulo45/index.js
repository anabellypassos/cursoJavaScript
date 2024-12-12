//IIFE-> Imediately invoked function expression


(function(idade,peso,altura){
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + '' + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade,peso,altura)
})(21,54,1.50);