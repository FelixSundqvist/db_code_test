const analyzeController = require('./analyzeController');

const str = 'hello 2 times  ';

test(`"${str}" with spaces to be 15 and without to be 11`, () => {
  expect(analyzeController.textLength(str).withSpaces).toBe(15);
  expect(analyzeController.textLength(str).withoutSpaces).toBe(11);
});

test(`that "${str}" word count is 3`, () => {
  expect(analyzeController.trimAndSplit(str).length).toBe(3);
})

describe('Character counting output', () => {
  test('letter counting output is in order', () => {
    expect(analyzeController.countChars('hello hello')).toStrictEqual([ { e: 2 }, { h: 2 }, { l: 4 }, { o: 2 } ]);
  });
  test('handle uppercase', () => {
    expect(analyzeController.countChars('HelLo hEllo')).toStrictEqual([ { e: 2 }, { h: 2 }, { l: 4 }, { o: 2 } ]);
  });
  test('remove numbers', () => {
    expect(analyzeController.countChars('He1lL1o 1351 hEllo 123')).toStrictEqual([ { e: 2 }, { h: 2 }, { l: 4 }, { o: 2 } ]);
  });
})

test('check string for non-alphanumeric chars',  () => {
    expect(analyzeController.checkAlphaNumeric("hello ååå")).toBe(false);
    expect(analyzeController.checkAlphaNumeric(str)).toBe(true);
    expect(analyzeController.checkAlphaNumeric(" h h h ")).toBe(true);
})