const models = require('./models/index.js');
const connection = require('./connection.js');
const seed = require('./seed.js');

module.exports = {
  seed,
  models,
  connection,
};
