//Função construtoras -> objetos
// Função fabrica  -> objetos
// Construtors -> Pessoa (new)

function Pessoa (nome,sobrenome){

    //Atributos ou Métodos  Privadas
  const ID = 123456;
  const metodoInterno = function(){

  };

//Atributos ou Métodos  Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;


    this.metodo =  function(){
        console.log(this.nome + ': sou um método');
    };
}
const p1 = new Pessoa ('Luiz','Otávio');
const p2 = new Pessoa ('Maria','Oliveira');
p1.metodo();