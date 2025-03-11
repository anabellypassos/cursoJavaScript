const express = require ('express');
const app = express();


app.get('/',(req,res)=>{

res.send(`
    <form action="/" method="POST">
    Nome do cliente :<input type="text" name="nome">
    <button>Olá mundo !</button>
    </form>
    `);



});
app.get('/contato',(req,res)=>{

    res.send('Obrigado por entrar em contato com a gente!!');
    
    
    
    });

app.listen(4000 ,()=>{
    console.log('Acessae http://localhost:4000')
console.log('servidor executando na porta 4000');
});