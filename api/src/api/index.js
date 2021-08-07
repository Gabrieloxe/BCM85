const express = require("express");
const router = express.Router();
const Beloved = require('../models/beloveds');


router.get("/", async (request, response) => {
  response.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.get('/api/beloveds', (request, response) =>{
  Note.find({}).then( beloveds => {
    response.json(beloveds);
  });
});

app.post('/api/beloveds', (request, response) => {
  const body = request.body;

  if(!body.content) {
    return response.status(400).json({
      error: 'content missing'
    });
  }

  const beloved = new Beloved({
    name: body.content,
    date: new Date(),
  });

  beloved.save().then(savedBeloved => {
    response.json(savedBeloved);
  });
});

app.get('/api/beloveds/:id', (request, response) => {
  const id = request.params.id;
  Beloved.findById(id).then(beloved => {
    response.json(beloved);
  });
});

module.exports = router;
