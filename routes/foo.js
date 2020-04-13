const express = require('express');
const router = express.Router();
const Foo = require('../models/Foo');

// get all
router.get('/', async (req, res) => {
  const results = await Foo.find();
  res.json(results);
});

// get a member
router.get('/:name', async (req, res) => {
  const results = await Foo.find({ bar: req.body.bar });
  res.json(results);
});

router.post('/', async (req, res) => {
  const newElement = {
    bar: req.body.bar,
    baz: req.body.baz,
  };

  if (!newElement.bar || !newElement.baz) {
    res.status(400).json({ msg: 'incorrect input' });
  }
  const condition = req.body.id ? { _id: req.body.id } : {};
  await Foo.findOneAndUpdate(condition, newElement, {
    upsert: true,
  });

  return res.json(newElement);
});

module.exports = router;
