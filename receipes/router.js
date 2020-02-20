const express = require('express');

const data = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    data.findRecipe()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

  router.get('/shoppinglist', (req, res) => {
    data.findShoppinglist()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
  });

  router.get('/instruction', (req, res) => {
    data.findInstruction()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instruction list' });
    });
  });

  module.exports = router;