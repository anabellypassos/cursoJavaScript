require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');





mongoose.connect(process.env.CONNECTIONSTRING, {userNewUrlParser:true, useUnifiedtopology:true})
.then(()=> {

  app.emit('pronto');
})
.catche(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middlewares');
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// nossos proprios middwares
app.use(middlewareGlobal);
app.use(routes);


app.on('pronto',()=>{

app.listen(4000, () => {
  console.log('Acessar http://localhost:4000');
  console.log('Servidor executando na porta 4000');
});

});

