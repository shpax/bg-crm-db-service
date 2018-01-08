const BaseRouting = require('./BaseRouting');
const Item = require('../model/Item');

class ItemRouter extends BaseRouting {
  constructor() {
    super(Item)
  }
}

module.exports = ItemRouter;