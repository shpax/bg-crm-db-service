const express = require('express');

class BaseRouting {
  constructor(dbStructure) {
    this.dbStructure = dbStructure;
  }

  async getList(req, res) {
    const { page = 1, count = 20 } = req.query;
    const payload = await this.dbStructure.findAll({ limit: count, offset: (page-1) * count });

    res.send({ status: 'ok', payload });
  }

  async getItem(req, res) {
    const { id } = req.params;
    const result = await this.dbStructure.findById(id);

    res.send(result);
  }

  async updateItem(req, res) {
    const { id } = req.params;
    const { body } = req;

    if (!this.dbStructure.validate(body).valid || !id){
      res.send({ status: 'error', error: 'bad data' })
    } else {
      await this.dbStructure.update(body, {
        where: { id }
      });

      res.send({ status: 'ok' });
    }
  }

  async createItem(req, res) {
    const { body } = req;
    if (!this.dbStructure.validate(body).valid) {
      res.send({ status: 'error', error: 'bad data' })
    } else {
      const payload = await this.dbStructure.create(body);
      res.send({ status: 'ok', payload })
    }
  }

  async destroyItem(req, res) {
    const { id } = req.params;

    await this.dbStructure.destroy(body, {
      where: { id }
    });

    res.send({ status: 'ok' });
  }

  createRouter() {
    const router = express.Router();

    router.get('/list', this.getList.bind(this));
    router.get('/:id', this.getItem.bind(this));
    router.post('/new', this.createItem.bind(this));
    router.post('/:id', this.updateItem.bind(this));
    router.delete('/:id', this.destroyItem.bind(this));

    return router;
  }
}

module.exports = BaseRouting;