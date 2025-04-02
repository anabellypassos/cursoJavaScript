require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');





mongoose.connect(process.env.CONNECTIONSTRING, { userNewUrlParser: true, useUnifiedtopology: true })
  .then(() => {

    app.emit('pronto');
  })
  .catche(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');





const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middlewares');
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'ASDGDGAGREAGT()',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }

})
app.use(sessionOptions);
app.use(flash());



app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// nossos proprios middwares
app.use(middlewareGlobal);
app.use(routes);


app.on('pronto', () => {

  app.listen(4000, () => {
    console.log('Acessar http://localhost:4000');
    console.log('Servidor executando na porta 4000');
  });

});

