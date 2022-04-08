// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// it('uppercase "test" to equal "TEST"', (done) => {
//   uppercase('test', (str) => {
//     try {
//       expect(str).toBe('TEST');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

// 8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon! No laboratório do Professor Caralho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função getPokemonDetails de modo que ela imprima no console os detalhes do pokémon que você escolheu. PS: é possível que o sistema do Professor Carvalho apresente erros caso o pokémon não exista no banco de dados, então não se esqueça de tratá-los também, combinado?

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const aaa = getPokemonDetails(
  (q) => q.name === 'Pikachu', 
  (error, message) => {
    if (error) {
      console.log(error);
    } else {
      console.log(message);
    }
  }
)

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    // Escreva aqui seu código
    expect(getPokemonDetails(
      (q) => q.name === 'Pikachu', 
      (error, message) => {
        if (error) {
          return (error);
        } else {
          return (message);
        }
      }
    )
    ).toBe('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    expect(getPokemonDetails()).toBe('Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf');
  });
});