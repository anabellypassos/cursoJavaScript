const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');
//Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//rota de contato
route.get('/',contatoController.paginaInicial);
module.exports = route;