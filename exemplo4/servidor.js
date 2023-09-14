import http from 'http'; //  http: módulo nativo do node que permite criar um servidor
import fs from 'fs/promises'; // file system: permite ao servidor acessar arquivos do sistema (módulo nativo)

// constante que vai monitorar as requisições e respostas do servidor
const monitorRequisicao = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' }); // escrevendo cabeçalho da resposta

  // avaliando cada reqisição (a partir do link)
  switch (req.url) {
    case '/':
      // fs faz o carregamento e leitura do arquivo
      fs.readFile('paginas/index.html')

        // depois de pronto, envia o conteudo como resposta
        .then(conteudo => res.end(conteudo));
      break;
    case '/sobre':
      fs.readFile('paginas/sobre.html')
        .then(conteudo => res.end(conteudo));
      break;
    default:
      res.writeHead(404); // caso não encontre a página, retorna o erro 404

      fs.readFile('paginas/404.html')
        .then(conteudo => res.end(conteudo))
      break;
  }
};

// criando o servidor http e passando a constante monitorRequisicao como callback
const servidor = http.createServer(monitorRequisicao);

// servidor escutando a porta 8080
// servidor.listen(8080)  // só esse trecho já seria o suficiente, mas é importante rodar a mensagem para ter certeza que tudo deu certo.

servidor.listen(8080, () => {
  console.log('Servidor node rodadando normalmente. 🚀');
});