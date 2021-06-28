const express = require('express');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const pokemonRouter = require('./routes/pokemon');
const exchangeRouter = require('./routes/exchange');

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/pokemon', pokemonRouter);
app.use('/exchange', exchangeRouter);

app.use(function (req, res, next) {
    return res.status(404).send({
        message: 'Path not found. You know what are you doing?'
    })
});

module.exports = app;
