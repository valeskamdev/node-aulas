function randomError() {
  const errors = [
    'Página não encontrada!',
    'Acho que você se perdeu!',
    'Você está no lugar errado!',
    'Essa página não existe!',
  ];

  const randomIndex = Math.floor(Math.random() * errors.length);
  return errors[randomIndex];
}

export default randomError;