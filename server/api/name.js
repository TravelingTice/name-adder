const { read, add, remove } = require('../controllers/namesController');
const express = require('express');
const router = express.Router();

router.get('/names', read);
router.post('/names', add);
router.delete('/names', remove);

module.exports = function (server) {
  server.use('/api', router);
}
