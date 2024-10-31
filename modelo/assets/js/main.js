function minhacalculadora() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas = [];

  function recebeEventoForm(evento) {
      evento.preventDefault();

      const peso = form.querySelector('.peso').value;
      const altura = form.querySelector('.altura').value;
      const calculo = peso / (altura * altura);

      pessoas.push({
          peso: peso,
          altura: altura,
          imc: calculo.toFixed(2)
      });

      if (calculo < 18.5) {
          resultado.innerHTML = `<p>
              Seu peso é ${peso}.<br>
              Sua altura é: ${altura}.<br>
              O seu IMC é: ${calculo.toFixed(2)}. Você está abaixo do peso!
          </p>`;
      } else if (calculo >= 18.5 && calculo <= 24.5) {
          resultado.innerHTML = `<p>
              Seu peso é ${peso}.<br>
              Sua altura é: ${altura}.<br>
              O seu IMC é: ${calculo.toFixed(2)}. Peso normal!
          </p>`;
      } else if (calculo >= 25 && calculo <= 29.9) {
          resultado.innerHTML = `<p>
              Seu peso é ${peso}.<br>
              Sua altura é: ${altura}.<br>
              O seu IMC é: ${calculo.toFixed(2)}. Você está com sobrepeso!
          </p>`;
      } else if (calculo >= 30 && calculo <= 34.9) {
          resultado.innerHTML = `<p>
              Seu peso é ${peso}.<br>
              Sua altura é: ${altura}.<br>
              O seu IMC é: ${calculo.toFixed(2)}. Você está com obesidade grau 1!
          </p>`;
      } else if (calculo >= 35 && calculo <= 39.9) {
          resultado.innerHTML = `<p>
              Seu peso é ${peso}.<br>
              Sua altura é: ${altura}.<br>
              O seu IMC é: ${calculo.toFixed(2)}. Você está com obesidade grau 2!
          </p>`;
      } else if (calculo >= 40) {
          resultado.innerHTML = `<p>
              Seu peso é ${peso}.<br>
              Sua altura é: ${altura}.<br>
              O seu IMC é: ${calculo.toFixed(2)}. Você está com obesidade grau 3!
          </p>`;
      }
  }

  form.addEventListener('submit', recebeEventoForm);
}

minhacalculadora();
