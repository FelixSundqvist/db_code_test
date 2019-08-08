const trimAndSplit = word => word.trim().split(' ');

const countChars = (word) => {
  const orderedWord = word
    .toLowerCase()
    .trim()
    .replace(/(\W|\s|[0-9])/g, '')
    .split('')
    .sort()
    .join('');

  const removedDuplicates = [];

  orderedWord.split('').forEach((letter) => {
    if (removedDuplicates.indexOf(letter) === -1) {
      removedDuplicates.push(letter);
    }
  });

  if (word.length > 0) {
    return removedDuplicates.map(letter => (
      {
        [letter]: orderedWord.match(RegExp(letter, 'g')).length,
      }
    ));
  }
  return [];
};

const textLength = word => ({
  withSpaces: word.length > 0 ? word.length : 0,
  withoutSpaces: word.length > 0 ? trimAndSplit(word).join('').length : 0,
});

const checkWords = (word) => {
  const trimmedAndSplit = trimAndSplit(word);
  return {
    textLength: textLength(word),
    wordCount: word.length > 0 ? trimmedAndSplit.length : 0,
    characterCount: countChars(word),
  };
};

module.exports = {
  textLength,
  trimAndSplit,
  checkWords,
  countChars,
};
