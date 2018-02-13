var express = require('express');
var router = express.Router();

// Adds support for GET requests to our webhook
router.get('/', (req, res) => {
  res.status(200).send();
});

module.exports = router;
