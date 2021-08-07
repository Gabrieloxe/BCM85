const router = require('express').Router();
const Event = require('../models/events');

router.get('/', async (req, res) => {
  try {
    const events = await Event.find({});
    res.send({ status: true, events });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body) throw new Error('Body cannot be empty!');
    const {
      eventName, description, eventDate, date
    } = req.body;
    const event = new Event({
      eventName, description, eventDate, date
    });
    await event.save();
    res.send({ status: true, event });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.send({ status: true, event });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

module.exports = router;
