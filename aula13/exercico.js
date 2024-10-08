const nome = prompt('Digite o seu nome completo');

document.body.innerHTML +=`O seunome é : ${nome} <br/>`;
document.body.innerHTML +=`O seunome tem : ${nome.length} letras <br/>`; //contar numero de letras
document.body.innerHTML +=`A segunda letra do seu nome é : ${nome.charAt[1]}  <br/>`; //pega a letra
document.body.innerHTML +=`Qual o primeiro índice da letra a no seu nome : ${nome.indexOf('a')}  <br/>`;
document.body.innerHTML +=`Qual o último índice da letra a no seu nome : ${nome.lastIndexOf('a')}  <br/>`;
document.body.innerHTML +=`As últimas 3 letras do seu nome são : ${nome.slice(-3)}  <br/>`;
document.body.innerHTML +=`As palavras do seu nome são : ${nome.slice(-3 ,nome.length)}  <br/>`;
document.body.innerHTML +=`Seu nome com letras maiúsculas : ${nome.toUpperCase()}  <br/>`;
document.body.innerHTML +=`Seu nome com letras minúsculas : ${nome.toLowerCase()}  <br/>`;