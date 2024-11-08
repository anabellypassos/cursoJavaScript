const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag); // Criação da tag correta
    tagCriada.innerHTML = texto; // Inserção do texto
    div.appendChild(tagCriada);  // Adiciona a tag ao div
}

container.appendChild(div); // Adiciona o div ao container
