const Sequelize = require('sequelize');
const sequelize = require('./connection');
const validator = require('./validator');
const _ = require('lodash');

const Client = sequelize.define('client', {
  name: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  city: Sequelize.STRING,
});

function validate(data) {
  return validator.validate(data, 'Client');
}

module.exports = _.set(Client, 'validate', validate);
