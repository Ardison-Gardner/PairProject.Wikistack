const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.send('got to GET /user/');
});

router.post('/', (req, res, next) => {
  res.send('got to POST /user/');
});

router.get('/:id', (req, res, next) => {
  res.send('got to GET /user/:id');
});

module.exports = router;
