//Modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const models = require('./models');
const wikiRouter = require('./routes/wiki');
// const userRouter = require('./routes/user');

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/wiki', wikiRouter);

//Routes
app.get('/', (req, res) => {
  res.redirect('/wiki');
});

//Port settings
const PORT = 3000;

//Initiating & listening to database
const init = async () => {
  try {
    await models.Page.sync();
    await models.User.sync();
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}!`);
    });
  } catch (error) {
    console.error(error);
  }
};

init();
