const { read, add } = require('../controllers/namesController');
const express = require('express');
const router = express.Router();

router.get('/names', read);
router.post('/names', add);

module.exports = function (server) {
  server.use('/api', router);
}
