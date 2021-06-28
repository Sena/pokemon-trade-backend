const express = require('express');
const router = express.Router();

const ExchangeController = require('../controllers/exchange-controller');


router.get('/', ExchangeController.list);
router.post('/', ExchangeController.create);

module.exports = router;
