const {ExchangeSchema} = require('../model/exchange-model');
const mongoose = require('../config/mongoose')
const Exchange = mongoose.model('exchange', ExchangeSchema);

exports.list = async (req, res) => {
    const exchange = await Exchange.find().sort({ created_date: -1 }).limit(10);
    return res.status(201).send({
        exchange
    });
}
exports.create = (req, res) => {

    const new_exchange = new Exchange({
        player1: req.body.player1,
        player2: req.body.player2,
        player1Total: req.body.player1Total,
        player2Total: req.body.player2Total,
        textExchange: req.body.textExchange,
    })

    new_exchange.save((err) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(201).send({
            message: 'Exchange saved',
        });
    })
}