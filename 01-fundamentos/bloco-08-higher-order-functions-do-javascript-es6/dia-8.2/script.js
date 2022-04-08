const db = require('./database')

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947(array) {
  return array.find((pess) => pess.author.birthYear === 1947)
}

// console.log(authorBornIn1947(db));

// 2 - Retorne o nome do livro de menor nome.

// db.forEach((element) => console.log(element.name))
function smallerName(array) {
  let nameBook;
  // escreva aqui o seu código
  array.forEach((element) => {
    if (!nameBook || element.name.length < nameBook.length) {
      nameBook = element.name
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// console.log(smallerName(db));

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(array) {
  // escreva seu código aqui
  return array.find((element) => element.name.length === 26)
}

// console.log(getNamedBook(db));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(array) {
  // escreva aqui seu código
  return array.sort((a, b) =>  b.releaseYear - a.releaseYear)
}

// console.log(booksOrderedByReleaseYearDesc(db));

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

function everyoneWasBornOnSecXX(array) {
  // escreva seu código aqui
  return array.every((birthYear) => 1900 > birthYear.author.birthYear && birthYear.author.birthYear <= 2000)
}

// console.log(everyoneWasBornOnSecXX(db));

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

function someBookWasReleaseOnThe80s(array) {
  // escreva seu código aqui
  return array.some((releaseYear) => releaseYear.releaseYear >= 1980 && releaseYear.releaseYear < 1990)
}
// console.log(someBookWasReleaseOnThe80s(db));

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
function authorUnique(array) {
  // escreva seu código aqui
  return array.every((book) =>
    !array.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));

}

console.log(authorUnique(db));