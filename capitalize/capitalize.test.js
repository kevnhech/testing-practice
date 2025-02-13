const capitalize = require('./capitalize');

test('capitalize first letter of a string', () => {
  expect(capitalize("kevin")).toMatch(/Kevin/);
});
