const {checkAlphaNumeric, checkWords} = require('../utils');

const analyzeWord = async (req, res) => {
  try {
    const text = await req.body.text;

    if(checkAlphaNumeric(text)){
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
  analyzeWord
}
  