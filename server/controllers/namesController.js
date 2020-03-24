const Name = require('../models/name');

exports.read = (req, res) => {
  Name.find({}, (err, names) => {
    if (err) return res.status(400).json({
      error: err
    });

    res.json(names);
  });
}

exports.add = (req, res) => {
  const { name } = req.body;

  const n = new Name({ name });
  n.save((err, docs) => {
    if (err) return res.status(400).json({
      error: err
    });
    
    res.json({
      message: `${n.name} is saved!`
    });
  });
}

exports.remove = (req, res) => {
  const { id } = req.body;

  Name.findOneAndRemove({ _id: id }, (err, removedName) => {
    if (err) return res.status(400).json({
      error: err
    });
    res.json({
      message: `${removedName.name} is removed!`
    });
  });
}