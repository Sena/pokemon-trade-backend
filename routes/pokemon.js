const express = require('express');
const router = express.Router();

const PokemonController = require('../controllers/pokemon-controller');


router.get('/', PokemonController.list);
router.get('/:id', PokemonController.get);

module.exports = router;
