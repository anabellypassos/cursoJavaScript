const express = require ('express');
const app = express();

app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{

res.send(`
    <form action="/" method="POST">
    Nome do cliente :<input type="text" name="nome">
    <button>Olá mundo !</button>
    </form>
    `);



});

app.get('/testes/:idUsuarios?/:parametro?',( req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/',(req,res)=>{
console.log(req.body);
    res.send(`Oq voce me enviou foi ${req.body.nome}`);
    
    
    
    });

app.listen(4000 ,()=>{
    console.log('Acessae http://localhost:4000')
console.log('servidor executando na porta 4000');
});