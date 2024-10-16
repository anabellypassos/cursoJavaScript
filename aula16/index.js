const numero = Number (prompt ('Digite um número :'));

//seleciona o id do HTML 
const numeroTitulo = document.getElementById('numero-titulo');
const textoId = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
textoId.innerHTML = '';

textoId.innerHTML = `<p>
Raiz quadrada: ${Math.sqrt(numero)}
</p>

<p>
 ${numero} é o número inteiro : ${Number.isInteger(numero)};
</p>

<p>
É NaN:  ${Number.isNaN(numero)};
</p>

<p>
Arredondando para baixo :  ${Math.floor(numero)}
</p>

<p>
Arredondando para cima : ${Math.ceil(numero)}
</p>

<p>
Com duas casas decimais : ${numero.toFixed(2)}
</p>
`;


