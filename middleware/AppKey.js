const config = require('config');

module.exports = (req, res, next) => {
  if (req.header('appKey') === config.appKey) {
    next()
  } else {
    res.status(500).send({ status: 'err', error: 'bad api key' })
  }
};