const missingRoute = require('../middlewares/404');
const beloved = require('./beloved');
const event = require('./event');
const song = require('./song');

module.exports = (app) => {
  app.use(missingRoute);
  app.get('/healthz', async (req, res) => res.status(200).send({ message: 'Health check', status: true }),);
  app.get('/', async (req, res) => res.status(200).send({ message: 'Express api ready', status: true }),);
  app.use('/api/beloveds', beloved);
  app.use('/api/events', event);
  app.use('/api/songs', song);
  app.get('/api', (req, res) => res.send({ message: 'Express api health check!' }));
};
