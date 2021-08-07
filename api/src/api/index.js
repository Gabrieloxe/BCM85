const express = require("express");

const router = express.Router();

router.get("/", async (request, response) => {
  response.json({
    message: "API - 👋🌎🌍🌏",
  });
});

module.exports = router;
