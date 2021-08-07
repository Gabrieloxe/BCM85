const router = require('express').Router();
const Beloved = require('../models/beloveds');

router.get('/', async (req, res) => {
  try {
    const beloveds = await Beloved.find({});
    res.send({ status: true, beloveds });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body) throw new Error('Body cannot be empty!');
    const { name } = req.body;
    const beloved = new Beloved({ name });
    await beloved.save();
    res.send({ status: true, beloved });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const beloved = await Beloved.findById(req.params.id);
    res.send({ status: true, beloved });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Beloved.findByIdAndDelete(req.params.id);
    res.status(204).send({ status: true, message: 'Beloved has been deleted' });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.put('/:id', async(req,res) =>{
  try{
    const { name } = req.body;
    const beloved = new Beloved({ name });
    const options = {new: true}
    const update = await Model.findOneAndReplace({ _id: id }, beloved, options);
    res.send({ status: true, update, message: 'Beloved has been updated' });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

module.exports = router;
