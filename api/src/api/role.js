const router = require('express').Router();
const Role = require('../models/roles');

router.get('/', async (req, res) => {
  try {
    const roles = await Role.find({});
    res.send({ status: true, roles });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body) throw new Error('Body cannot be empty!');
    const { roleName, viewAll, description } = req.body;
    const role = new Role({
      roleName,
      viewAll,
      description,
    });
    await role.save();
    res.send({ status: true, role });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    res.send({ status: true, role });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { roleName, viewAll, description } = req.body;
    const role = new Role({
      roleName,
      viewAll,
      description,
    });
    const options = { new: true };
    const update = await role.findOneAndReplace(
      { _id: req.params.id },
      role,
      options,
    );
    res.send({ status: true, update, message: 'Event has been updated' });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.status(204).send({ status: true, message: 'Event has been deleted' });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

module.exports = router;
