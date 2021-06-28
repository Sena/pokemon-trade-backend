const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  return res.status(200).send({
    message: "Hi, I'm an API, and you should be my master. How can I be helpful?"
  })
});

module.exports = router;
