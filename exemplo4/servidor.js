import http from 'http'; // importando módulo nativo http, mesmo sendo um módulo nativo, ainda assim precisamos do package.json

// criando função para que vai monitorar as requisições e respostas do servidor
const monitorRequisicao = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'}); // escrevendo cabeçalho da resposta

  // avaliando cada reqisição (a partir do link)
  switch (req.url) {
    case '/':
      // index.html
    break;
    case '/sobre':
      // sobre.html
    break;
    default:
      // 404.html
    break;
  }
}