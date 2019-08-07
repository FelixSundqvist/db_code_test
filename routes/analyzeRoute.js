const express = require('express');
const router = express.Router();
const analyzeWord = require('../controller/analyzeController');

router.route('/').post(analyzeWord)


module.exports = router;