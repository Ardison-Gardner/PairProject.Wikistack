//Modules
const express = require('express');
const router = express.Router();
const { addPage } = require('../views');

//Routes
router.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

router.post('/', (req, res, next) => {
  res.send('got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

//Exports
module.exports = router;
