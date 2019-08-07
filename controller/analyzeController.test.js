const analyzeController = require('./analyzeController');

test('expect "hello " with spaces to be 6 and without to be 5', () => {
  const str = 'hello ';
  expect(analyzeController.textLength(str).withSpaces).toBe(6);
  expect(analyzeController.textLength(str).withoutSpaces).toBe(5);
});
