const express = require("express");
const router = express.Router();
const Beloved = require('../models/beloveds');
const Event = require('../models/events');


router.get("/", async (request, response) => {
  response.json({
    message: "API - 👋🌎🌍🌏",
  });
});

// BELOVED ROUTES

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

// EVENT ROUTES

router.get('/api/events', (request, response) =>{
  Note.find({}).then( events => {
    response.json(events);
  });
});

app.post('/api/events', (request, response) => {
  const body = request.body;

  if(!body.content) {
    return response.status(400).json({
      error: 'content missing'
    });
  }

  const event = new Event({
    name: body.content.name,
    description: body.content.description,
    eventDate: Date.parse(body.content.eventDate),
    date: new Date(),
  });

  event.save().then(savedEvent => {
    response.json(savedEvent);
  });
});

app.get('/api/events/:id', (request, response) => {
  const id = request.params.id;
  Event.findById(id).then(event => {
    response.json(event);
  });
});

module.exports = router;
