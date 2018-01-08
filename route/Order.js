const BaseRouting = require('./BaseRouting');
const Order = require('../model/Order');

class OrderRouter extends BaseRouting {
  constructor() {
    super(Order)
  }
}

module.exports = OrderRouter;