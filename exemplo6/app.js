import express from 'express';

// Armazenando o express em uma variável. Ao invés de chamar express().get, usa-se app.get
const app = express();

// configurar a view engine EJS
app.set('view engine', 'ejs');

// configurar as rotas de acesso
app.get('/', (req, res) => {
  // res.send('Bem vindo ao servidor ExpressJS. Foi mais fácil do que parecia.')

  const bandas = ["Justice", "Daft Punk", "The Weeknd", "Kavinsky"];
  res.render('pages/index', {bandas}); // renderiza a página index.ejs
})

app.get('/sobre', (req, res) => {
  res.render('pages/sobre');
})

app.get('/contato', (req, res) => {
  res.render('pages/contato');
})

// iniciar o servidor e escolher a porta
app.listen(3000, () => {
  console.log("Servidor ExpressJS rodando normalmente");
})

// raiz