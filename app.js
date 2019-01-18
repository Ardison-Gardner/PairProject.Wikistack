const express = require('express');
// const sequelize = require('sequelize');
const morgan = require('morgan');
const { db } = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));

const PORT = 1337;

app.get('/', (req, res) => {
  res.send('Hello all you people!');
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

db.authenticate().
then(() => {
  console.log('connected to the database');
});
