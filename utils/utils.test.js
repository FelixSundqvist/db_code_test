const utils = require('./index');

const str = 'hello 2 times  ';

test(`"${str}" with spaces to be 15 and without to be 11`, () => {
  expect(utils.textLength(str).withSpaces).toBe(15);
  expect(utils.textLength(str).withoutSpaces).toBe(11);
});

test(`that "${str}" word count is 3`, () => {
  expect(utils.trimAndSplit(str).length).toBe(3);
});

describe('Character counting output', () => {
  test('letter counting output is in order', () => {
    expect(utils.countChars('hello hello')).toStrictEqual([{ e: 2 }, { h: 2 }, { l: 4 }, { o: 2 }]);
  });
  test('handle uppercase', () => {
    expect(utils.countChars('HelLo hEllo')).toStrictEqual([{ e: 2 }, { h: 2 }, { l: 4 }, { o: 2 }]);
  });
  test('remove numbers', () => {
    expect(utils.countChars('He1lL1o 1351 hEllo 123')).toStrictEqual([{ e: 2 }, { h: 2 }, { l: 4 }, { o: 2 }]);
  });
});

/* test('check string for non-alphanumeric chars', () => {
  expect(utils.checkAlphaNumeric('hello ååå')).toBe(false);
  expect(utils.checkAlphaNumeric(str)).toBe(true);
  expect(utils.checkAlphaNumeric(' h h h ')).toBe(true);
});
 */