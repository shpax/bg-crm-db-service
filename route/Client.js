const BaseRouting = require('./BaseRouting');
const Client = require('../model/Client');

class ClientRouter extends BaseRouting {
  constructor() {
    super(Client)
  }
}

module.exports = ClientRouter;