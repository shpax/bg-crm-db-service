const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const sequelize = require('./model/connection');
const Security = require('./middleware/AppKey');

const ClientRouter = require('./route/Client');
const ItemRouter = require('./route/Item');
const OrderRouter = require('./route/Order');

const app = express();

app.use(Security);
app.use(bodyParser.json());

app.use('/client', new ClientRouter().createRouter());
app.use('/item', new ItemRouter().createRouter());
app.use('/order', new OrderRouter().createRouter());

sequelize.sync().then(() => {
  app.listen(config.port, () => {
    console.log('app ready')
  });
});

