const sum = require('./sum')

test('sums 2 and 3', () => {
  expect(sum(2, 3)).toBe(5)
})

test('sums 0 and 0', () => {
  expect(sum(0, 0)).toBe(0)
})

// test('sums 4 and ¨5¨', () => {
//   expect(sum(4, '5')).toBe(5)
// })