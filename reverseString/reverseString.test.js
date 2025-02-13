const reverseString = require('./reverseString');

test('reverse a string', () => {
  expect(reverseString("Hamster")).toBe("retsmaH");
});