//Modules
const express = require('express');
const morgan = require('morgan');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
// const userRouter = require('./routes/user');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));
app.use('/wiki', wikiRouter);

//Port settings
const PORT = 3000;

//Routes
app.get('/', (req, res) => {
  res.send('Hello all you people!');
});

//Initiating database
const init = async () => {
  try {
    await models.Page.sync({force: true});
    await models.User.sync({force: true});
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}!`);
    });
  } catch (error) {
    console.error(error);
  }
};

init();
