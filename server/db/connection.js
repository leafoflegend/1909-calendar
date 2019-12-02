const Sequelize = require('sequelize');

const connectionURL = process.env.DATABASE_URL || 'postgres://localhost:5432/1909-calendar';

const connection = new Sequelize(connectionURL, {
  logging: false,
});

module.exports = connection;
