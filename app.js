const express = require('express');
const morgan = require('morgan');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
const { addPage } = require('./views');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));

const PORT = 1337;

app.get('/', (req, res) => {
  res.send('Hello all you people!');
});

app.get('/add', (req, res) => {
  res.send(addPage());
});

const init = async () => {
  try{
    await models.Page.sync({force: true});
    await models.User.sync({force: true});
    // await models.db.sync({force: true});
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
    // db.authenticate().
    // then(() => {
    //   console.log('connected to the database');
    // });
  } catch(error) {
    console.log(error);
  }
}

init();