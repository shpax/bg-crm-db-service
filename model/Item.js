const Sequelize = require('sequelize');
const sequelize = require('./connection');
const validator = require('./validator');
const _ = require('lodash');

const Item = sequelize.define('item', {
  name: Sequelize.STRING,
  height: Sequelize.INTEGER,
  print_price: Sequelize.INTEGER,
  paint_price: Sequelize.INTEGER,
  job_price: Sequelize.INTEGER,
  packing_price: Sequelize.INTEGER,
  client_price: Sequelize.INTEGER,
});

function validate(data) {
  return validator.validate(data, 'Item');
}

module.exports = _.set(Item, 'validate', validate);
