const ceaserCipher = require('./ceaserCipher');

test('shift every character', () => {
  expect(ceaserCipher('xyz', 3)).toBe('abc');
  expect(ceaserCipher('HeLLo', 3)).toBe('KhOOr');
  expect(ceaserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})