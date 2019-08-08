const { checkWords } = require('../utils');

const analyzeWord = async (req, res) => {
  try {
    const text = await req.body.text;
    const testName = await req.body.testName;

    res.status(200).json({
      testName,
      text,
      expectedResult: checkWords(text),
    });

  } catch (error) {
    res.status(400).json({
      status: 'error',
      data: {
        error: error.message || 'please send a compatible object',
      },
    });
  }
};

module.exports = {
  analyzeWord,
};
