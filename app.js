const express = require('express');
const analyzeRouter = require('./routes/analyzeRoute');
const app = express();

const routes = {
    analyze: '/analyze'
};

app.use(express.json());

app.use(routes.analyze, analyzeRouter);

module.exports = app;