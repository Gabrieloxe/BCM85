const missingRoute = require('../middlewares/404');

module.exports = (app) => {
  app.use(missingRoute);
  app.get('/healthz', async (req, res) => res.status(200).send({ message: 'Health check', status: true }),);
  app.get('/', async (req, res) => res.status(200).send({ message: 'Express api ready', status: true }),);
  app.use('/api/beloveds', require('./beloveds'));
  app.use('/api/events', require('./event'));
  app.get('/api', (req, res) => res.send({ message: 'Express api health check!' }),);
};
