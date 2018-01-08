const Sequelize = require('sequelize');
const sequelize = require('./connection');
const validator = require('./validator');
const _ = require('lodash');

const Order = sequelize.define('order', {
  client_id: Sequelize.INTEGER,
  item_id: Sequelize.INTEGER,
  status: Sequelize.STRING,
  send_date: Sequelize.DATE,
  finish_date: Sequelize.DATE,
  create_date: Sequelize.DATE,
  address: Sequelize.STRING,
  paid: Sequelize.INTEGER
});


function validate(data) {
  return validator.validate(data, 'Order');
}

module.exports = _.set(Order, 'validate', validate);
