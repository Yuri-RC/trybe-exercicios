// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com

const createPess = (name) => {
  lowerName = name.toLowerCase();
  let email = lowerName.split(' ').join('_')
  // for (i = 0; i < (name.split(' ').length); i+= 1) {
  //   email += `${lowerName.split(' ')[i]}_`
  // }
  return { nome: name, email: `${email}@trybe.com` }
}

const newEmployees = (createPess) => {
  const employees = {
    id1: createPess('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createPess('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createPess('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(createPess));

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// const verifyNumber = (random, apostado) => {
//   if (random === apostado) {
//     return true;
//   }
//   return false;
// }

const verifyNumber = (random, apostado) => random === apostado;

const randomNumber = (num, func) => {
  const random = Math.floor((Math.random() * 5) + 1);
  return func(random, num) ? 'Parabéns você ganhou' : 'Tente novamente';
  // if (func(random, num)) {
  //   return ;
  // }
  // return 'Tente novamente';
}

// console.log(randomNumber(3, verifyNumber));

// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testCorrector = (righ, student) => {
  let counter = 0;
  for (i = 0; i < righ.length; i += 1) {
    if (righ[i] === student[i]) {
      counter += 1;
    } else if (student[i] !== 'N.A') {
        counter -= 0.5;
    }
  }
  return counter;
}

const testResult = (righ, student, func) => {
  return `Resultado final: ${func(righ, student)} pontos`;
}

console.log(testResult(RIGHT_ANSWERS, STUDENT_ANSWERS, testCorrector));