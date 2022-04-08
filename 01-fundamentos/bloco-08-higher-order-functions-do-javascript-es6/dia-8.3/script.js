const db = require('./database')

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames(array) {
  // escreva seu código aqui
  return array.map((obj) => `${obj.name} - ${obj.genre} - ${obj.author.name}`)
}
// console.log(formatedBookNames(array));

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

function nameAndAge(array) {
  // escreva seu código aqui
  const infoSort = array.sort((birth1, birth2) => birth1.author.birthYear - birth2.author.birthYear)
  return infoSort.map((obj) => ({author: obj.author.name, age:  (obj.releaseYear - obj.author.birthYear)}))
  
}

// console.log(nameAndAge(db));

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction(array) {
  // escreva seu código aqui
  return array.filter((obj) => obj.genre === 'Ficção Científica' || obj.genre === 'Fantasia')
}

// console.log(fantasyOrScienceFiction(db));

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered(array) {
  // escreva seu código aqui
  const currentYear = new Date().getFullYear();
  return array.filter((obj) => (currentYear - obj.releaseYear) > 60).sort((release1, release2) => release1.releaseYear - release2.releaseYear);
}

// console.log(oldBooksOrdered(db));

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors(array) {
  // escreva seu código aqui
  return array.filter((obj) => obj.genre === 'Ficção Científica' || obj.genre === 'Fantasia').map((name) => name.author.name).sort()
}

// console.log(fantasyOrScienceFictionAuthors(db));

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks(array) {
  // escreva seu código aqui
  const currentYear = new Date().getFullYear();
  return array.filter((obj) => (currentYear - obj.releaseYear) > 60).map((book) => book.name)
}

// console.log(oldBooks(db));

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).

function authorWith3DotsOnName(array) {
  // escreva seu código aqui
  
}

console.log(authorWith3DotsOnName(db));
