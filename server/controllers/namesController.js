const Name = require('../models/name');

exports.read = (req, res) => {
  res.json({
    name: ['paard', 'app']
  });
}

exports.add = (req, res) => {
  res.json({
    error: 'this one is not written yet'
  })
}