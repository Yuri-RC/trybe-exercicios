const db = require('./database')

// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// console.log(flatten());

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames(array) {
  // escreva seu código aqui
  return array.reduce((acc, curr) => acc.concat(curr.author.name), [])
}

// console.log(reduceNames(db));

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge(array) {
  // escreva seu código aqui
  return (array.reduce((acc, curr) => (acc + (curr.releaseYear - curr.author.birthYear)), 0)) / array.length
}
console.log(averageAge(db));

// 4 - Encontre o livro com o maior nome.
function longestNamedBook() {
  // escreva seu código aqui
}