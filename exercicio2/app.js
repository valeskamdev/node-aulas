import express from 'express';
import randomError from './modules/funcoes.js';

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(200).render('pages/index');
});

//  utilizamos app.use() para lidar com todas as outras rotas que não foram definidas (404)
app.use((req, res) => {
  res.status(404).render('pages/404', { randomError });
});

export default app;