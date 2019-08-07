const trimAndSplit = word => word.trim().split(' ');

const countChars = word => {
    const orderedWord = word.trim()
    .replace(/([0-9]|\s)/g, '')
    .split('')
    .sort()
    .join('');
  
    const removedDuplicates = [];
  
    orderedWord.split('').forEach(letter => {
      if (removedDuplicates.indexOf(letter) === -1) {
        removedDuplicates.push(letter);
      }
    });
  
    return removedDuplicates.map(letter => (
        {
          [letter]: orderedWord.match(RegExp(letter, 'g')).length
        }
      )
    )
};

const textLength = word => ({
  withSpaces: word.length,
  withoutSpaces: trimmedAndSplit(word).join('').length
})
const checkWords = word => {
  const trimmedAndSplit = trimAndSplit(word);
  return {
    textLength: textLength(word),
    wordCount: trimmedAndSplit.length,
    characterCount: countChars(word)
  };
};

const analyzeWord = async (req, res) => {
  try {
    const text = await req.body.text;

    const match = text.match(/\W/g).filter(letter => !letter.match(/\s/g));

    if(match.length < 1){
      res.status(200).json({
        status: 'ok',
        data: checkWords(text)
     })

    }else {
      throw new Error('only numbers and letters from a-z');
    }
  } catch (error) {
    res.status(400).json({
      status: 'error',
      data: {
        error: error.message || "please send a compatible object"
      }
    })
  }

}

module.exports = {
  textLength,
  trimAndSplit,
  analyzeWord,
  checkWords,
  countChars
}
  