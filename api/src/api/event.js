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
      title, description, start, end, allDay
    } = req.body;
    const event = new Event({
      title,
      description,
      start,
      end,
      allDay,
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

router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(204).send({ status: true, message: 'Event has been deleted' });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      title, description, start, end, allDay
    } = req.body;
    const event = new Event({
      title, description, start, end, allDay
    });
    const options = { new: true };
    const update = await Event.findOneAndReplace(
      { _id: req.params.id },
      event,
      options,
    );
    res.send({ status: true, update, message: 'Event has been updated' });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

module.exports = router;
