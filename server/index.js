const express = require('express');
const path = require('path');
const chalk = require('chalk');
const { connection, seed } = require('./db/index.js');
const apiRouter = require('./routes/index.js');

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV === 'development';

const app = express();

const rootPath = path.dirname(__dirname);

const publicPath = path.join(rootPath, './dist');

app.use(express.json());
app.use(express.static(publicPath));
app.use('/api', apiRouter);

const setUpDB = () => new Promise((resolve, reject) => {
  connection.sync({
    force: IS_DEV,
  })
    .then(() => {
      return IS_DEV
        ? seed()
        : Promise.resolve(true)
    })
    .then(resolve)
    .catch(reject);
});

setUpDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.greenBright(`Server now listening on PORT:${PORT}`));
    });
  })
  .catch(e => {
    console.log(chalk.red('Error while starting up server.'));
    console.error(e);
    process.exit(1);
  });
