const Sequelize = require('sequelize');
const { mysql } = require('config');
const { host, port, db, username, password } = mysql;

const sequelize = new Sequelize(db, username, password, {
  host, port, dialect: 'mysql',
});

module.exports = sequelize;
