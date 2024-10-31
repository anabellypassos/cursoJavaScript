function minhacalculadora(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const calculo = peso.value /(altura.value * altura.value);

        pessoas.push({
           

            
          });
   
    resultado.innerHTML += `<p> Seu peso é: ${peso.value}. </br>
       Seua altura é: ${altura.value}. </br>
       O seu IMC é : ${calculo.toFixed(2)}.
       </p>`;
  }

  form.addEventListener('submit', recebeEventoForm);
}

minhacalculadora();

      
   