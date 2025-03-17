const express = require ('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({extended:true}));
app.use(routes);



app.listen(4000 ,()=>{
    console.log('Acessae http://localhost:4000')
console.log('servidor executando na porta 4000');
});