const trimAndSplit = word => word.trim().split(' ');

const checkAlphaNumeric = (text) => {
  const check = text.match(/\W/g);
  if (check.length >= 1) {
    // check spaces
    return check.filter(letter => !letter.match(/\s/g)).length <= 0;
  }
  return true;
};

const countChars = (word) => {
  const orderedWord = word
    .toLowerCase()
    .trim()
    .replace(/([0-9]|\s)/g, '')
    .split('')
    .sort()
    .join('');

  const removedDuplicates = [];

  orderedWord.split('').forEach((letter) => {
    if (removedDuplicates.indexOf(letter) === -1) {
      removedDuplicates.push(letter);
    }
  });

  return removedDuplicates.map(letter => (
    {
      [letter]: orderedWord.match(RegExp(letter, 'g')).length,
    }
  ));
};

const textLength = word => ({
  withSpaces: word.length,
  withoutSpaces: trimAndSplit(word).join('').length,
});

const checkWords = (word) => {
  const trimmedAndSplit = trimAndSplit(word);
  
  return {
    textLength: textLength(word),
    wordCount: trimmedAndSplit.length,
    characterCount: countChars(word),
  };
};

module.exports = {
  textLength,
  trimAndSplit,
  checkWords,
  countChars,
  checkAlphaNumeric,
};
