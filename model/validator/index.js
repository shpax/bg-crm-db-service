const clientSchema = require('./schema/Client');
const itemSchema = require('./schema/Item');
const orderSchema = require('./schema/Order');

const Validator = require('jsonschema').Validator;
const v = new Validator();

v.addSchema(clientSchema, '/Client');
v.addSchema(itemSchema, '/Item');
v.addSchema(orderSchema, '/Order');

module.exports = v;
