const myRemove = require('./remove')

test('verify [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})
test('verify not [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})
test('verify [1, 2, 3, 4], 5', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})
