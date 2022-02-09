const romanNumerals = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

let numeral = "IM";

let result = 0
if (numeral.length == 1) {
  for (k in romanNumerals){
    if (numeral == k){
      result = romanNumerals[k];
    }
  }
} else {
  let firstNumber = romanNumerals[numeral[0]];
  let lastNumber = romanNumerals[numeral[1]];
  for (k in romanNumerals){
    if (k == numeral[0] && romanNumerals[k] > lastNumber || firstNumber == lastNumber) {
      result = (firstNumber + lastNumber);
    } else if (k == numeral[0] && romanNumerals[k] < lastNumber) {
      result = (lastNumber - firstNumber);

    }
  }
}
console.log(result);




































// const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];

// let newBasket = {};

// for (let i = 0; i < basket.length; i++) {
//   if (newBasket[basket[i]]) {
//     newBasket[basket[i]] += 1;
//   } else {
//     newBasket[basket[i]] = 1;
//   }
// }

// console.log(newBasket);