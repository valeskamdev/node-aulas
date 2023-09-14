let url = "https://jsonplaceholder.typicode.com/posts/10";

// 1) Conectando com o endpoint da API (url)
fetch(url)

// 2) Retornando a resposta como JSON
  .then(response => response.json())

// 3) Exibindo no console os dados obtidos na API
  .then(data => console.log(data.title))